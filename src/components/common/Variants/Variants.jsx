import React from 'react'

const Variants = ({ varientData, roomData }) => {
  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        margin: '8px 0',
        padding: '16px',
        background: '#fafbfc',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minWidth: 180,
      }}
    >
      <span style={{ fontSize: '1rem', color: '#222', marginBottom: 8, fontWeight: 500 }}>
        {varientData?.name}
      </span>
      <button
        style={{
          background: '#222',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '6px 16px',
          fontSize: '0.95rem',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseOver={e => (e.target.style.background = '#444')}
        onMouseOut={e => (e.target.style.background = '#222')}
      >
        Select
      </button>
    </div>
  )
}

export default Variants