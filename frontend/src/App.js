import './App.css';

import Card from './components/Card';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard'; 

function App() {

  

  return (
    <>
      <Navbar />
      <div className="ll">
        <Card Name={"IRL"} />
        <Card Name={"Shop"} />
        <Card Name={"Esports"} />
        <Card Name={"Music"} />
      </div>
      <div className="dd">
        <VideoCard />
        <VideoCard />
      </div>
    </>
  );
}

export default App;
