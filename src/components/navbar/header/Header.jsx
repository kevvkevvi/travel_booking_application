import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHotel, faPlane } from '@fortawesome/free-solid-svg-icons'
import "./header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faHotel} />
                    <span>Hotels</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Cars</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
            </div>
            <h1 className="headerTitle">Want free savings? It's literally free money.</h1>
            <p className="headerDesc">Find the cheapest hotel stays, car rentals, and airplane flight tickets with a free KevBooking account</p>
            <button className="headerButton">Sign In / Sign Up</button>
        </div>
    </div>
  )
}

export default Header