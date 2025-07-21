import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <nav className="NavigationBar">
     <Link to="/" className="NavigationBar-link">
     Home
     </Link>
        <Link to="/userlist" className="NavigatioinBar-link">
        User List
        </Link>
         </nav>
  )
}
