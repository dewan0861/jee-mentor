import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPTS = {
  socratic: `You are an elite, encouraging JEE Master Mentor (IITian).
Your pedagogical mission is to help the student solve problems INDEPENDENTLY.
NEVER immediately give away the final numerical answer or correct option!
Instead:
1. Identify the fundamental physical/chemical/mathematical principle involved.
2. Ask 1-2 guiding Socratic questions to prompt their intuition.
3. Provide Hint 1 (gentle conceptual nudge).
4. Clearly state what formulas they should recall.
Always format mathematical equations using LaTeX: $...$ for inline and $$...$$ for display equations.
Keep responses concise, motivating, and mathematically precise.`,

  concept: `You are an elite JEE Master Professor (IITian).
Explain the requested concept with supreme clarity for JEE Main & Advanced:
1. Core intuition and physical/geometric meaning (analogy where helpful).
2. Governing formulas and equations in LaTeX ($...$ and $$...$$).
3. Conditions of applicability (where students usually make mistakes or apply it invalidly).
4. Typical JEE trap / trick related to this concept.
Keep explanations rigorous yet easy to grasp.`,

  doubt: `You are an elite JEE Doubt Resolution Mentor (IITian).
Provide a complete, rigorous, step-by-step solution for this problem:
1. State given parameters and target variable.
2. Step 1, Step 2, Step 3 with clear mathematical and conceptual justification for each line.
3. Highlight any algebraic shortcuts or symmetry tricks suitable for JEE time constraints.
4. Final boxed answer in LaTeX.
Format all equations with LaTeX ($...$ and $$...$$).`,

  formula: `You are a JEE Formula & Quick-Recall Engine.
Provide an ultra-crisp, high-yield revision card:
1. Core Formula(s) in LaTeX.
2. Meaning of each variable and SI units.
3. Limitations / assumptions.
4. 1-line mnemonics or memory hooks for fast recall during exam pressure.`,

  hint_tree: `You are a JEE 3-Step Hint Tree Engine.
Break down the solution into three distinct, progressive levels:
- **Level 1 (Concept Anchor)**: Which fundamental law/theorem applies here?
- **Level 2 (Equation Setup)**: How to set up the boundary conditions or coordinate equations without simplifying yet.
- **Level 3 (Execution & Shortcut)**: The algebraic resolution and answer check.
Use LaTeX for all mathematical expressions.`,

  quiz: `You are an interactive JEE Quiz Master (IITian).
When asked about a topic:
1. Pose ONE high-yield, challenging JEE-level multiple-choice or numerical problem on that topic.
2. Do NOT reveal the solution or answer yet!
3. Ask the student to solve it and reply with their approach or option.
4. Once the student replies, evaluate their answer, point out flaws or commend their speed, and explain the fastest technique.`,
};

export async function POST(req: NextRequest) {
  try {
    const { 
      message = '', 
      mode = 'socratic', 
      questionContext, 
      history = [],
      image,
      imageMime = 'image/jpeg'
    } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    // Graceful fallback if user hasn't added their API key yet
    if (!apiKey) {
      return NextResponse.json({
        reply: `### 🎓 JEE Mentor Hint (Offline Mode)
To activate live AI reasoning and camera/image doubt solving, please paste your free Google AI Studio API key in \`.env.local\` as:
\`GEMINI_API_KEY=your_key_here\`

---
#### Socratic Guidance:
1. **Identify the Core Principle**: What are the conserved quantities (e.g., energy, momentum, charge, mass balance)?
2. **Key Formulas**:
   $$\\vec{F} = \\frac{d\\vec{p}}{dt}, \\quad \\Delta U = -W_{\\text{internal}}, \\quad \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{in}}}{\\varepsilon_0}$$
3. **Common Trap**: Look out for boundary conditions, sign conventions, and non-inertial frames!

*Try setting up the free-body diagram or algebraic system of equations!*`,
        isOfflineMode: true,
      });
    }

    const systemInstruction = SYSTEM_PROMPTS[mode as keyof typeof SYSTEM_PROMPTS] || SYSTEM_PROMPTS.socratic;

    let contextPrefix = '';
    if (questionContext) {
      contextPrefix = `[Question Under Discussion (${questionContext.subject?.toUpperCase()} - ${questionContext.chapterName || ''})]:\n"${questionContext.questionText}"\n\n`;
    }

    let visionInstruction = '';
    if (image) {
      visionInstruction = `[Student has attached an image/photo of a problem or diagram]:
1. First, accurately transcribe the handwritten/printed text, equations, and diagram values into LaTeX.
2. State what topic and chapter this belongs to.
3. Then follow the requested tutoring mode (${mode.toUpperCase()}).\n\n`;
    }

    const fullPrompt = `${systemInstruction}\n\n${visionInstruction}${contextPrefix}${message || 'Please analyze this problem step-by-step.'}`;

    // Build parts array (supporting text + multimodal vision)
    const currentParts: any[] = [];
    if (image) {
      const cleanBase64 = image.includes('base64,') ? image.split('base64,')[1] : image;
      currentParts.push({
        inlineData: {
          mimeType: imageMime || 'image/jpeg',
          data: cleanBase64,
        },
      });
    }
    currentParts.push({ text: fullPrompt });

    const requestPayload = {
      contents: [
        ...history.map((h: { role: string; content: string }) => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }],
        })),
        {
          role: 'user',
          parts: currentParts,
        },
      ],
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 1800,
      },
    };

    // Resilient model cascade: prioritized by free-tier availability & vision reliability
    const candidateModels = [
      'gemini-3.5-flash-lite',
      'gemini-flash-lite-latest',
      'gemini-3.8-flash',
      'gemini-3.5-flash',
      'gemini-flash-latest',
    ];

    let response: Response | null = null;
    let lastErrorText = '';

    for (const model of candidateModels) {
      try {
        let res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestPayload),
          }
        );

        // If 503 (high demand spike), wait 800ms and retry this model once before skipping
        if (res.status === 503) {
          await new Promise((resolve) => setTimeout(resolve, 800));
          res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(requestPayload),
            }
          );
        }

        if (res.ok) {
          response = res;
          break;
        } else {
          lastErrorText = await res.text();
          console.warn(`Model ${model} returned ${res.status}, trying next fallback...`);
        }
      } catch (err: any) {
        lastErrorText = err.message || String(err);
        console.warn(`Model ${model} network error, trying next fallback...`);
      }
    }

    if (!response || !response.ok) {
      console.error('All Gemini API candidate models failed:', lastErrorText);
      return NextResponse.json({
        reply: `### ⚠️ High Demand Traffic Notice
Google Gemini free tier experienced a momentary demand spike while analyzing this ${image ? 'image' : 'question'}.

#### 💡 Guidance in the meantime:
1. **Identify the Core Principle**: What fundamental conservation laws apply here (e.g. Energy, Linear/Angular Momentum, Gauss's Law)?
2. **Setup**: Draw a neat Free Body Diagram or schematic and write down coordinate axes.
3. **Formulas to recall**:
   $$\\vec{F}_{\\text{ext}} = \\frac{d\\vec{P}}{dt}, \\quad W_{\\text{all}} = \\Delta K, \\quad \\Delta U = -W_{\\text{conservative}}$$

*Please tap **Send** again in 5 seconds to retry the full step-by-step breakdown!*`,
        isFallback: true,
      });
    }

    const data = await response.json();
    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'I could not generate a response. Please try rephrasing your doubt.';

    return NextResponse.json({ reply: replyText });
  } catch (error: any) {
    console.error('Error in /api/tutor:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
