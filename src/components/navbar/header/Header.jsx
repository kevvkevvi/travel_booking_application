import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCar, faHotel, faPeopleGroup, faPlane } from '@fortawesome/free-solid-svg-icons'
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
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faHotel} className="headerIcon"/>
                    <input type="text" placeholder='Where to?' className='headerSearchInput'/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className='headerSearchText'> date to date</span>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPeopleGroup} className="headerIcon"/>
                    <span className='headerSearchText'> 2 adults 2 children 1 room</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header