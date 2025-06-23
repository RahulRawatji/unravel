import React from 'react'

const Navbar = () => {
  return (
    <nav
      style={{
        width: '100%',
        padding: '12px 32px',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        borderBottom: '1px solid rgba(200,200,200,0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Custom Logo */}
        <div
          style={{
            fontWeight: 700,
            fontSize: '1.5rem',
            color: '#222',
            letterSpacing: '2px',
            marginRight: 12,
            fontFamily: 'monospace',
            background: 'linear-gradient(90deg, #4f8cff 30%, #a259ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          unravel
        </div>
        <span style={{ color: '#444', fontSize: '1rem', opacity: 0.8 }}>
          Effortless Room Management
        </span>
      </div>
    </nav>
  )
}

export default Navbar