import './App.css';
import Layout from './components/Layout/Layout';
import RoomsContainer from './components/RoomsContainer/RoomsContainer';
import Loading from './components/common/Loading/Loading';

function App() {
  return (
    <>
    <Layout>
    <Loading/>
    <RoomsContainer/>
    </Layout>
    </>
  );
}

export default App;
