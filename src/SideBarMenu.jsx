
import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarMenu.css'

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <h3>Crewmate Gallery</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/crewmates">All Crewmates</Link>
          </li>
          <li>
            <Link to="/create">Create a Crewmate</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SidebarMenu