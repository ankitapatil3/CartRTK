import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from './Pages/Home'
import { ImCross } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineDarkMode } from "react-icons/md";
import { togglefun } from './Slice/Slice';
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const dataitem = useSelector(state => state.mcart.cartitems)
  const togglebutton = useSelector(state => state.mcart.toggle)
  const [hmv , sethmv] = useState(false)
  // const [cross , setcross] = useState(false)
  const funhm= ()=>{
sethmv(!hmv)
  }
  const dispatch = useDispatch()
  console.log(dataitem);
  const handletoggle = () => {
    dispatch(togglefun())
  }
  console.log("togglebutton", togglebutton)
  return (
    <div className={togglebutton ? 'nav2' : 'nav'}>
      <div >
       <Link className='logo' to="/"> Shopping Cart</Link>
      </div>
       <div className={hmv?'menu2 ':'menu1 '} onClick={()=>sethmv(false)}>
      <Link to='/' className='menu'>Home</Link>
      <Link to='/product' className='menu'>Product</Link>
      
      <Link to='/cart' className='menu'> Cart <FaCartShopping className='carticon' size={26} />

        {
          (dataitem.length != 0) ? <span className='cartlen'>{dataitem.length} </span> : ""


        }
      </Link>
      <Link to='/about'className='menu mt'> About </Link>
      <Link to='/ourteam'className='menu'>Our Team</Link>
      <Link to='/feedback'className='menu'>User Review</Link>
      </div>
      <MdOutlineDarkMode style={{ color: 'white' }} size={22} onClick={handletoggle} />

      {!hmv? <GiHamburgerMenu  className='hm' onClick={funhm}/>:<ImCross className='hm' onClick={funhm}/>}
      

    </div>
  )
}

export default Navbar
