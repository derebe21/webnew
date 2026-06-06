'use client';

import { useEffect } from 'react';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body style={{ margin: 0, backgroundColor: '#020617', fontFamily: 'Inter, sans-serif' }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '2rem',
            padding: '2rem',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          {/* Icon */}
          <div style={{
            width: '80px', height: '80px', borderRadius: '20px',
            background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <AlertOctagon style={{ width: 40, height: 40, color: '#f87171' }} />
          </div>

          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
              Critical System Error
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 480 }}>
              A critical error occurred in the application. Please refresh the page or return to the home page.
            </p>
            {error?.digest && (
              <p style={{
                fontFamily: 'monospace', fontSize: '0.75rem', color: '#475569',
                background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(30,41,59,1)',
                borderRadius: '8px', padding: '0.5rem 1rem', marginTop: '1rem',
                display: 'inline-block',
              }}>
                Error: {error.digest}
              </p>
            )}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={reset}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 1.75rem', borderRadius: '12px',
                background: 'linear-gradient(135deg,#2563EB,#0284C7)',
                color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(37,99,235,.4)',
              }}
            >
              Reload Page
            </button>
            <a
              href="/"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 1.75rem', borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)', color: '#fff',
                fontWeight: 700, fontSize: '0.875rem',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
              }}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
