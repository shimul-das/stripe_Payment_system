import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 className='text-red-300'>This is a Home</h1>
        <Link to="/payment">Payment</Link><br></br>
        <Link to="/donationform">Donation</Link>
    </div>
  )
}

export default Home