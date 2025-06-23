async function fetchRoomData(){
    const data =  await fetch('https://firebasestorage.googleapis.com/v0/b/travelai-d321b.appspot.com/o/sample.json?alt=media&token=981c8cbb-6750-4347-a82a-a5cd46ab21f4').then(data=>data.json()).then(data=>data);
    setRoomsData(data.rooms_by_serial_no[0].rooms);
    const tD = []
    for(let i=0;i<=10;i++){
        tD.push(data.rooms_by_serial_no[0].rooms[i])
    }
    setTempData(tD)
    return data.rooms_by_serial_no[0].rooms
     
}