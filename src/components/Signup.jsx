import React from 'react';
import appleimag from '../assets/apple.png';
import emailimg from '../assets/email.svg';
import googleimg from '../assets/google.png';
import passwordimg from '../assets/password.svg';
import mainimg from '../assets/main.png';
import logo from '../assets/dm new logo 1.png';
import { useNavigate } from 'react-router-dom';
import userimage from '../assets/user1.png';
import AxiosService from '../utils/ApiService';
import { useState } from 'react';
import { toast } from 'react-toastify';
import '/src/App.css'

function Signup() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let navigate = useNavigate();

  let [userName, setUserName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const showToast = (provider)=>{
    toast.info(`Signup with ${provider} is under development`)
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!userName || !email || !password) {
        toast.warning('Please fill out all fields');
        return;
      }
    
    setLoading(true);
    try {
      let res = await AxiosService.post('/user/signup', {
        userName,
        email,
        password,
      });
      if (res.status === 201) {
        toast.success('User Created Successfully');
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      toast.error('Fill all the details correctly');
    } finally {
      setLoading(false);
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
              style={{ width: '260px', height: '150px', marginLeft: '200px', marginTop:"30px" }}
            />
          </a>
          <div className="my-form__wrapper">
            <div className="login-welcome-row ">
              <h1>Create your account👋</h1>
            </div>
            <form className="my-form">
              <div className="socials-row">
                <a onClick={()=>showToast('Google')} title="Use Google">
                  <img src={googleimg} alt="Google" />
                  Sign up with Google
                </a>
                <a onClick={()=>showToast('Apple')} title="Use Apple">
                  <img src={appleimag} alt="Apple" />
                  Sign up with Apple
                </a>
              </div>
              <div className="divider">
                <div className="divider-line"></div>
                Or
                <div className="divider-line"></div>
              </div>
              <div className="text-field">
                <label htmlFor="text">User Name:</label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="User Name"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                <img alt="Email Icon" title="Email Icon" src={userimage} />
              </div>

              <div className="text-field">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
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
                  value={password}
                  placeholder="Your Password"
                  title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  alt="Password Icon"
                  title="Password Icon"
                  src={passwordimg}
                  style={{ marginBottom: '60px' }}
                />
                <div style={{ display: 'flex' }}>
                  <input
                    style={{ width: '15px' }}
                    type="checkbox"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                  />
                  <span
                    style={{
                      paddingTop: '24px',
                      paddingLeft: '10px',
                    }}
                  >
                    Show Password
                  </span>
                </div>
              </div>

              <input
                type="submit"
                className="my-form__button   btn-primary"
                onClick={handleSignup}
                style={{ marginTop: '0px' }}
                value="Sign up"
              />
              <div className="my-form__actions">
                <div className="my-form__row">
                  <span>Already have account ?</span>
                  <div className="my-form__signup">
                    <a
                      href="#"
                      title="Create Account"
                      onClick={() => navigate('/login')}
                      style={{ marginRight: '165px' }}
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="info-side " style={{ marginTop: '220px' }}>
          <img src={mainimg} alt="Mock" className="mockup" style={{ width: '300px' }} />
          <div className="welcome-message">
            <h2>Diary Manager! 👋</h2>
            <p>Each new day is a blank page in the diary of your life.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;