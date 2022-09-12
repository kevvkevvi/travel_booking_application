import React from 'react'
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cdn.wynnresorts.com/q_auto,f_auto,w_576/Encore%20Boston%20Harbor/Room%20and%20Suites/Current/828x466/2%20Bedroom%20Residence/EBH_2%20Bedroom%20Residence_Living%20Room_828x466_Barbara%20Kraft" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Encore Boston Harbor</h1>
            <span className="siDistance">20mi from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Luxury Hotel</span>
            <span className="siFeatures">Entire room • 1 bathroom • King size bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later before a certain date</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>9.3</button>
            </div>
            <div className="siDetailsTexts">
                <span className="siPrice">$383</span>
                <span className="siTaxOp">Includes taxes and other hidden fees!</span>
                <button className="siCheckButton">Check Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem