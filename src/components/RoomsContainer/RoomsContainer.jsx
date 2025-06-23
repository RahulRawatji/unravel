import { useEffect, useState } from 'react'
import Room from '../Room/Room';

import './roomsContainer.css';

const RoomsContainer = () => {
    const [roomsData, setRoomsData] = useState([]);
    const [tempData, setTempData] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
      setTimeout(()=>{
        getRoomsData();
      },5000)
    },[])
  
    async function getRoomsData (){
    const data =  await fetch('sampleData/sampleData.json').then(data=>data.json()).then(data=>data);
    setRoomsData(data.rooms_by_serial_no[0].rooms);
    const tD = []
    for(let i=0;i<=10;i++){
      tD.push(data.rooms_by_serial_no[0].rooms[i])
    }
    setTempData(tD)
    }

    window.onscroll = function() {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        setIsLoading(true);
      setTimeout(()=>{
        if(tempData.length<roomsData.length){
          const tD = []
          for(let i=tempData.length;i<=tempData.length+10;i++){
            tD.push(roomsData[i])
          }
          setTempData((tempData)=>[...tempData,...tD]);
          setIsLoading(false);
         }
       
      },1500) 
     }
    }
  
  return (
    <>
    <div>Rooms</div>
    <div className='bento-grid'>
    {tempData?.map((roomData,idx)=>{
        return <><Room key={idx} roomData={roomData} className='item'/></>
    })}
    </div>
    {isLoading? <div>Loading...</div>:<></>}
    </>
    
  )
}

export default RoomsContainer