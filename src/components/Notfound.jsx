import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      <h3>Notfound</h3>
      <h2>or</h2>
      <p>Please login to vie</p>.
      <Link to={"/login"}>Please login</Link>
    </div>
  )
}

export default Notfound