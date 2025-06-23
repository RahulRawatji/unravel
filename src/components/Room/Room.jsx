import React, {useState} from 'react';
import Variants from '../common/Variants/Variants';
import { useInView } from './useInView';

const mediaStyle = {
  width: 320,
  height: 190,
  objectFit: 'cover',
  borderRadius: 8,
  marginRight: 8,
  background: '#f3f3f3',
  flexShrink: 0,
};

const Room = ({roomData ,className}) => {
  const [showMore, setShowMore] = useState(false);
  const [mediaRef, inView] = useInView({ threshold: 0.2 });

  return (
    <div style={{border: '1px solid', margin: '8px 0px', padding: '4px'}} className={className}>
      <div ref={mediaRef} style={{display: 'flex', overflow: 'auto', height: 190, minHeight: 190}}>
        {inView && roomData.properties?.video_url ? (
          <video width={320} height={190} controls style={mediaStyle}>
            <source src={roomData.properties?.video_url.med} type='video/mp4' />
          </video>
        ) : null}
        {inView && roomData.properties?.room_images?.[0]?.image_urls.map((img, idx) => (
          <img key={idx} loading='lazy' src={img} alt='' style={mediaStyle} />
        ))}
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
          style={{border: '1px solid #aaa', width: '100%', padding: '4px', marginTop: 8}}
          onClick={() => setShowMore((v) => !v)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default Room;
