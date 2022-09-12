import React from 'react'
import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Big deals incoming!</h1>
        <span className="mailDesc">Save BIG by joining our mailing list</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Join</button>
        </div>
    </div>
  )
}

export default MailList