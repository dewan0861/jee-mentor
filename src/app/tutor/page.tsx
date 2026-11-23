'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChatMessage, TutorMode, Subject, Conversation } from '@/types';
import { MathRenderer } from '@/components/MathRenderer';
import { StorageService } from '@/lib/storage';
import { 
  Sparkles, 
  Send, 
  BookOpen, 
  HelpCircle, 
  Lightbulb, 
  CheckCircle, 
  Zap, 
  Loader2,
  AlertCircle,
  Camera,
  Image as ImageIcon,
  X,
  Plus,
  MessageSquare,
  Trash2,
  Bookmark,
  Volume2,
  TreeDeciduous,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';

const TUTOR_MODES: { id: TutorMode; label: string; icon: any; desc: string }[] = [
  { id: 'socratic', label: 'Socratic Mentor', icon: Lightbulb, desc: 'Guided hints without giving away answers' },
  { id: 'doubt', label: 'Step-by-Step Doubt', icon: CheckCircle, desc: 'Full mathematical proof & solution' },
  { id: 'concept', label: 'Concept Deep-Dive', icon: BookOpen, desc: 'Core intuition, formulas & pitfalls' },
  { id: 'formula', label: 'Formula Recall', icon: Zap, desc: 'High-yield revision card & mnemonics' },
  { id: 'hint_tree', label: '3-Step Hint Tree', icon: TreeDeciduous, desc: 'Progressive hint stages (1, 2, 3)' },
  { id: 'quiz', label: 'Interactive Quiz', icon: Target, desc: 'AI poses challenging problems' },
];

function TutorContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q');
  const initialSub = searchParams.get('sub') as Subject | null;

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConvId, setActiveConvId] = useState<string>('conv_default');
  const [mode, setMode] = useState<TutorMode>('socratic');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageMime, setSelectedImageMime] = useState<string>('image/jpeg');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize conversations
  useEffect(() => {
    const list = StorageService.getConversations();
    if (list.length > 0) {
      setConversations(list);
      setActiveConvId(list[0].id);
    } else {
      const defaultConv: Conversation = {
        id: `conv_${Date.now()}`,
        title: 'Welcome & JEE Orientation',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        messages: [
          {
            id: 'welcome',
            role: 'assistant',
            content: `### 🎓 Welcome to your JEE AI Mentor!
I am your personalized IITian mentor for **Physics, Chemistry, and Mathematics**.

**How can I assist you today?**
- In **Socratic Mode**, I'll guide you step-by-step with hints rather than just giving away the answer.
- In **Doubt Mode**, I'll solve tricky problems line-by-line with complete mathematical justifications.
- In **3-Step Hint Tree Mode**, I'll break down the solution into progressive clues.
- In **Interactive Quiz Mode**, I'll challenge your concepts with authentic JEE-level problems!
- **Multimodal Photo Doubts**: Tap the camera or image icon below to snap photos of textbook diagrams or handwritten equations!

*Select a mode or type your doubt below!*`,
            timestamp: Date.now(),
            mode: 'socratic',
          },
        ],
      };
      StorageService.saveConversation(defaultConv);
      setConversations([defaultConv]);
      setActiveConvId(defaultConv.id);
    }
  }, []);

  const currentConversation = conversations.find((c) => c.id === activeConvId) || conversations[0];
  const messages = currentConversation?.messages || [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Handle incoming query param from Question Card
  useEffect(() => {
    if (initialQ) {
      setInput(`I am stuck on this question: "${initialQ}". Could you give me a Socratic hint to start?`);
    }
  }, [initialQ]);

  // Client-side image compressor: downscales large smartphone photos to max 1280px (<250KB)
  const compressImage = (file: File): Promise<{ base64: string; mime: string }> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 1280;
          let width = img.width;
          let height = img.height;
          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressed = canvas.toDataURL('image/jpeg', 0.82);
            resolve({ base64: compressed, mime: 'image/jpeg' });
            return;
          }
          resolve({ base64: e.target?.result as string, mime: file.type || 'image/jpeg' });
        };
        img.onerror = () => {
          resolve({ base64: e.target?.result as string, mime: file.type || 'image/jpeg' });
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  // Image upload handler with auto-compression
  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const { base64, mime } = await compressImage(file);
      setSelectedImage(base64);
      setSelectedImageMime(mime);
    } catch (err) {
      console.error('Failed to compress image:', err);
    }
  };

  const handleStartNewConversation = () => {
    const newConv: Conversation = {
      id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      title: 'New Doubt Session',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      messages: [
        {
          id: `welcome_${Date.now()}`,
          role: 'assistant',
          content: `### 🚀 New Doubt Session Started
What concept, formula, or problem are we working on? You can type your doubt or upload a photo of a textbook problem!`,
          timestamp: Date.now(),
          mode,
        },
      ],
    };

    StorageService.saveConversation(newConv);
    const updated = [newConv, ...conversations];
    setConversations(updated);
    setActiveConvId(newConv.id);
    setSidebarOpen(false);
  };

  const handleDeleteConversation = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = StorageService.deleteConversation(id);
    setConversations(updated);
    if (activeConvId === id) {
      setActiveConvId(updated[0]?.id || '');
    }
  };

  const handleSpeak = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[$#*_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleBookmarkExplanation = (content: string) => {
    StorageService.toggleBookmark({
      itemId: `ai_exp_${Date.now()}`,
      itemType: 'concept',
      subject: initialSub || 'physics',
      title: content.slice(0, 60) + '...',
      data: { questionText: content },
    });
    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.8 },
    });
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if ((!text.trim() && !selectedImage) || loading || !currentConversation) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: text || 'Please inspect this attached problem/diagram.',
      imageUrl: selectedImage || undefined,
      timestamp: Date.now(),
      mode,
    };

    const updatedMessages = [...messages, userMsg];

    // Auto-update conversation title from first user query
    let newTitle = currentConversation.title;
    if (newTitle === 'New Doubt Session' && text.trim()) {
      newTitle = text.trim().slice(0, 35) + (text.length > 35 ? '...' : '');
    }

    const updatedConv: Conversation = {
      ...currentConversation,
      title: newTitle,
      updatedAt: Date.now(),
      messages: updatedMessages,
    };

    StorageService.saveConversation(updatedConv);
    setConversations((prev) => prev.map((c) => (c.id === updatedConv.id ? updatedConv : c)));

    const imageToSend = selectedImage;
    const mimeToSend = selectedImageMime;

    setInput('');
    setSelectedImage(null);
    setLoading(true);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          mode,
          image: imageToSend,
          imageMime: mimeToSend,
          questionContext: initialQ
            ? {
                questionText: initialQ,
                subject: initialSub || 'physics',
                chapterName: 'Active Topic',
              }
            : undefined,
          history: updatedMessages.slice(-5),
        }),
      });

      const data = await res.json();

      const replyContent =
        data.reply ||
        (data.error
          ? `⚠️ **Mentor Notice**: ${data.error}\n\n*Please wait a few seconds and try sending again!*`
          : `⚠️ Sorry, I could not process your request at this moment. Please try again!`);

      const assistantMsg: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        content: replyContent,
        timestamp: Date.now(),
        mode,
      };

      const finalMessages = [...updatedMessages, assistantMsg];
      const finalConv: Conversation = {
        ...updatedConv,
        messages: finalMessages,
        updatedAt: Date.now(),
      };

      StorageService.saveConversation(finalConv);
      setConversations((prev) => prev.map((c) => (c.id === finalConv.id ? finalConv : c)));

      if (data.reply) {
        // Award +5 XP for interacting with AI tutor
        StorageService.addXP(5);
      }
    } catch (err) {
      console.error('Failed to get AI tutor reply', err);
      const networkErrMsg: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        content: `⚠️ **Connection Error**: Unable to reach the AI Mentor service. Please check your internet connection or reload the page and try again.`,
        timestamp: Date.now(),
        mode,
      };
      const finalMessages = [...updatedMessages, networkErrMsg];
      const finalConv: Conversation = {
        ...updatedConv,
        messages: finalMessages,
        updatedAt: Date.now(),
      };
      StorageService.saveConversation(finalConv);
      setConversations((prev) => prev.map((c) => (c.id === finalConv.id ? finalConv : c)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col h-[calc(100vh-4rem)]">
      {/* Top Banner / Mode Switcher */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          {/* Conversation history toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
            title="Chat History & Sessions"
          >
            <MessageSquare className="h-4 w-4 text-indigo-600" />
            <span className="hidden sm:inline">Sessions ({conversations.length})</span>
          </button>

          <button
            onClick={handleStartNewConversation}
            className="flex items-center gap-1 rounded-xl bg-indigo-50 px-2.5 py-1.5 text-xs font-bold text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300"
            title="Start new conversation"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>New Chat</span>
          </button>
        </div>

        {/* Mode Pills */}
        <div className="flex flex-wrap items-center gap-1 overflow-x-auto py-1">
          {TUTOR_MODES.map((m) => {
            const Icon = m.icon;
            const isCurrent = mode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
                  isCurrent
                    ? 'bg-indigo-600 text-white shadow-xs scale-102'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400'
                }`}
                title={m.desc}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 gap-4 overflow-hidden relative">
        {/* Sidebar / Conversation Drawer */}
        {sidebarOpen && (
          <div className="absolute inset-y-0 left-0 z-30 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-900 flex flex-col animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Saved Sessions
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-1.5 py-2">
              {conversations.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    setActiveConvId(c.id);
                    setSidebarOpen(false);
                  }}
                  className={`group flex items-center justify-between rounded-xl p-2.5 text-xs font-semibold cursor-pointer transition-colors ${
                    activeConvId === c.id
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'
                      : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="truncate pr-2">
                    <div className="truncate">{c.title}</div>
                    <div className="text-[10px] text-slate-400 font-normal">
                      {new Date(c.updatedAt).toLocaleDateString()} • {c.messages.length} messages
                    </div>
                  </div>
                  {conversations.length > 1 && (
                    <button
                      onClick={(e) => handleDeleteConversation(c.id, e)}
                      className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-rose-500 transition-opacity"
                      title="Delete chat"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chat Messages Container */}
        <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 overflow-y-auto shadow-2xs dark:border-slate-800 dark:bg-slate-900/60 flex flex-col space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[92%] sm:max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed shadow-xs ${
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-2xs'
                    : 'bg-slate-50 text-slate-900 border border-slate-200/80 rounded-bl-2xs dark:bg-slate-800/90 dark:text-slate-100 dark:border-slate-700'
                }`}
              >
                {/* Image if attached */}
                {msg.imageUrl && (
                  <div className="mb-2 max-w-xs rounded-xl overflow-hidden border border-white/20">
                    <img src={msg.imageUrl} alt="Attached problem" className="max-h-48 w-auto object-contain" />
                  </div>
                )}

                {msg.role === 'assistant' ? (
                  <MathRenderer content={msg.content} />
                ) : (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>

              {/* Action buttons for assistant messages */}
              {msg.role === 'assistant' && msg.id !== 'welcome' && (
                <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400 pl-2">
                  <button
                    onClick={() => handleSpeak(msg.content)}
                    className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
                    title="Speak explanation aloud"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    <span>Listen</span>
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => handleBookmarkExplanation(msg.content)}
                    className="flex items-center gap-1 hover:text-amber-500 transition-colors"
                    title="Bookmark this explanation"
                  >
                    <Bookmark className="h-3.5 w-3.5" />
                    <span>Save Note</span>
                  </button>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 rounded-2xl bg-slate-50 p-4 text-xs font-semibold text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 w-fit">
              <Loader2 className="h-4 w-4 animate-spin text-indigo-600" />
              <span>Analyzing with Gemini JEE reasoning...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Tray & Multimodal Attachments */}
      <div className="mt-3">
        {/* Image Preview Thumbnail if selected */}
        {selectedImage && (
          <div className="mb-2 flex items-center gap-2 rounded-xl bg-indigo-50 p-2 border border-indigo-200 dark:bg-indigo-950/40 dark:border-indigo-800 w-fit">
            <img src={selectedImage} alt="Problem preview" className="h-12 w-12 rounded-lg object-cover" />
            <div className="text-xs text-indigo-900 dark:text-indigo-200">
              <span className="font-bold block">Photo Attached</span>
              <span className="text-[10px] text-indigo-500">Ready for Gemini Vision reasoning</span>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="p-1 text-slate-400 hover:text-rose-500 rounded-full"
              title="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Input Bar */}
        <div className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {/* Hidden file inputs */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageSelect}
            className="hidden"
          />

          {/* Photo gallery button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800"
            title="Upload problem image or screenshot"
          >
            <ImageIcon className="h-5 w-5" />
          </button>

          {/* Camera button */}
          <button
            type="button"
            onClick={() => cameraInputRef.current?.click()}
            className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800"
            title="Take photo of handwritten problem"
          >
            <Camera className="h-5 w-5" />
          </button>

          {/* Text Input */}
          <input
            type="text"
            placeholder={
              selectedImage
                ? "Add specific questions about this image (or press Send)..."
                : "Ask any JEE concept, doubt, formula, or problem..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="flex-1 bg-transparent px-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white"
          />

          {/* Send Button */}
          <button
            type="button"
            onClick={() => handleSendMessage()}
            disabled={(!input.trim() && !selectedImage) || loading}
            className="rounded-xl bg-indigo-600 p-2.5 text-white shadow-xs hover:bg-indigo-500 disabled:opacity-40 transition-all"
            title="Send doubt to AI mentor"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TutorPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-xs text-slate-400">Loading AI Tutor...</div>}>
      <TutorContent />
    </Suspense>
  );
}
