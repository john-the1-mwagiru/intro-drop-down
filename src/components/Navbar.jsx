import React,{useState} from 'react'
import {FaBars,FaAngleDown,FaClipboardList,FaCalendar,FaBell,FaCopyright} from 'react-icons/fa'

const Navbar = () => {
 const[open,setOpen]=useState(false);
 const[item,setItem]=useState(false);
 const[comp,setComp]=useState(false);
  return (
    <div className='nav-cont'>
        <img src="./assets/images/logo.svg" alt="logo" className="logo" />
         <ul className="links-cont" style={{transform :!open?"translateY(0px)":""}}>
            <li className="feat-cont"><a href="/#"onClick={()=>setItem(!item)} className="feat">Features <FaAngleDown/></a>
            {item ?
               <div className='mini-list'>
               <li><FaClipboardList style={{color:"blue"}}/>Todo List  </li>
               <li><FaCalendar style={{color:"green"}}/>Calendar</li>
               <li><FaBell style={{color:"gold"}}/>Reminders</li>
               <li><FaCopyright style={{color:"purple"}}/>Planning</li>
               </div>:""}
            </li>
            
            <li className="links"><a href="/#" onClick={()=>setComp(!comp)}>Company <FaAngleDown/></a>
            {comp ?
               <div className='comp-co'>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
             </div>:""}
            </li>
               
            <li className="links"><a href="/#">Career</a></li>
            <li className="links"><a href="/#">About</a></li>
            <div className='verify'>
   
               <button className="log" >LogIn</button>
              <button className="sign">Register</button>
              </div>
             </ul>
    
   
   <i className="menu" onClick={()=>setOpen(!open)}>
     <FaBars style={{width:"20px", height:"60%"}}/>
    </i> 
    </div>           
  )
}

export default Navbar