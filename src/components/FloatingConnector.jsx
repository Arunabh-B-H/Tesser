import React, { useState } from 'react';
import InstagramIcon from './InstagramIcon';
import { Phone } from 'lucide-react';

export default function FloatingConnector() {
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  return (
    <>
      {/* Floating Vertical Connector Capsule Positioned on the LEFT */}
      <aside
        aria-label="Quick Connect Dock"
        style={{
          position: 'fixed',
          left: '24px',
          bottom: '50%',
          transform: 'translateY(50%)',
          zIndex: 45,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#111827', // Dark charcoal capsule matching reference design
          padding: '14px 9px',
          borderRadius: '9999px',
          boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.45), 0 0 1px 1px rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          gap: '12px',
        }}
      >
        {/* Glowing Active Status Beacon at Top — Matching Logo & Theme (Deep Plum / Magenta) */}
        <div
          title="Tesser Admissions Live & Online"
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
              backgroundColor: '#c41e73', // Vibrant Theme Plum / Magenta
              boxShadow: '0 0 14px 3px #e62886',
              animation: 'pulsePlumGlow 2s infinite ease-in-out',
            }}
          />
        </div>

        {/* 1. Direct Call Button */}
        <div style={{ position: 'relative' }}>
          <a
            href="tel:9567115221"
            title="Call Tesser Institute (+91 9567115221)"
            className="floating-dock-btn"
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
                left: '56px',
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

        {/* 2. Official WhatsApp Brand Logo Button */}
        <a
          href="https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20am%20interested%20in%20CMA%20admissions%20and%20campus%20facilities."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp (+91 9567115221)"
          className="floating-dock-btn"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#1f2937',
            color: '#25D366', // Official WhatsApp Brand Color
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#25D366';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1f2937';
            e.currentTarget.style.color = '#25D366';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {/* Authentic Official WhatsApp Logo (Speech bubble with phone handset inside) */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.57 3.82 1.56 5.39L2.05 22l4.75-1.51a9.98 9.98 0 0 0 5.231 1.48c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.23c-1.63 0-3.17-.46-4.51-1.27l-.32-.2-3.35 1.07 1.08-3.26-.21-.34a8.21 8.21 0 0 1-1.28-4.4c0-4.55 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24zm4.81-6.19c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.58-1.4-.8-1.92-.21-.51-.43-.44-.59-.45l-.5-.01c-.17 0-.46.06-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.17 1.85 2.83 4.49 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.25-.17-.51-.3z" />
          </svg>
        </a>

        {/* 3. Instagram Direct Button */}
        <a
          href="https://www.instagram.com/tesser_official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow on Instagram (@tesser_official)"
          className="floating-dock-btn"
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
          className="floating-dock-btn"
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
          {/* Facebook 'f' SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </aside>

      <style>{`
        @keyframes pulsePlumGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
            box-shadow: 0 0 18px 5px #e62886;
          }
        }
        @media (max-width: 640px) {
          aside[aria-label="Quick Connect Dock"] {
            left: 12px !important;
            bottom: 18px !important;
            transform: none !important;
            padding: 7px 5px !important;
            gap: 7px !important;
          }
          .floating-dock-btn {
            width: 36px !important;
            height: 36px !important;
          }
          .floating-dock-btn svg {
            width: 17px !important;
            height: 17px !important;
          }
        }
      `}</style>
    </>
  );
}
