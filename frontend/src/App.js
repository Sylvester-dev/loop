import './App.css';

import { BrowserRouter, Route,Switch } from "react-router-dom";
import AccDashboard from "./views/AccDashboard";
import Home from "./views/Home"; 
import Navbar from "./components/Navbar";
import CheckOut from "./views/CheckOut";
import IndPage from "./views/IndPage";


function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/acc/my_videos">
            <AccDashboard />
          </Route>
          <Route path="/cart/checkout">
            <CheckOut />
          </Route>
          <Route path="/:userId" alt="WatchStream">
            <IndPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
