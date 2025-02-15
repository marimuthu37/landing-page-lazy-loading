import React from 'react'
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div>
            
      <div className="head">

        <h1 className="title">SUNDHARA</h1>

        <div className="nav-div">

          <ul className="nav">
            <li className="list"><Link to="/">HOME</Link></li>
            <li className="list"><Link to="/places">PLACES</Link></li>
            <li className="list"><Link to="/book">BOOKINGS</Link></li>
            <li className="list"><Link to="/about">ABOUT</Link></li>
          </ul>

        </div>

      </div>

      <h1 className="titles"> Travels </h1>

    </div>
  )
}

export default Head ;

