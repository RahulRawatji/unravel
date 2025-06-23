import React from 'react'

const Variants = ({varientData,roomData}) => {
    // console.log(varientData)
    // console.log(roomData.properties?.room_images?.[0]?.image_urls)
    // console.log(roomData.properties?.video_url)
  return (
    <> 
    <div style={{ border:'1px solid green',borderRadius:'4px',margin:'6px 2px'}}>

    <p>{varientData?.name}</p>
    <button style={{background:'green',color:'#fff', width:'100%', border:'none',padding:'4px'}}>Select</button>
    </div>
    </>

  )
}

export default Variants