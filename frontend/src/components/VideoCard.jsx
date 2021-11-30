import React from 'react'
import '../App.css'
import ReactPlayer from "react-player"; 

export default function VideoCard() {
    return (
      <div className="VCmain">
        <div className="VCrow">
          <video controls muted className="VC">
            <source
              src="https://ipfs.io/ipfs/QmeHSaYLkWSBzuwvrwpq5a8fnLas9ByTPmBjpWUVY8otud"
              type="video/mp4"
            ></source>
          </video>
          
          <h2>video card</h2>
        </div>
      </div>
    );
}
