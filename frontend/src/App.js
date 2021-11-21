import './App.css';

import { useMoralis } from "react-moralis";


function App() {

  const { authenticate, user, logout } = useMoralis();


  return (
    <div className="App">
      <div className="nav" style={{}}>
        {!user ? (
          <>
            <div className="bar">
              <h3 className="inner" style={{ color: "#fed456" }}>
                {!user ? "not logged in" : user.id}
              </h3>
              <button
                onClick={() => {
                  authenticate({
                    onComplete: () => alert("You are now Logged in! 🎉"),
                  });
                }}
                style={{
                  height: "40px",
                  marginTop: "10px",
                  width: "20%",
                  marginLeft: "25%",
                  borderRadius: "50px",
                }}
                className="inner"
              >
                Login
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="bar">
            <h2 className="inner" style={{color:"#ffffff"}}>loop</h2>
              <h3
                className="inner"
                style={{ color: "#fed456" }}
              >
                {!user ? "not logged in" : user.id}
              </h3>
              <button
                onClick={() => {
                  logout({ onComplete: () => alert("Logged Out!") });
                }}
                style={{
                  height: "40px",
                  marginTop: "15px",
                  width: "180px",
                  
                  borderRadius: "50px",
                }}
                className="inner"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
