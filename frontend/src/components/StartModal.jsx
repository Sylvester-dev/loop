import React from 'react'

export default function StartModal({setIsOpen}) {
    return (
      <div className="modal">
        <h1>Start your stream</h1>
        <div>
          <h2>Name</h2>
          <input type="text" />
        </div>
        <div>
          <h2>Category</h2>
          <input type="text" />
        </div>
        <div>
          <h2>Tags</h2>
          <input type="text" />
          <button>Add</button>
        </div>
        <div>
          <button>Start Stream</button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    );
}
