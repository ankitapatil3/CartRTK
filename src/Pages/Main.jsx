import React from 'react'
import { useSelector } from 'react-redux'

function Main() {
  const togglebutton = useSelector(state => state.mcart.toggle)
    const mp = 'https://image.slidesdocs.com/responsive-images/background/eye-catching-advertising-banner-featuring-a-shopping-cart-design-for-online-shopping-powerpoint-background_1176440e25__960_540.jpg'
  return (
    <div >
      <div className={togglebutton?'Mainwhole back1':'Mainwhole back2'} >
       
        <div className='m1'>
            <div className='m11'><h1>Find the perfect Product for you</h1></div>
           <div className='m12'> <p>Beautiful Product that encourage you to get creative..</p>
           </div>
           <div>   <button className={togglebutton?'mb b2':'mb b1'}>Shop Now</button> 
           </div>

        </div>
        <div className='m2'><img  className='m2' src={mp}/></div>
       
      </div>
    </div>
  )
}

export default Main
