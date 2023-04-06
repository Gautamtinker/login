import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Sidebardata } from './Sidebardata';
import './navbar.css';
import {IconContext} from 'react-icons';
import Login from './Login';
import Signup from './Signup';
function Navbar() {
  const [sidebar,setsidebar]=useState(false);
  const showsidebar=()=>setsidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{ color:'#fff' }}>
    <div className='navbar'>
       <Link to="#" className='navbar-menu'>
            <FaIcons.FaBars onClick={showsidebar}/>
       </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
      <ul className='nav-menu-items'>
            <li className='navbartoggle'>
              <Link to="#" className='navbar-menu'>
                  <AiIcons.AiOutlineClose/>
              </Link>
              </li>
              {Sidebardata.map((item,index)=>
              {
                return(
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
              })}
      </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar