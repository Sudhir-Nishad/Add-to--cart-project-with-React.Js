import React from 'react'
import './Card.css'
const Card=({item,handleClick})=> {
    return (
    
    <div className='cards'>
        <div className="image-box">
              <img src={item.img} alt="image" />
          </div>
            <p>{item.price}</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
    </div>
            
  )
}
export default Card;
