import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Bot, X, Send, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function FloatingConnector({ onOpenBot }) {
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  return (
    <>
      {/* Floating Vertical Connector Capsule (Matching Reference Image) */}
      <aside
        aria-label="Quick Connect Dock"
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '50%',
          transform: 'translateY(50%)',
          zIndex: 45,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#111827', // Deep dark charcoal capsule matching reference image
          padding: '12px 9px',
          borderRadius: '9999px',
          boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.45), 0 0 1px 1px rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          gap: '12px',
        }}
      >
        {/* Glowing Active Status Dot at Top (Matching Image) */}
        <div
          title="Counselors & AI Online"
          style={{
            position: 'relative',
            width: '10px',
            height: '10px',
            marginBottom: '4px',
            marginTop: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 12px 2px #10b981',
              animation: 'pulseGlow 2s infinite ease-in-out',
            }}
          />
        </div>

        {/* 1. Direct Call Button */}
        <div style={{ position: 'relative' }}>
          <a
            href="tel:9567115221"
            title="Call Tesser Institute (+91 9567115221)"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#1f2937',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#7d0a42';
              e.currentTarget.style.transform = 'scale(1.1)';
              setShowPhoneTooltip(true);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.transform = 'scale(1)';
              setShowPhoneTooltip(false);
            }}
          >
            <Phone size={20} strokeWidth={2} />
          </a>

          {/* Quick Dual-Phone Tooltip */}
          {showPhoneTooltip && (
            <div
              style={{
                position: 'absolute',
                right: '56px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: '#111827',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '8px 14px',
                borderRadius: '10px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                whiteSpace: 'nowrap',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                pointerEvents: 'none',
                zIndex: 50,
              }}
            >
              Call: 9567115221 / 7902434312
            </div>
          )}
        </div>

        {/* 2. WhatsApp Direct Button */}
        <a
          href="https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20am%20interested%20in%20CMA%20admissions%20and%20campus%20facilities."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp (+91 9567115221)"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#1f2937',
            color: '#22c55e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#22c55e';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1f2937';
            e.currentTarget.style.color = '#22c55e';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {/* Authentic WhatsApp SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>

        {/* 3. Instagram Direct Button */}
        <a
          href="https://www.instagram.com/tesser_official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow on Instagram (@tesser_official)"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#1f2937',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e1306c';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1f2937';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <InstagramIcon size={20} color="#ffffff" />
        </a>

        {/* 4. Facebook Direct Button */}
        <a
          href="https://www.facebook.com/search/top?q=Tesser%20Institute"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect on Facebook"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#1f2937',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1877f2';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1f2937';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {/* Authentic Facebook 'f' SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        {/* 5. Tesser AI Counselor Bot Trigger Button */}
        <button
          onClick={onOpenBot}
          title="Chat with TESSA (CMA Admission Bot)"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#7d0a42', // Solid Deep Plum accent for bot
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 14px rgba(125, 10, 66, 0.5)',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.15)';
            e.currentTarget.style.backgroundColor = '#931252';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#7d0a42';
          }}
        >
          <Bot size={22} />
          {/* Subtle "AI" badge */}
          <span
            style={{
              position: 'absolute',
              top: '-3px',
              right: '-3px',
              backgroundColor: '#10b981',
              color: '#ffffff',
              fontSize: '0.55rem',
              fontWeight: 900,
              padding: '1px 4px',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            AI
          </span>
        </button>
      </aside>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
            box-shadow: 0 0 16px 4px #10b981;
          }
        }
        @media (max-width: 640px) {
          aside[aria-label="Quick Connect Dock"] {
            right: 12px;
            bottom: 24px;
            transform: none;
            padding: 8px 6px;
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
}
