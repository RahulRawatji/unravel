import { useEffect, useState } from 'react'
import Room from '../Room/Room';
import { useRoomData } from '../../context/RoomDataContext';
import './roomsContainer.css';

const RoomsContainer = () => {
    const { rooms, loading, error } = useRoomData();
    const [tempData, setTempData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (rooms && rooms.length > 0) {
        const tempRoomData = [];
        for (let i = 0; i <= 10 && i < rooms.length; i++) {
          tempRoomData.push(rooms[i]);
        }
        setTempData(tempRoomData);
      }
    }, [rooms]);

    useEffect(() => {
      const handleScroll = () => {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
          setIsLoading(true);
          setTimeout(() => {
            if (tempData.length < rooms.length) {
              const tD = [];
              for (let i = tempData.length; i <= tempData.length + 10 && i < rooms.length; i++) {
                tD.push(rooms[i]);
              }
              setTempData((prev) => [...prev, ...tD]);
              setIsLoading(false);
            }
          }, 1500);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [tempData, rooms]);

    if (loading) return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 48, color: '#555'}}>
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4f8cff" strokeWidth="2" fill="none" opacity="0.2"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#4f8cff" strokeWidth="2" strokeLinecap="round"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></path></svg>
        <span style={{marginTop: 12, fontSize: 18}}>Loading...</span>
      </div>
    );
    if (error) return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 48, color: '#d32f2f'}}>
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#d32f2f" strokeWidth="2" fill="none" opacity="0.2"/><path d="M12 8v4" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#d32f2f"/></svg>
        <span style={{marginTop: 12, fontSize: 18}}>Error loading rooms.</span>
      </div>
    );

    return (
      <>
        <div className='bento-grid'>
          {tempData?.map((roomData, idx) => (
            <Room key={idx} roomData={roomData} className='item' />
          ))}
        </div>
        {isLoading ?  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 48, color: '#555'}}>
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4f8cff" strokeWidth="2" fill="none" opacity="0.2"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#4f8cff" strokeWidth="2" strokeLinecap="round"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></path></svg>
        <span style={{marginTop: 12, fontSize: 18}}>Loading...</span>
      </div> : null}
      </>
    );
}

export default RoomsContainer