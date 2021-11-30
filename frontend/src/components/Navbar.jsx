import React, { useState } from "react";
import '../App.css' 

import { useMoralis } from "react-moralis";
import StartModal from "./StartModal";
export default function Navbar() {

    const { authenticate, user, logout } = useMoralis();
    const [isOpen, setisOpen] = useState(false);
    return (
      <>
        <div className="nav">
          {!user ? (
            <div className="bar">
              <img
                className="inner"
                style={{ width: "40px", height: "40px", marginLeft: "1%" }}
                alt="logo"
                src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/100/000000/external-loop-arrows-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
              />
              
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
                  height: "35px",
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
          ) : (
            <>
              <div className="bar">
                <img
                  className="inner"
                  style={{ width: "40px", height: "40px", marginLeft: "1%" }}
                  alt="logo"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/100/000000/external-loop-arrows-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                />
                
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
                  className="inner"
                  style={{
                    marginLeft: "1%",
                    width: "10%",
                    borderRadius: "50px",
                  }}
                  onClick={() => setisOpen(true)}
                >
                  Start Stream
                </button>
                {isOpen && <StartModal setIsOpen={setisOpen} />}
                <button
                  onClick={() => {
                    logout({ onComplete: () => alert("Logged Out!") });
                  }}
                  style={{
                    height: "35px",
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
      </>
    );
}
