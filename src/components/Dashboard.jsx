import React from 'react'
import '/src/Dashboard.css'
import logo from '../assets/dash logo.png'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import youtube from '../assets/youtube.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import footerlogo from '../assets/footer_logo_1-removebg-preview.png'
import user1 from '/src/assets/Untitled_design-removebg-preview.png'
import userblack from '/src/assets/userblack.png'
import addDiary from '/src/assets/add diary1.png'
import readdiary from '/src/assets/reed diary.png'
import { useNavigate } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
function Dashboard() {

    let navigate = useNavigate()
  let logout = useLogout()
  



  

  return (
    <>


    <div className='wrapper' style={{width:'100%'}}>
    <header className="header" id='header-dash'>
     <div className="header__top header__top--large clearfix" >
       <div className="logo logo--large" id='top-hed'>
         <a href="/">
           <img alt="Logo" className='logomain' style={{width:'140px',marginTop:'-15px',marginRight:'-20px',height:'150px'}} src={logo}/>
           <span className="logo-font" style={{fontSize:'40px'}} >
             <span className="monkkee-monk">Diary</span><span className="monkkee-kee">Manager</span>
           </span>
         </a>
       </div>
       <div className="user-menu d-flex gap-3" id='navtop' >


        
       <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img style={{width:'30px ',margin:'0px 4px 0px 0px '}} src={user1}alt="" />
   Menu
  </button>
  <ul className="dropdown-menu" >
    <li className='drop-in ' style={{width:'200px'}}>
        <button className="dropdown-item btn-primary" type="button" onClick={()=>navigate('/profile')}>
            <img style={{borderRadius:'70px',width:'30px',marginRight:'10px'}}  src={userblack} alt="" /> My Profile </button></li>
            
    <li><button  className="dropdown-item  btn-primary" type="button"  onClick={()=>navigate('/creatediary')} >
        <img  src={addDiary} style={{width:'30px',borderRadius:'30px',marginRight:'13px'}} alt="" />
        Create Diary</button></li>
   
    <li><button className="dropdown-item  btn-primary" type="button" onClick={()=>navigate('/mydiarys')} >
        <img style={{width:'30px',borderRadius:'20px',marginRight:'15px'}} src={readdiary}  >
        
        </img>
        My Diarys</button></li>
  </ul>
</div>
     
     
         <a className="btn btn-primary" onClick={logout} >Logout</a>


     
     </div>
     
     <div className="header__menu">
         <div className="header__menu-slogan">
           <span className="monkkee-monk">Diary</span><span className="monkkee-kee">Manager</span> – the safest place<br />for your thoughts
         </div>
       
     </div>
     </div>
     
       
      
   </header>
   <div className="main main--web">
       
<div id="about" className="home__register">
 <div>
   <img src="https://monkkee.com/assets/pencil-b889a9de76f2555924bdef13078ccb76714bf11b4130a7ae0994fe4edf644187.svg" alt="" />
 </div>
 <h2 className="home__register-heading">  Keep a private and free online diary
</h2>
   <p>You want to keep your thoughts in a place where no one can find them? Or capture great ideas so they do not get lost? The online diary  offers you a safe place for your very personal topics.</p>

 <div>
   <a className="btn btn-primary home__register-btn" href="/creatediary">  Create a New Diary
</a>
 </div>
</div>
<div className="home__core-values">
 <div className="container">
   <div className="row home__inner">
     <div className="col-sm-4">
       <div>
         <img className="home__core-values-img" src="https://monkkee.com/assets/private-479301c8e1f4aa7f3f0e9307e8867eeb87e7ffcc0b1959ab66cc7c4d88234a04.svg" alt="" />
       </div>
       <h3>  Secret and private
</h3>
         The use of Diary MAnager is private only. There is no feature to make entries publicly viewable. This ensures that your secret diary remains safe from prying eyes. Just like in a good old paper diary.

     </div>
     <div className="col-sm-4">
       <div>
         <img className="home__core-values-img" src="https://monkkee.com/assets/lock-05a8e247cb7342c7778ea3353d54144f315f6b00a7294c6fb86b7bfb5aff7474.svg" alt="" />
       </div>
       <h3>  Secure and encrypted
</h3>
         To guarantee you ultimate security, Diary uses a comprehensive security concept. Client-side encryption, AES, SSL – find out more about <a href="#security">security</a> and why Diary is unique.

     </div>
     <div className="col-sm-4">
       <div>
         <img className="home__core-values-img" src="https://monkkee.com/assets/cloud-31a0baa070193e0146a95a9018b4b967efa4c8003a5005ee99a20adf6e1647fb.svg" alt="" />
       </div>
       <h3>  Access via Internet
</h3>
         To use Diaryall you need is a computer with Internet access. Whether you are at home or on the move – if you have a sudden urge to write, you can access your data at any time and from anywhere.

     </div>
   </div>
 </div>
</div>
<div id="features" className="home__features">
 <div className="home__inner">
   <h2 className="home__features-heading home__section-heading">  diarie's features - no bells and whistles, plain functionality
</h2>
   <div className="container">
     <div className="row">
       <div className="col-sm-6 home__features-left-col">
         <ul className="home__features-ul">
             <li>Free use</li>
 <li>Calendar</li>
 <li>Create your own categories using tags</li>
 <li>Search within entries</li>
 <li>Export feature</li>

         </ul>
       </div>
       <div className="col-sm-6 home__features-right-col">
         <ul className="home__features-ul">
             <li>Convenient editor</li>
 <li>Insert images</li>
 <li>Automatic saving</li>
 <li>Automatic logout in case of inactivity</li>
 <li>Print view</li>

         </ul>
       </div>
     </div>
   </div>
 </div>
</div>
<div id="security" className="home__security">
 <div className="container">
   <div className="row home__inner">
     <h2 className="home__section-heading">  Secure end-to-end encryption
</h2>
       <p>
   The free online diary Managers offers you the safest place for your thoughts. A comprehensive security concept protects your content against unauthorized access. And this is how it works:</p>
 <p>
   As soon as content created by you is saved, it is directly encrypted on your computer, i.e. even before its leaves your device and is transferred to the server via the Internet. With this end-to-end encryption approach monkkee set themselves apart from other competitors who do not encrypt user data at all or only provide server-side encryption.</p>

     <div className="home__security-encryption-process">
         <img src="https://monkkee.com/assets/encryption_process_en-70f4eb6007cdffe5da23e056378ce2ebe589f4563a06c3e2f9a38eaaf93dfc3b.svg" alt="Encryption process" />

     </div>
     <a className="hide-on-click" data-toggle="collapse" href="#collapse-security">  More about security
&nbsp;<span className="glyphicon glyphicon-menu-down"></span></a>
     <div className="collapse" id="collapse-security">
         <p>
   The decryption key for monkkee is your password, which you must enter each time you log on. The encryption method used is AES-256. Initially developed for military purposes, this highly secure encoding technology is nowadays used by governments, institutions and banks to encrypt top-secret information.</p>
 <p>
   The encrypted data is transferred directly between your device and the server. For this purpose, monkkee uses an additional SSL-based encryption technology. That way, no one can eavesdrop on the transfer.</p>
 <p>
   Only you can decrypt your entries now, since you are the only one to know the password. This means that even the system administrators of monkkee cannot read your data. It also means that it is not possible to hand data over to government authorities, as is currently being discussed in the media. As a side effect, it is not possible to restore your password in case you forget it. So always remember your password – there is no spare key!</p>
 <p>
   If you have any further questions regarding security, check out our <a href="https://monkkee.hesk.com/knowledgebase.php?language=English&amp;category=4">FAQs</a>.</p>

     </div>
   </div>
 </div>
</div>
</div>

<footer>
<div className="footer-wrapper">

<div className="social-wrapper">
    <div className='social-links'>
        <ul>
            <li>
                <a href="https://www.instagram.com/" title="Instagram">
                    <img src={instagram} alt='Instagram'/>                       
                </a>
            </li>
            <li>
                <a href="https://in.linkedin.com/" title="Linkedin">
                    <img src={linkedin} alt='Linkedin'/>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/login" title="Twitter">
                    <img src={twitter} alt='Twitter'/>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/#" title="Youtube">
                    <img src={youtube} alt='YouTube'/>
                </a>
            </li>
            <li>
                <a href="https://github.com/" title="GitHub">
                    <img src={github} alt='GitHub'/>
                </a>
            </li>
        </ul>
    </div>
</div>

<div className="footer-columns">
    <div className="footer-links">
        <div className="footer-logo"  >
            <img style={{width:'200px'}}  src={footerlogo} />
        </div>
        <section>
            <h3>Diary Manager</h3>
            <ul>
                <li>
                    <a href="#" title="Free signup">Free signup</a>
                </li>
                
                <li>
                    <a href="#" title="Login">Login</a>
                </li>
                <li>
                    <a href="#" title="Support ">Support</a>
                </li>
                <li>
                    <a href="#" title="Terms & conditions">Terms & conditions</a>
                </li>
                <li>
                    <a href="#" title="Privacy policy">Privacy policy</a>
                </li>
            </ul>
        </section>
        <section>
            <h3>Diaries</h3>
            <ul>
                <li>
                    <a href="#" title="Secret diary">Secret diary</a>
                </li>
                <li>
                    <a href="#" title="Wedding diary">Wedding diary</a>
                </li>
                <li>
                    <a href="#" title="School diary">School diary</a>
                </li>
                <li>
                    <a href="#" title="Health diary">Health diary</a>
                </li>
                <li>
                    <a href="#" title="Food diary">Food diary</a>
                </li>
            </ul>
        </section>
        <section>
            <h3>Journals</h3>
            <ul >
                <li>
                    <a href="#" title="Journal prompts">Journal prompts</a>
                </li>
                <li>
                    <a href="#" title="What is a journal">What is a journal?</a>
                </li>
                <li>
                    <a href="#" title="Reflective journa">Reflective journal</a>
                </li>
                <li>
                    <a href="#" title="Dream journal">Dream journal</a>
                </li>
                <li>
                    <a href="#" title="Five year journa">Five year journal</a>
                </li>
            </ul>
        </section>
        <section>
            <h3>Legal</h3>
            <ul>
                <li>
                    <a href="#" title="Terms and services">
                        Terms
                    </a>
                </li>
                <li>
                    <a href="#" title="Privacy Policy">
                        Privacy
                    </a>
                </li>
                <li>
                    <a href="#" title="Cookies">
                        Cookies
                    </a>
                </li>
                <li>
                    <a href="#" title="Licenses">
                        Licenses
                    </a>
                </li>
                <li>
                    <a href="#" title="Cookies">
                        Contact
                    </a>
                </li>
            </ul>
        </section>
    </div>
   
</div>
<div className="footer-bottom" style={{color:'wheat'}}>
    <div classNameName="footer-description" style={{marginLeft:'30px'}}>
        <h3>Record your most enviable experiences in a diary</h3>
        <p>God watches your actions.</p>
    </div>
    <small  style={{marginRight:'60px'}}>© Vijayaraj MERN Developer <span id="year"></span>, All rights reserved</small>
</div>
</div>
</footer>


   
<div id="back-to-top-container">
 <a className="back-to-top-link" id="scroll-to-top" href="javascript:void(0)" title="back to top">
   <span className="back-to-top-icon glyphicon glyphicon-chevron-left"></span>
 </a>
</div>
</div>
   </>
  )
}


<style>
  

</style>



export default Dashboard;