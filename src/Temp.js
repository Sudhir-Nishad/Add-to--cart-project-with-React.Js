import React from 'react'
import Card from './Card'
import List from './List'
import './Temp.css'
const Temp=({handleClick}) =>{
    return (
      <>
        <section id='head'>
      <div className="content">
        <h1>YOUR FEET<br /> DESERVE<br /> THE BEST
        <div className='content2'> YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET<br/>DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</div> </h1>
        <img src="shoe-removebg-preview.png" alt="" />
          </div>
          </section>
      <div className="box">-----HERE &nbsp; YOU  &nbsp;CAN &nbsp; CHOOSE &nbsp; YOUR  &nbsp;FAVOURITE &nbsp; ONE-----</div>
      <section>
          {List.map((item) => {
              return <Card item={item} key={item.id} handleClick={ handleClick} /> 
          }
          )}
        </section>
         <div className='last-box'> <a href="#head">BACK TO TOP</a> </div>
            </>
  )
}
export default Temp;
