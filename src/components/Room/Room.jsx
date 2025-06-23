import React, {useState} from 'react';
import Variants from '../common/Variants/Variants';

const Room = ({roomData ,className}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div style={{border: '1px solid', margin: '8x 0px', padding: '4px'}} className={className}>
        <div style={{display: 'flex', overflow: 'scroll', height: '200px'}}>
          <>
            {roomData.properties?.video_url ? (
              <video width='320' height='190' controls>
                <source src={roomData.properties?.video_url.med} type='video/mp4' />
              </video>
            ) : null}
          </>
          <>
            {roomData.properties?.room_images?.[0]?.image_urls.map((img) => (
              <img loading='lazy' src={img} />
            ))}
          </>
        </div>
        {roomData?.variants.map((data, idx) => {
          if (!showMore && idx < 2) {
            return <Variants key={data.room_type_code} varientData={data} roomData={roomData} />;
          }
        })}
        <button style={{border: '1px solid red', width: '100%', padding: '4px'}}>Show More</button>
      </div>
    </>
  );
};

export default Room;
