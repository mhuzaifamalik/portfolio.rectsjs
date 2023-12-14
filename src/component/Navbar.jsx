import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./Navbar.css"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
  <nav className='nav'>
    <div class={`${showMenu ? 'nav__menu show_menu' : 'nav__menu'}`}>
        <ul ClassName="nav__list">
            {links.map(({name ,icon , path }, index) =>
            { return(
                <li className='nav__item' key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'nav__link active_nav' : 'nav__link'}
                    onClick={() => setShowMenu(!showMenu)}
                    >
                        {icon}
                     
                        <h3 className='nav__Name'>{name}</h3>
                    </NavLink>
                </li>
            )

            })}

        </ul>
    </div>
    <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} 
    
    onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
