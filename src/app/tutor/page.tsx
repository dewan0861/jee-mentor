'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChatMessage, TutorMode, Subject } from '@/types';
import { MathRenderer } from '@/components/MathRenderer';
import { 
  Sparkles, 
  Send, 
  BookOpen, 
  HelpCircle, 
  Lightbulb, 
  CheckCircle, 
  Zap, 
  Loader2,
  AlertCircle
} from 'lucide-react';

function TutorContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q');
  const initialSub = searchParams.get('sub') as Subject | null;

  const [mode, setMode] = useState<TutorMode>('socratic');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `### 🎓 Welcome to your JEE AI Mentor!
I am your personalized IITian mentor for **Physics, Chemistry, and Mathematics**.

**How can I assist you today?**
- In **Socratic Mode**, I'll guide you step by step with hints rather than just giving away the answer.
- In **Concept Mode**, I'll break down the intuition, formulas, and common JEE traps.
- In **Doubt Mode**, I'll solve tricky problems line by line with full reasoning.

*Select a mode or ask any question or formula below!*`,
      timestamp: Date.now(),
      mode: 'socratic',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Handle incoming query param from Question Card
  useEffect(() => {
    if (initialQ) {
      setInput(`I am stuck on this question: "${initialQ}". Could you give me a Socratic hint to start?`);
    }
  }, [initialQ]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now(),
      mode,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          mode,
          questionContext: initialQ
            ? {
                questionText: initialQ,
                subject: initialSub || 'physics',
                chapterName: 'Active Topic',
              }
            : undefined,
          history: messages.slice(-4), // Keep context light for token budgeting
        }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant_${Date.now()}`,
            role: 'assistant',
            content: data.reply,
            timestamp: Date.now(),
            mode,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `error_${Date.now()}`,
            role: 'assistant',
            content: 'Sorry, I encountered an issue. Please try again.',
            timestamp: Date.now(),
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `error_${Date.now()}`,
          role: 'assistant',
          content: 'Network error connecting to AI tutor. Please check your connection.',
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const modeOptions: { id: TutorMode; label: string; icon: any; desc: string }[] = [
    {
      id: 'socratic',
      label: 'Socratic Hints',
      icon: Lightbulb,
      desc: 'Prompts & hints without revealing final answers directly',
    },
    {
      id: 'concept',
      label: 'Concept Intuition',
      icon: BookOpen,
      desc: 'Physical analogies, equations & common JEE pitfalls',
    },
    {
      id: 'doubt',
      label: 'Step-by-Step Solver',
      icon: CheckCircle,
      desc: 'Complete numerical derivation and justification',
    },
    {
      id: 'formula',
      label: 'Formula Sheet',
      icon: Zap,
      desc: 'Conditions of applicability & quick recall hooks',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
            <Sparkles className="h-4 w-4" />
            <span>AI Socratic Mentor</span>
          </div>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
            Personal JEE Concept & Doubt Solver
          </h1>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex rounded-xl bg-slate-200/80 p-1">
          {modeOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = mode === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setMode(opt.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title={opt.desc}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Prompts Starters */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="text-[11px] font-bold text-slate-400 self-center">Try asking:</span>
        {[
          'Center of mass of a semicircular disc',
          'Why is cyclopropenyl cation aromatic?',
          'Hint for integration using King property',
          'When does Raoult law show positive deviation?',
        ].map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(prompt)}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Messages Container */}
      <div className="flex min-h-[500px] flex-col rounded-2xl border border-slate-200 bg-white shadow-xs">
        <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6 max-h-[600px]">
          {messages.map((msg) => {
            const isAssistant = msg.role === 'assistant';
            return (
              <div
                key={msg.id}
                className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-2xl rounded-2xl p-4 sm:p-5 ${
                    isAssistant
                      ? 'border border-slate-100 bg-slate-50/80 text-slate-800'
                      : 'bg-indigo-600 text-white shadow-xs'
                  }`}
                >
                  {isAssistant && (
                    <div className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200/60 pb-1">
                      <Sparkles className="h-3 w-3" />
                      <span>JEE Mentor • {msg.mode || 'Socratic'} Mode</span>
                    </div>
                  )}
                  <div className={`text-sm ${isAssistant ? '' : 'text-white'}`}>
                    <MathRenderer content={msg.content} />
                  </div>
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 text-xs font-semibold text-indigo-800">
                <Loader2 className="h-4 w-4 animate-spin text-indigo-600" />
                <span>Thinking through JEE concepts & formulating Socratic hints...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="border-t border-slate-100 p-4 bg-slate-50/50 rounded-b-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask in ${mode} mode (e.g. "Explain rolling with slipping" or paste question)...`}
              className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 disabled:opacity-40 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function TutorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[400px] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        </div>
      }
    >
      <TutorContent />
    </Suspense>
  );
}
