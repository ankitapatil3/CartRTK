import React from 'react'
import cart from "../sp/cart.jpg"
import { useSelector } from 'react-redux'

function About() {
  const togglebutton = useSelector(state => state.mcart.toggle)
  return (
    <div className={togglebutton?'about back1':'about back2'}>
      <div className='ab'>

     
      <h1 className='ahead'>About US</h1>
      <div className='aboutgroup'>
        <div>
        <div className='acontent'>Our Slogan is You Desire we deliver.  </div>
<div className='bcontent'>Twenty years ago, we began as small online shopping cart that only sold bags. Today, we Still sell bags- as well as clothing, jewellery, Monitor etc and many more. That 'more' is providing best service, customer experience and company culture. We aim to inspire the world by showing it's possible to simultaneously deliver happiness to customer, employees, vendors, shareholders and community in long term, sustainable way.</div>
{/* <br /> */}

<div className='bcontent'> We hope in future we will add more product that we will use in our daily life With Discount...  And also we will give some membership to our customer so the will get fast product.
  And We will create the one app so it will help you to get the information about your product like where it is, and when it will reach. and many more. Thank You For Your Support...
</div>

        </div>
      <div className='aimg'><img src={cart} className='ai'></img></div>
      </div>
     
</div>
    </div>
  )
}

export default About
