import React from 'react'

const Variants = ({ varientData, roomData }) => {

  const formatPrice = (val) => val ? val.toLocaleString('en-MY') : '';
  const oldPrice = varientData?.total_price?.total_price_rounded;
  const newPrice = varientData?.total_price?.discounted_price_rounded;
  const currency = varientData?.total_price?.currency || 'RM';
  const discount = varientData?.promo?.discount || 28; 

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        margin: '18px 0',
        padding: '20px 18px',
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minWidth: 220,
        fontFamily: 'inherit',
      }}
    >
      {/* Icons and features */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
        <span role="img" aria-label="meals" style={{fontSize: 20}}>☕</span>
        <span style={{ fontSize: '1.05rem', color: '#222', fontWeight: 500 }}>{varientData?.name}</span>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
        <span role="img" aria-label="bed" style={{fontSize: 20}}>🛏️</span>
        <span style={{ fontSize: '1.05rem', color: '#222', fontWeight: 500 }}>{varientData?.display_properties?.[1]?.value}</span>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
        <span role="img" aria-label="adults" style={{fontSize: 20}}>👤</span>
        <span style={{ fontSize: '1.05rem', color: '#222', fontWeight: 500 }}>{varientData?.display_properties?.[2]?.value}</span>
      </div>
      <div style={{ fontSize: 13, color: '#888', margin: '8px 0 0 0' }}>Price for 1 night</div>
      <div style={{ fontSize: 13, color: '#b0b0b0', marginBottom: 8 }}>Includes taxes & fees</div>
      {/* Price and discount */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span style={{ textDecoration: 'line-through', color: '#b0b0b0', fontSize: 12, marginRight: 1 }}>
          {currency}{formatPrice(oldPrice)}
        </span>
        <span style={{ fontWeight: 700, fontSize: 14, color: '#222', marginRight: 2}}>
          {currency}{formatPrice(newPrice)}
        </span>
        <span style={{ background: '#2346a0', color: '#fff', borderRadius: 18, fontWeight: 600, fontSize: 12, padding: '3px 14px', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span role="img" aria-label="discount" style={{fontSize: 17}}>🎫</span> {discount}% off
        </span>
      </div>
      <div style={{ color: '#2e8b57', fontWeight: 600, fontSize: 14, margin: '8px 0 4px 0', cursor: 'pointer' }}>
        Cancellation policy <span style={{fontSize: 14, verticalAlign: 'middle'}}>&#8250;</span>
      </div>
      <div style={{ color: '#444', fontSize: 12, margin: '8px 0 0 0' }}>
        Select rooms to add special request
      </div>
      <button
        style={{
          background: '#222',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 20px',
          fontSize: '1rem',
          fontWeight: 600,
          marginTop: 18,
          cursor: 'pointer',
          alignSelf: 'stretch',
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