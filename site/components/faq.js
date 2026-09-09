'use client';
import { useState } from 'react';
import Reveal from './reveal';

const tight = "var(--font-inter-tight), ui-sans-serif, system-ui, sans-serif";

const faqs = [
  {
    q: "How does the discovery call work?",
    a: "It's a free 30-minute conversation where we learn how your business runs day to day. We map out where time is being lost to repetitive work. There's no obligation and no sales pitch — you leave with a clearer picture either way.",
  },
  {
    q: "Do I need to understand AI or automation?",
    a: "Not at all. That's our job. We translate the technical side into plain outcomes — hours saved, errors avoided, faster responses — and handle every part of the build and setup.",
  },
  {
    q: "What does a typical project cost?",
    a: "It depends on the workflow, systems involved, and expected return. After discovery, you receive a clear fixed proposal covering scope, cost, timing, and support before any work begins. We only recommend a build when there is a credible business case for it.",
  },
  {
    q: "Will this work with the tools we already use?",
    a: "Almost certainly. We build on top of the platforms you already rely on — your CRM, accounting software, inbox, spreadsheets and more — rather than forcing you to switch systems.",
  },
  {
    q: "How long until we see results?",
    a: "Simple automations can be live within a week or two of discovery. Larger projects are delivered in stages so you start seeing value early rather than waiting for one big launch.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <div style={{ borderTop: '1px solid #ececf2' }}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={i} delay={i * 60} translateY={16} duration={600}>
            <div style={{ borderBottom: '1px solid #ececf2', padding: '24px 4px' }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                style={{ width: '100%', border: 0, padding: 0, background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, cursor: 'pointer', textAlign: 'left' }}
              >
                <h3 style={{ fontFamily: tight, fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em', margin: 0, color: '#16161a' }}>
                  {f.q}
                </h3>
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: 22,
                    color: '#9494a0',
                    lineHeight: 1,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                  }}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                style={{
                  maxHeight: isOpen ? 240 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.28s ease, opacity 0.2s',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#6a6a74', margin: '14px 0 0', maxWidth: 660 }}>
                  {f.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
