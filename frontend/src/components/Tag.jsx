import React from 'react'
import '../App.css'

export default function Tag(props) {
    return (
      <>
        <div className="main">
          <a href="#" className="row">
            <h2>{props.Name}</h2>
            <h3>whatever you wish to add</h3>
          </a>
        </div>
      </>
    );
}
