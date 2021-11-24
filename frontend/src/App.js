import './App.css';

import { useMoralis } from "react-moralis";
import card from './components/card';

function App() {

  const { authenticate, user, logout } = useMoralis();

  console.log(card)
  return (
    <>
      
        <div className="nav">
          {!user ? (
            <>
              <div className="bar">
                <h2
                  className="inner"
                  style={{ color: "#ffffff", marginTop: "1%" }}
                >
                  loop
                </h2>
                <h3
                  className="inner"
                  style={{ color: "#fed456", marginTop: "1%" }}
                >
                  {!user ? "😸 login first" : user.id}
                </h3>
                <input
                  className="inner"
                  style={{ marginLeft: "5%", width: "30%", marginTop: "1%" }}
                />
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    marginLeft: "10px",
                    marginTop: "1.17%",
                  }}
                  className="inner"
                  alt="search-icon"
                  src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
                />
                <button
                  onClick={() => {
                    authenticate({
                      onComplete: () => alert("You are now Logged in! 🎉"),
                    });
                  }}
                  style={{
                    height: "40px",
                    width: "180px",
                    borderRadius: "30px",
                    float: "right",
                    marginRight: "2%",
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
                <h2
                  className="inner"
                  style={{ color: "#ffffff", marginTop: "1%" }}
                >
                  loop
                </h2>
                <h3
                  className="inner"
                  style={{ color: "#fed456", marginTop: "1%" }}
                >
                  {!user ? "😸 login first" : user.id}
                </h3>
                <input
                  className="inner"
                  style={{ marginLeft: "5%", width: "30%", marginTop: "1%" }}
                />
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    marginLeft: "10px",
                    marginTop: "1.17%",
                  }}
                  className="inner"
                  alt="search-icon"
                  src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
                />
                <button
                  onClick={() => {
                    logout({ onComplete: () => alert("Logged Out!") });
                  }}
                  style={{
                    height: "40px",
                    width: "180px",
                    borderRadius: "50px",
                    float: "right",
                    marginRight: "2%",
                  }}
                  className="inner"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      

      <div className="ll">
        <card />
        <h2>sdjkcvbsdfjkbv</h2>
      </div>

      
    </>
  );
}

export default App;
