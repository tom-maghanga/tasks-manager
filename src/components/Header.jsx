import Logo from "../assets/logo.svg"
import React from 'react'

function Header() {
  return (
    <header>
    <div className='logo'>
        <img src={Logo} alt='Task Logo' />
        <span>Task App</span>
    </div>
    <div className='themeSelector'>
        <span className='light'></span>
        <span className='medium activeTheme'></span>
        <span className='dark'></span>
        <span className='gOne'></span>
        <span className=''></span>
        <span className='gThree'></span>
    </div>
</header>
  )
}

export default Header