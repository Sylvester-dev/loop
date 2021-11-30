import React from 'react'

import '../App.css';

export default function IndPage() {
    return (
      <>
        <div className="main_screen">
          <div>
            <video controls muted className="VCInd">
              <source
                src="https://ipfs.io/ipfs/QmeHSaYLkWSBzuwvrwpq5a8fnLas9ByTPmBjpWUVY8otud"
                type="video/mp4"
              ></source>
            </video>
            <div className="chat">
              <h3>chat</h3>
            </div>
          </div>

          <div className="below">
            <h2>Name</h2>
            <h2>Description of Stream</h2>
            <img src="" alt="profile-pic" />
            <h4>Category</h4>
            <button>Follow with flow</button>
          </div>
        </div>
      </>
    ); 
}
