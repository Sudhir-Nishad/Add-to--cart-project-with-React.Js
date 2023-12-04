import React, { useState } from 'react'
import Temp from './Temp'
// import Cart from './Cart';
import './App.css'
import Navbar from './Navbar'
export default function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState([true]);
  const [warning,setWarning]=useState(false)
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }
  return (
    <>
    <div>
     
      <Navbar size={ cart.length} />
      <Temp handleClick={handleClick} />
      
      {
        warning && <div className='warning'>Item is already added !...</div>         
      }
      
    </div>
     
      </>
  )
}
