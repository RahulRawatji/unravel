import React, { useState } from 'react';
import './loading.css';

const Loading = () => {
  
    const [classDelay, setClassDelay] = useState(false);
    setTimeout(()=>{
        setClassDelay(true)
    },500)
  return (
  <>
  <div className={`flex min-h-screen relative ${classDelay ? 'fade-out-top': ''}`}>
    <div className='min-w-1/2 justify-end flex items-center text-5xl font-sans slide-out-top'>Un</div>
    <div className={`min-w-1/2 justify-start flex items-center text-5xl font-mono italic pl-2 ${classDelay ? 'slide-out-top': ''}`}>Ravel</div>
    <div className='absolute  inset-auto'>Loading...</div>
    </div>
  </>
  );
};

export default Loading;
