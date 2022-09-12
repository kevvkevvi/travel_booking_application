import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1611839234650-997b22bd1ea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Boston, MA</h1>
          <h2>225 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1582488719899-a2a54cb479fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Portland, ME</h1>
          <h2>82 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>New York, NY</h1>
          <h2>352 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured