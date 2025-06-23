async function fetchRoomData(){
    const data =  await fetch('../sampleData/sampleData.json').then(data=>data.json()).then(data=>data);
    setRoomsData(data.rooms_by_serial_no[0].rooms);
    const tD = []
    for(let i=0;i<=10;i++){
        tD.push(data.rooms_by_serial_no[0].rooms[i])
    }
    setTempData(tD)
    return data.rooms_by_serial_no[0].rooms
     
}