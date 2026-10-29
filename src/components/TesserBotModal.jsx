import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, MessageCircle, Phone, ArrowUpRight, CheckCheck } from 'lucide-react';
import { sound } from '../utils/sound';

export default function TesserBotModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "👋 Welcome to Tesser Institute! I am TESSA, your AI Admission Advisor. Ask me anything about CMA Foundation, Intermediate, Final, our daily test discipline, or our residential hostels in Attingal.",
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    'Eligibility for CMA Foundation & Inter?',
    'Hostel facilities for Boys & Girls?',
    'How does the Daily 45-Min Test work?',
    'Batch timings & small batch ratio?',
    'Connect directly with an Admission Counselor',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateResponse = (userQuery) => {
    const q = userQuery.toLowerCase();

    if (q.includes('eligibility') || q.includes('foundation') || q.includes('plus two') || q.includes('+2')) {
      return {
        text: "🎓 **CMA Eligibility Pathways:**\n• **CMA Foundation**: Passed 10+2 / Higher Secondary in any stream (Commerce, Science, or Arts). Non-maths bridge courses provided.\n• **CMA Intermediate (Direct Entry)**: Graduates (B.Com, BBA, B.Sc, etc.) or candidates who cleared CMA Foundation can enter Inter directly with zero Foundation requirement!",
        hasAction: true,
      };
    } else if (q.includes('hostel') || q.includes('stay') || q.includes('room') || q.includes('accommodation') || q.includes('boys') || q.includes('girls')) {
      return {
        text: "🏠 **Attingal Campus Residential Hostels:**\n• Separate, dedicated hostel facilities for both **Boys and Girls**.\n• Equipped with 24/7 resident wardens, high-speed Wi-Fi, personal study desks, and hygienic dining.\n• Eliminates 2-3 hours of daily travel stress so students can focus purely on ICMAI preparations.",
        hasAction: true,
      };
    } else if (q.includes('daily test') || q.includes('test') || q.includes('discipline') || q.includes('exam')) {
      return {
        text: "✍️ **The Signature Daily Testing Engine:**\nEvery day at 2:00 PM, students sit in exam hall silence for a strict 45-minute timed model test on ICMAI patterns. Answer sheets are evaluated same-day, and faculty conduct 1-on-1 diagnostics to fix individual calculation errors within 24 hours.",
        hasAction: true,
      };
    } else if (q.includes('batch') || q.includes('ratio') || q.includes('timing') || q.includes('class')) {
      return {
        text: "🏢 **Small Batches & Timings:**\n• Batches are strictly capped at **25 students** to ensure direct eye contact with professors and zero hesitation during doubt clearing.\n• Full-day immersion and morning regular schedules run Monday through Saturday from 08:30 AM to 06:00 PM.",
        hasAction: true,
      };
    } else if (q.includes('counselor') || q.includes('whatsapp') || q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('admission')) {
      return {
        text: "📞 **Direct Admission Hotlines:**\n• **+91 95671 15221**\n• **+91 79024 34312**\nOur admissions office in Attingal is currently accepting applications for the 2025-2026 academic batch. Click below to chat on WhatsApp instantly!",
        hasAction: true,
        directWhatsapp: true,
      };
    } else {
      return {
        text: `Thank you for asking! At Tesser Institute, we provide exclusive, focused coaching for CMA (Cost and Management Accounting) in Attingal, TVM with expert faculty, small batches (max 25), daily tests, and dedicated hostel facilities. \n\nWould you like me to connect you directly with our Admissions Director for a personalized counseling session?`,
        hasAction: true,
      };
    }
  };

  const handleSend = (textToSend = input) => {
    if (!textToSend.trim()) return;

    sound.playClick();
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      sound.playChime(659.25, 0.3);
      const botReply = generateResponse(textToSend);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply.text,
        time: 'Just now',
        hasAction: botReply.hasAction,
        directWhatsapp: botReply.directWhatsapp,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '84px',
          zIndex: 50,
          width: '380px',
          maxWidth: 'calc(100vw - 32px)',
          height: '560px',
          maxHeight: 'calc(100vh - 48px)',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1.5px solid rgba(125, 10, 66, 0.22)',
          boxShadow: '0 25px 60px -10px rgba(125, 10, 66, 0.25), 0 10px 25px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #7d0a42 0%, #931252 100%)',
            color: '#ffffff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Bot size={22} color="#ffffff" />
              <span
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  border: '2px solid #7d0a42',
                }}
              />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span>TESSA</span>
                <span style={{ fontSize: '0.62rem', background: 'rgba(255,255,255,0.25)', padding: '2px 6px', borderRadius: 9999, fontWeight: 700 }}>AI ADVISOR</span>
              </div>
              <div style={{ fontSize: '0.74rem', opacity: 0.9, fontFamily: 'var(--font-mono)' }}>
                Tesser Institute • Attingal, TVM
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              padding: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat Messages Scroll Body */}
        <div
          style={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '18px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            backgroundColor: '#faf8f9',
          }}
        >
          {messages.map((m) => (
            <div
              key={m.id}
              style={{
                alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: m.sender === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                  backgroundColor: m.sender === 'user' ? '#7d0a42' : '#ffffff',
                  color: m.sender === 'user' ? '#ffffff' : '#0f172a',
                  border: m.sender === 'user' ? 'none' : '1px solid rgba(125, 10, 66, 0.15)',
                  fontSize: '0.88rem',
                  lineHeight: '1.5',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  whiteSpace: 'pre-line',
                }}
              >
                {m.text}

                {/* Direct Action inside Bot Message */}
                {m.hasAction && (
                  <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
                    <a
                      href="https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20was%20chatting%20with%20your%20AI%20Advisor%20TESSA%20and%20want%20to%20discuss%20admissions."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#fdf2f7',
                        color: '#7d0a42',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        border: '1px solid rgba(125, 10, 66, 0.2)',
                      }}
                    >
                      <MessageCircle size={14} style={{ color: '#22c55e' }} />
                      <span>Chat with Human Mentor on WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>

              <div
                style={{
                  fontSize: '0.68rem',
                  color: '#94a3b8',
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  paddingLeft: '4px',
                  paddingRight: '4px',
                }}
              >
                {m.time}
              </div>
            </div>
          ))}

          {isTyping && (
            <div
              style={{
                alignSelf: 'flex-start',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(125, 10, 66, 0.15)',
                borderRadius: '18px 18px 18px 2px',
                padding: '10px 16px',
                fontSize: '0.82rem',
                color: '#7d0a42',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>TESSA is typing</span>
              <span className="dot-1">.</span>
              <span className="dot-2">.</span>
              <span className="dot-3">.</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div
          style={{
            padding: '8px 12px',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSend(prompt)}
              style={{
                fontSize: '0.75rem',
                background: '#fdf2f7',
                border: '1px solid rgba(125, 10, 66, 0.15)',
                color: '#7d0a42',
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: '9999px',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#7d0a42';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fdf2f7';
                e.currentTarget.style.color = '#7d0a42';
              }}
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          style={{
            padding: '12px 16px',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            placeholder="Type your question about CMA..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flexGrow: 1,
              padding: '10px 14px',
              borderRadius: '12px',
              border: '1.5px solid #e2e8f0',
              fontSize: '0.88rem',
              outline: 'none',
              fontFamily: 'var(--font-body)',
              color: '#0f172a',
            }}
          />
          <button
            type="submit"
            style={{
              background: '#7d0a42',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              padding: '10px 14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(125, 10, 66, 0.3)',
            }}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </AnimatePresence>
  );
}
