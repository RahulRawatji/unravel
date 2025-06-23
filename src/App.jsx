import './App.css';
import Layout from './components/Layout/Layout';
import RoomsContainer from './components/RoomsContainer/RoomsContainer';
import Loading from './components/common/Loading/Loading';
import { RoomDataProvider, useRoomData } from './context/RoomDataContext';

function AppContent() {
  const { rooms } = useRoomData();
  // Only show <Loading /> if rooms.length === 0
  return (
    <Layout rooms={rooms}>
      {rooms.length === 0 && <Loading />}
      <RoomsContainer/>
    </Layout>
  );
}

function App() {
  return (
    <RoomDataProvider>
      <AppContent />
    </RoomDataProvider>
  );
}

export default App;
