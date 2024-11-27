import { useSelector } from "react-redux";
import i2 from "../assets copy/sp/ankita32.jpg"
import i1 from "../assets copy/sp/tj2.jpg";
import i4 from "../assets copy/sp/sb.jpg";
import i3 from "../assets copy/sp/trupti.jpg";
function Ourteam(){
    const data= [{
        id:1,
        name:'Tejas Patil',
        experience: '8 years',
        post:"Founder",
        image:i1
    },
    {
        id:2,
        name:'Ankita Patil',
        experience: '2 years',
        post:"Developer",
        image:i2
    },
    {
        id:3,
        name:'Trupti Vairagkar',
        experience: '5 years',
        post:"Chief Technology Officer",
        image:i3
    },{
        id:4,
        name:'Suraj Birajdar',
        experience: '1 years',
        post:"Relationship Manager",
        image:i4
    },
    
    ];
    const togglebutton = useSelector(state => state.mcart.toggle)
return(
  
    <>
    
   
    
    <div className={togglebutton?"ot back1":'ot back2'}>
    <h1 className="othead">Meet The Team</h1>
    <p className="otsubhead">These are the people that make magic happen.</p>
        <div className="otmain">
    {
        data.map((value)=>{
            return(

                <div key={value.id} className={togglebutton ?"otcomp oc1":"otcomp oc2"}>
            
                <div className="oi"><img className={togglebutton?"oti oti1":"oti oti2"} src={value.image} alt="" /></div>
                <div className= {togglebutton ?"on on1":"on on2"}>{value.name}</div>
                <br />
                {/* <div><span>{value.experience}</span></div> */}
                <div className={togglebutton ?"op op1":"op op2"}><span>{value.post}</span></div>
                </div>
            )
        })
    }
        </div>
    </div>


    </>
)
}
export default Ourteam
