import React from 'react'
import i1 from "../sp/anilpatil3.jpg";
import i2 from "../sp/archanapatil.jpg";
import i3 from "../sp/basu.jpg";
import i4 from "../sp/amruta.jpg";
import i5 from "../sp/santosh.jpg";
import i6 from "../sp/tj2.jpg";
import i7 from "../sp/ashwinikanoje.jpg";
import i8 from "../sp/saisha.jpg";
import i9 from "../sp/abhi2.jpg";
import i10 from "../sp/rohini2.jpg";
import i11 from "../sp/koli.jpg";
import i15 from "../sp/ravi.jpg";
import i12 from "../sp/tj.jpg";
import i13 from "../sp/ankita.jpg";
import i14 from "../sp/ak.jpg";
import { useSelector } from 'react-redux';

function Feedback() {
  const togglebutton = useSelector(state => state.mcart.toggle)
    const ur = [
        {
            id:1,
            name:'Aarav Swami',
            image:i14,
           msg:"Quality is good, packaging is proper"
        },
        {
            id:2,
            name:'Archana Mandrupkar',
            image:i2,
            msg:"All item is very gud and gud behavior by delivery boy everything is perfect"
        },
        {
          id:3,
          name:'Anil Patil',
          image :i1,
          msg:"Good delivery person. Spoke humbly. All items in good condition"
        },
        {
id:4,
name:"Rohini Pol",
image:i10,
msg:"Good..my 1st order in grocery..good quality 👌"
        },{
          id:5,
          name:"Santosh Kumtale",
          image:i5,
          msg:"Good delivery person. Spoke humbly. All items in good condition"
          
        },
        {
          id:6,
         name:"Tejas Patil",
          image:i6,
          msg:"Timely and safely delivered, nice job"
        },{
          id:7,
          name:"Ashwini Kanoje",
          image:i7,
          msg:"Good Quality"
        }
        ,{
          id:8,
          name:"Saisha Vadiyar",
          image:i8,
          msg:"Nice quality material Flipkart very nice shop"
        }
        ,{
          id:9,
          image:i9,
          name:"Abhi patil",
          msg:"Thanks, nice product and packaging is in good condition."
        }
        ,{
          id:10,
          image:i4,
          name:"Amruta birajdar",
          msg:"Thanks, nice product and packaging is in good condition."
        },
        {
          id:11,
          image:i11,
          name:"Priyank Koli",
          msg:"  This is one of the best recommended to get best product with affordable price."
        },
        {
          id:12,
          image:i3,
          name:"Basu Patil",
          msg:"Fast service with affordable price."
        },
        {
          id:13,
          image:i12,
          name:"Shravan Kale",
          msg:"happy to help.."
        },
        {
          id:14,
          image:i13,
          name:"Ankita Patil",
          msg:"Good packaging.without breaking. Thank You."
        },
        {
          id:15,
          image:i15,
          name:"Ravi Pujari",
          msg:"fast service i like it."
        },
    ]
  return (
    <div className={togglebutton?'feedmain back1':'feedmain back2'}>
      <div > <h1 className='feedhead'>User Review</h1></div>
      <div className='feedcomp '>
       
        <div className='feedsmall'>
      {
        ur.map((value)=>{
            return(
                <div key={value.id} className='fc'>
                 <div className='fname'>{value.name}</div>
                <div className='imgcl'>

               <div>    <img src={value.image} alt="" className='imgcl'/></div>
               <div className='fmsg'> {value.msg}</div>
             </div>
                <br />
                </div>
            )
        })
      }
      </div>
      </div>
    </div>
  )
}

export default Feedback
