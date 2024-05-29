import React, { useState } from 'react';
import appleimag from '../assets/apple.png';
import emailimg from '../assets/email.svg';
import googleimg from '../assets/google.png';
import passwordimg from '../assets/password.svg';
import mainimg from '../assets/main.png';
import logo from '../assets/dm new logo 1.png'
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiService';
import { toast } from 'react-toastify';
import '/src/App.css'

function Login() {
  let navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showToast = (provider)=>{
    toast.info(`Login with ${provider} is under development`)
  }

  const existUser = async (e) => {
    e.preventDefault();
    if ( !email || !password) {
        toast.warning('Please fill out all fields');
        return;
      }
    
    setLoading(true);
    try {
      let res = await AxiosService.post('/user/login', {
        email,
        password,
      });
      console.log(import.meta.env.VITE_API_URL);

      console.log('Response:', res);
      if (res.status === 201) {
        toast.success('Login Successfully');
        sessionStorage.setItem('token',res.data.token);
        sessionStorage.setItem('userData', JSON.stringify(res.data.userData));
        navigate('/dashboard');
      }
    } catch (error) {
      setLoading(false);
    
      if (error.response) {
        const { status } = error.response;
        
        if (status === 401) {
          // Unauthorized: Invalid email or password
          toast.error('Invalid password');
        } else if (status === 404) {
          // Not Found: User does not exist
          toast.error('Email does not exist');
        } else {
          // Other errors
          toast.error('An error occurred. Please try again.');
        }
      } else {
        // Network error or other issues
        toast.error('An error occurred. Please try again.');
      }
    }
};

  return (
    <>
      {loading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
      <div className="login-wrapper">
        <div className="login-side">
          <a href="#" title="Logo">
            <img
              className="logo"
              src={logo}
              alt="Logo"
              style={{ width: '260px', height: '150px', marginLeft: '150px', marginTop:"30px" }}
            />
          </a>
          <div className="my-form__wrapper">
            <div className="login-welcome-row">
              <h1>Welcome back !</h1>
              <p>Please enter your details!</p>
            </div>
            <form className="my-form">
              <div className="socials-row" >
                <a onClick={()=>showToast('google')}  title="Use Google">
                  <img src={googleimg} alt="Google" />
                  Log in with Google
                </a>
                <a  onClick={()=>showToast('Apple')} title="Use Apple">
                  <img src={appleimag} alt="Apple" />
                  Log in with Apple
                </a>
              </div>
              <div className="divider">
                <div className="divider-line"></div>
                Or
                <div className="divider-line"></div>
              </div>
              <div className="text-field">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <img alt="Email Icon" title="Email Icon" src={emailimg} />
              </div>

              <div className="text-field">
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password"
                  value={password}
                  title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                  required
                />
                <img alt="Password Icon" title="Password Icon" src={passwordimg} />
              </div>

              <div id='log-pass' style={{ display: 'flex', alignItems: 'center', gap:"5px", marginLeft: '10px', marginBottom: '-10px' }}>
                <input id='cheak'
                  style={{ width: '15px', margin: '-2px 0px 0px 0px' }}
                  type="checkbox"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                />
                <span className='log-sp' id="show-password-text">
                  Show Password
                </span>
                &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span id="log-forget" style={{ cursor: 'pointer' }} onClick={() => navigate('/forgetpassword')}>
                  Forgot Password?
                </span>
              </div>

              <input type="submit" id='log-btn' className="my-form__button   btn-primary " onClick={(e)=>existUser(e)} value="Login" />
              <div className="my-form__actions" id="log-det">
                <div className="my-form__signup" id="create-ac">
                  <a href="#"  title="Create Account" onClick={() => navigate('/signup')}>
                    Create Account
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="info-side">
          <img src={mainimg} alt="Mock" className="mockup" style={{ width: '300px' }} />
          <div className="welcome-message">
            <h2>Diary Manager! 👋</h2>
            <p>Write a diary, imagining that you are trying to make an old person jealous.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;