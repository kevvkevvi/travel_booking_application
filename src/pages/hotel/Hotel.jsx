import React from 'react'
import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/24/ff/e4/03/exterior-bh-harborwalk.jpg"
    },
    {
      src: "https://bdc2020.o0bc.com/wp-content/uploads/2022/04/Encore-Boston-Harbor-exterior-by-Roger-Davies-6262fc1267009-scaled.jpg"
    },
    {
      src: "https://pix10.agoda.net/hotelImages/6678484/-1/6a990a86af03ac8fa60c9afb2c1abdfb.jpg?ca=9&ce=1&s=1024x768"
    }
  ]

  const handleOpen = (index) => {
    setSlideNumber(index)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction==="left") {
      newSlideNumber = slideNumber > 0 ? slideNumber-1 : photos.length-1
    } else {
      newSlideNumber = slideNumber < photos.length-1 ? slideNumber+1 : 0
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("left")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("right")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Book Now and Save!</button>
          <h1 className="hotelTitle">Encore Boston Harbor</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>1 Broadway, Everett, MA 02149</span>
          </div>
          <span className="hotelDistance">
            20 miles from center
          </span>
          <span className="hotelPriceHighlight">
            Book a luxurious stay starting at $383 a night and enjoy many perks!
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Experience luxury from the best of Boston</h1>
              <p className="hotelDesc">
                The Encore Boston Harbor is a luxury hotel and casino located in Everett, Massachusetts. The hotel is owned by Wynn Resorts and is the company's first property in the state of Massachusetts. The hotel opened on June 23, 2019, and is the second Wynn Resorts property to open in the Boston area, after the Wynn Boston Harbor in nearby Everett.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Great value if you book 4 or more nights!</h1>
              <span>
                If you book 4 or more nights, you can get a night for free!
              </span>
              <h2>
                <b>$383</b> per night
              </h2>
              <button>Book Your Next Trip!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel