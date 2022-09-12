import React from 'react'
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1586779395464-c490b210d5c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>512 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwYXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>235 apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>310 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList