import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <Link to="/">Go back to Home</Link>
  </div>

  )
}

export default Error