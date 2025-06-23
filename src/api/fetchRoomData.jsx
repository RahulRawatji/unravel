export default async function fetchRoomData(){
    const data =  await fetch('../sampleData/sampleData.json').then(data=>data.json()).then(data=>data);
    return data.rooms_by_serial_no[0].rooms
}