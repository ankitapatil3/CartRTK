import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

import { removetocart, clearcart, increment, decrement } from '../Slice/Slice';
import { IoMdRemoveCircle } from "react-icons/io";


function Cart() {
  const togglebutton = useSelector(state => state.mcart.toggle)
  const mydata = useSelector(state => state.mcart.cartitems)
  const dispatch = useDispatch()
  //delete item
  const handledelete = (id) => {
    console.log("id", id);
    dispatch(removetocart(id))
  }

  //emptycart
  const handleclear = () => {
    dispatch(clearcart())
  }
  const addq = (id) => {
    dispatch(increment(id))
  }

  const minusq = (id) => {
    dispatch(decrement(id))
  }

  const totalprice = mydata.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0
  )

  return (
    <div  className={togglebutton?'back1':'back2'}>
     


      <div className={togglebutton?'procomp2':'procomp'}>

        <div className={togglebutton?'cartmain back1':'cartmain back2'}>
          <div className={togglebutton?'spandatacart sdback1':'spandatacart sdback2'}>
          <div className='sd'>Total Items : {mydata.length}</div>
          <div className='totalprice sd'>Total price : {totalprice.toFixed(2)}</div>
          </div>
         <div className={togglebutton?'cartsubhead c1':"cartsubhead c2"}>
          <div className={togglebutton? 'csh2':'csh'}>Product Image</div>
          <div className={togglebutton? 'csh2 csh22':'csh csh22'}>Name </div>
          <div className={togglebutton? 'csh2':'csh'}>Quantity</div>
          <div className={togglebutton? 'csh2':'csh'}>Price</div>
          <div className={togglebutton? 'csh2':'csh'}>Delete Product</div>
         </div>

          {
            mydata.map((value) => {
              return (
                <div key={value.id} className='cartcomp'>
                  <div className='cartdata'>
                    <div className='ci'><img src={value.image} alt="" className='cartimage' /></div>
                    <div className='carttitle'>{value.title}</div>
                    <div className='apr'>
                      <div><IoMdAddCircle className='add' size={23} onClick={() => addq(value.id)} /></div>

                      <div className='cartprice'>Quantity: {value.quantity}
                      </div>
                      <div><IoMdRemoveCircle className='add' size={23} onClick={() => minusq(value.id)} /></div>

                    </div>
                    <div className='quantity'> ₹ {value.price} </div>
                    <button className={togglebutton?'cdelete back2':'cdelete back1'} onClick={() => handledelete(value.id)}>Delete<MdDelete size={26} className='md' /></button>
                  </div>

                </div>
              )
            })
          }
          <div className={togglebutton?'msg msg1':'msg msg2'}>
            {mydata.length == 0 ? "Your Cart is Empty." : <button className= {togglebutton?'cc cc1 clc':'cc  clc cc2'} onClick={() => handleclear()}> Clear Cart</button>
            } 
            <div>{mydata.length==0 ?"":<button className= {togglebutton?'cc cc1':'cc cc2'} > Make Payment</button>}</div>
            </div>

            
        </div>
      </div>
    </div>
  )
}

export default Cart
