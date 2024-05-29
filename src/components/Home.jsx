import React, { useEffect } from 'react'
// import logo from '../assets/logomain 1.png'
import { useNavigate } from 'react-router-dom'
import '/src/App.css'
function Home () {
let navigate = useNavigate()
  return (


<>
<header className='homehead'>
        <div className="wrapper" id='home'>
          {/* <div className="logo">
            <img className='logo-img' src={logo} alt="" style={{ width: "220px", height: "100px" }} />
          </div> */}
          <ul className="nav-area">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="welcome-text">
        <div className="container-fluid">
   <div className="row">
      <div className="neons" style={{width:""}}>
         <h1><em>-Diary Manager-</em></h1>
      </div>
   </div>
</div>
          <br />
          <br />
          <button className='glowing-btn' onClick={() => navigate('/login')} style={{ width: "140px" }} ><span className='glowing-txt' style={{ fontSize: "16px", letterSpacing: "5px" }} >Login </span> </button>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <button className='glowing-btn' onClick={() => navigate('/signup')} style={{ width: "140px" }} ><span className='glowing-txt' style={{ fontSize: "16px", letterSpacing: "5px" }} >Signup </span> </button>
        </div>
      </header>


</>


    
    
  )
}

export default Home;