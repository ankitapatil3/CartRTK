import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../Slice/Slice'

function Home() {
    const togglebutton = useSelector(state => state.mcart.toggle)
const [product, setproduct]= useState([])
const dispatch = useDispatch()
const data = useSelector(state=>state.mcart.cartitems)
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            // console.log(response.data);
            setproduct(response.data)
        })
    },[])

    //addingitem in cart
    const handleAdd= (item)=>{
const existingdata= data.find((items)=>items.id===item.id)
if(existingdata){
    alert("data is aleready added")
}else{
    dispatch(addtocart(item))  
}
        // console.log("item",item);

    }
  return (
    <div className={togglebutton?'back1':'back2'}>
      {/* Home */}
         <div className='homehead'><h1>Our Products </h1> </div>
      <div className={togglebutton?'procomp2':'procomp'} >
   
        {
            product.map((value)=>{
                return(
                    <div key={value.id} className={togglebutton?'pc2':'pc'}>
                        
                        <div>
                         <img src={value.image}className='pi' ></img>
                        </div>
                        <div className='pt'>{value.title}</div>
                        <div className='pt pp'>₹ {value.price}</div>
                    <div><button className={togglebutton?'btn back2':'btn back1'} onClick={()=>handleAdd(value)}>Add to Cart </button></div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Home
