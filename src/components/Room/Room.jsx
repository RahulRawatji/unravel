import React, {useState} from 'react';
import Variants from '../common/Variants/Variants';
import { useInView } from './useInView';

const mediaStyle = {
  minWidth: 270,
  width: 270,
  minHeight: 170,
  height: 170,
  objectFit: 'cover',
  borderRadius: 12,
  background: '#f3f3f3',
  flexShrink: 0,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
};

const Room = ({roomData ,className}) => {
  const [showMore, setShowMore] = useState(false);
  const [mediaRef, inView] = useInView({ threshold: 0.2 });
  console.log('Room component rendered with data:', roomData);
  return (
    <div
      style={{
        border: 'none',
        margin: 0,
        padding: 0,
        background: 'rgba(255,255,255,0.18)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        maxWidth: 300,
      }}
      className={className}
    >
      <div ref={mediaRef} style={{width: '100%', minHeight: 170, height: 170, display: 'flex', gap: 6, overflowX: 'auto', background: '#f8fafd', borderRadius: 12}}>
        {inView && Array.isArray(roomData.properties?.room_images) && roomData.properties.room_images.length > 0 &&
          roomData.properties.room_images[0].image_urls.map((imgObj, idx) => {
            const imgUrl = imgObj || imgObj?.image_urls?.twoX?.landscape || imgObj?.image_urls?.twoX?.square || imgObj?.image_urls?.threeX?.landscape || imgObj?.image_urls?.threeX?.square;
            if (!imgUrl) return null;
            return <img key={idx} loading='lazy' src={imgUrl} alt='' style={mediaStyle} />;
          })
        }
        {inView && roomData.properties?.video_url ? (
          <video width='100%' height={170} controls style={mediaStyle}>
            <source src={roomData.properties?.video_url.med} type='video/mp4' />
          </video>
        ) : null}
      </div>
      <div style={{flex: 1, padding: '16px 12px 8px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
        <div style={{fontWeight: 600, fontSize: 18, marginBottom: 8, color: '#222', letterSpacing: 0.5}}>
          {roomData?.properties?.room_name || 'Room'}
        </div>
        {roomData?.variants.map((data, idx) => {
          if (!showMore && idx < 2) {
            return <Variants key={data.room_type_code} varientData={data} roomData={roomData} />;
          }
          if (showMore) {
            return <Variants key={data.room_type_code} varientData={data} roomData={roomData} />;
          }
          return null;
        })}
        {roomData?.variants.length > 2 && (
          <button
            style={{
              border: '1px solid #e0e0e0',
              width: '100%',
              padding: '6px',
              marginTop: 10,
              borderRadius: 6,
              background: '#f3f6fa',
              color: '#4f8cff',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onClick={() => setShowMore((v) => !v)}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Room;
