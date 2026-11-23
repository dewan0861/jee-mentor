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
};

export async function POST(req: NextRequest) {
  try {
    const { message, mode = 'socratic', questionContext, history = [] } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    // Graceful fallback if user hasn't added their free API key yet
    if (!apiKey) {
      return NextResponse.json({
        reply: `### 🎓 JEE Mentor Hint (Offline Mode)
To activate live AI reasoning for any JEE question, please paste your free Google AI Studio API key in \`.env.local\` as:
\`GEMINI_API_KEY=your_key_here\`

---
#### Socratic Guidance:
1. **Identify the Core Concept**: What are the conserved quantities in this setup (e.g., energy, momentum, charge)?
2. **Formula Check**:
   $$\\vec{F} = \\frac{d\\vec{p}}{dt}, \\quad E = -\\vec{\\nabla}V, \\quad \\int_a^b f(x)dx = \\int_a^b f(a+b-x)dx$$
3. **Common Trap**: Check if standard approximations hold (e.g., small angles, negligible friction, ideal gas behavior).

*Try writing out the first line of the governing equation!*`,
        isOfflineMode: true,
      });
    }

    const systemInstruction = SYSTEM_PROMPTS[mode as keyof typeof SYSTEM_PROMPTS] || SYSTEM_PROMPTS.socratic;

    let contextPrefix = '';
    if (questionContext) {
      contextPrefix = `[Question Under Discussion (${questionContext.subject?.toUpperCase()} - ${questionContext.chapterName || ''})]:\n"${questionContext.questionText}"\n\nStudent Query: `;
    }

    const fullPrompt = `${systemInstruction}\n\n${contextPrefix}${message}`;

    const requestPayload = {
      contents: [
        ...history.map((h: { role: string; content: string }) => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }],
        })),
        {
          role: 'user',
          parts: [{ text: fullPrompt }],
        },
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 1200,
      },
    };

    // Primary attempt: gemini-2.5-flash
    let response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestPayload),
      }
    );

    // Fallback attempt: gemini-1.5-flash if primary fails
    if (!response.ok) {
      console.warn('Gemini 2.5 Flash failed, falling back to Gemini 1.5 Flash...');
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestPayload),
        }
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error (Both models):', errorText);
      return NextResponse.json(
        { 
          error: 'AI service temporarily unavailable. Please verify that your GEMINI_API_KEY is active in Google AI Studio.',
          details: errorText
        },
        { status: 500 }
      );
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
