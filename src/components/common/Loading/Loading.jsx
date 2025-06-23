import React, { useState, useEffect } from 'react';
import './loading.css';

const Loading = () => {
  const [classDelay, setClassDelay] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress === 100) {
      // Start animation after a short delay for smoothness
      const timeout = setTimeout(() => setClassDelay(true), 200);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 12);
      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <div className={`flex min-h-screen relative`} style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10,
        background: 'rgba(255,255,255,0.95)'
      }}>
        <div className={`flex items-center text-5xl font-sans${classDelay ? ' slide-out-top' : ''}`} style={{ fontWeight: 700, letterSpacing: 2 }}>
          Un
          <span className={`font-mono italic pl-2${classDelay ? ' slide-out-top' : ''}`}>Ravel</span>
        </div>
        <div style={{ marginTop: 24, fontSize: 22, fontFamily: 'monospace', color: '#4f8cff' }}>
          Loading... {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loading;
