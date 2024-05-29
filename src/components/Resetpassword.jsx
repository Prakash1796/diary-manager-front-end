import React, { useState } from 'react';
import appleimag from '../assets/apple.png';
import googleimg from '../assets/google.png';
import passwordimg from '../assets/password.svg';
import { useNavigate, useParams } from 'react-router-dom';
import AxiosService from '../utils/ApiService';
import { toast } from 'react-toastify';
import '/src/App.css'

function Resetpassword() {
  const navigate = useNavigate();
  const { randomString, expirationTimestamp } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (!newPassword) {
      toast.warning('Enter your new password and update it');
      return;
    }

    setLoading(true);
    try {
      const res = await AxiosService.post(`/user/reset-password/${randomString}/${expirationTimestamp}`, {
        newPassword: newPassword,
      });

      if (res.status === 201) {
        toast.success('Your Password is Successfully updated');
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error('Invalid token or token expired');
      } else {
        console.error(error);
        toast.error('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };
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
      <div className="container-fluid" id="reset-full">
        <div className="login-side">
          <div className="my-form__wrapper" id="reset-det" style={{ marginTop: '-120px', paddingBottom: '25px' }}>
            <div className="login-welcome-row" style={{ textAlign: 'center' }}>
              <h1> Reset Password </h1>
              <p>Enter your new password</p>
            </div>
            <form className="my-form" >
              <div className="socials-row">
                <a onClick={()=>showToast('Google')} title="Use Google">
                  <img src={googleimg} alt="Google" />
                  Log in with Google
                </a>
                <a onClick={()=>showToast('Apple')} title="Use Apple">
                  <img src={appleimag} alt="Apple" />
                  Log in with Apple
                </a>
              </div>
              <div className="divider">
                <div className="divider-line"></div>
                Or
                <div className="divider-line"></div>
              </div>
              <div className="text-field" style={{marginBottom:'-40px'}}>
                <label htmlFor="password">New Password:</label>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="newPassword"
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Your Password"
                  value={newPassword}
                  required
                />
                <img style={{ position: 'absolute', bottom: '60px' }} alt="Password Icon" title="Password Icon" src={passwordimg} />
                <input
                  id="cheak"
                  style={{ width: '15px',bottom:'10px', position:"relative" }}
                  type="checkbox"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                />
                &nbsp;
                <span className="log-sp" id="show-password-text" style={{ position: 'absolute', bottom: '30px' }}>
                  Show Password
                </span>
              </div>
              <input type="button" className="my-form__button   btn-primary" onClick={updatePassword} value="Update Password" />
              <div className="my-form__signup" id="rest-log">
                <a href="#" title="Login" onClick={() => navigate('/login')}>
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resetpassword;