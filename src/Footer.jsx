import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Footer() {
  const togglebutton = useSelector(state => state.mcart.toggle)
  return (
    <div className={togglebutton?'footer ft1':'footer ft2'}>
       <div className='logodata logodata1'>
       <Link className='logo' to="/"> Shopping Cart</Link>
       <div className='fd'>The Shopping cart website provice online service to purchase the product</div>
      </div>
      <div className='logodata logodata12 '>
        <div logodata11>Useful Link</div>
       <div><Link to='/' className='fmenu'>Home</Link></div>
   
      <div> <Link to='/about' className='fmenu'> About </Link> </div>
      <div><Link to='/ourteam' className='fmenu'>Our Team</Link></div>
      <div><Link to='/feedback' className='fmenu'>User Review</Link></div>
      </div>
      <div className='logodata fcontact logodata3'>
       <span className='cdata'> Contact Information : </span>
      <br />
<FaLocationDot /> Patil Nagar Vijapur Road, Solapur
<br />
<MdPhone /> 7875035021
<br />
<IoMail /> ankitapatil239@gmail.com
      </div>
      </div>
   
  )
}

export default Footer
