import React from 'react'
import './Navbar.css'
function open() {
  window.open('123.html')
}
export default function Navbar({size}) {
  return (
    <div>
        <nav className='menu'>
        <span><img src="nike-removebg-preview.png" className='logo' alt="" /></span>
        <button style={{fontWeight:'bold' , fontFamily:'revert-layer'}} onClick={open} >Login </button>
        <div className="cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        
              <div className='cart-no'>{ size}</div>
      </nav>
      
    </div>
  )
}
