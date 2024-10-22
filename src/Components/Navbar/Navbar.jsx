import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'


const Navbar = ({theme,setTheme}) => {
  const toggle_mode = () =>{
    theme === 'light'? setTheme('dark') : setTheme('light');
  }
  return (
    <div className='navbar'>
        <img src={theme === 'light'? logo_light : logo_dark} alt="logo" className='logo' />
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./">Products</a></li>
            <li><a href="./">Features</a></li>
            <li><a href="./">About</a></li>
        </ul>

        <div className="Search-box">
            <input type="text" placeholder='Search'/>
            <img src={theme === 'light'? search_icon_light : search_icon_dark} alt="Search_icon" />
        </div>
        <img src={theme === 'light'? toogle_light : toogle_dark} alt="toggle-icon" className='toggle-icon' onClick={()=>{toggle_mode()}}/>
    </div>
  )
}

export default Navbar