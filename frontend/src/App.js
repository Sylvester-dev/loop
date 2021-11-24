import './App.css';

import Card from './components/Card';
import Navbar from './components/Navbar';

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
    </>
  );
}

export default App;
