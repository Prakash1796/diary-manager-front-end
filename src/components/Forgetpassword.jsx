
import React, { useState } from 'react'
import appleimag from '../assets/apple.png'
import emailimg from '../assets/email.svg'
import googleimg from '../assets/google.png'
import { useNavigate } from 'react-router-dom'
import AxiosService from '../utils/ApiService'
import { toast } from 'react-toastify'
import '/src/App.css'

function Forgetpassword() {
    let navigate = useNavigate()
    let [loading,setLoading ] = useState(false)
   const [email,setEmail] = useState("")
    const sendMail = async(e)=>{
        e.preventDefault()
        if ( !email ) {
            toast.warning('Please enter your Register Email');
            return;
          }
        
        setLoading(true)
        try {
            let res = await  AxiosService.post('/user/forgetpassword',{
                email,
            })
            if(res.status==201)
            {
                toast.success("Password Reset link sent to your Email.Please check the email")
            }
        } catch (error) {
            console.log(error)
            toast.error("Invalid Email")
        }
        finally{
          setLoading(false)
        }
    }
    const showToast = (provider)=>{
        toast.info(`Login with ${provider} is under development`)
      }
    

  return (
   <>
   {loading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
   <div className='container-fluid'  > 
   <div className="login-side"  style={{marginTop:"-120px",}} >
               
                <div className="my-form__wrapper" id='forget-full' style={{paddingBottom:"20px"}}>
                    <div style={{textAlign:"center"}} className="login-welcome-row">
                        <h1 >  <b>Forget Password </b></h1>
                        <p> Enter your email to recievenpmnp reset link</p>
                    </div>
                    <form className="my-form">
                        <div className="socials-row">
                            <a
                               onClick={()=>showToast('Google')}
                                title="Use Google"
                            >
                                <img src={googleimg} alt="Google"/>
                                Log in with Google
                            </a>
                            <a
                             onClick={()=>showToast('Apple')}
                                title="Use Apple"
                            >
                                <img src={appleimag} alt="Apple"/>
                                Log in with Apple
                            </a>
                        </div>
                        <div className="divider">
                            <div className="divider-line"></div>
                            Or
                            <div className="divider-line"></div>
                        </div>
                        <div className="text-field">
                            <label for="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                            <img
                                alt="Email Icon"
                                title="Email Icon"
                                src={emailimg}
                            />
                        </div>
                         
                         
                        <input type="submit" className="my-form__button btn-primary" onClick={(e)=>sendMail(e)} value="Send link"/>
                        <div className="my-form__actions">
                            <div className="my-form__signup" id='forget-log' style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                                <a href="#" title="Create Account" onClick={()=>navigate('/signup')} >
                                    Create Account
                                </a>
                    
                             
                                <a href="#" title="Login" onClick={()=>navigate('/login')} >
                                    Login
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

   </div>
   </>
  )
}

export default Forgetpassword;