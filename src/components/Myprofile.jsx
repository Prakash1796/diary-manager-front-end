
import React, { useEffect,useState } from 'react'
import useLogout from '../hooks/useLogout';


function Myprofile() {
  let logout = useLogout()
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const storedUserData = sessionStorage.getItem('userData');

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);



  return (
    <div className='cardfull' >
<div className="card" style={{marginTop:'100px'}}>
      <div className="banner">
        <svg viewBox="0 0 100 100">
          
          
          {/* Other path elements */}
        </svg>
      </div>
      <div className="menu1">
        <div className="opener">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <h2 style={{textAlign:'center',fontSize:'40px'}} className="name " >{userData.userName}</h2>
      <div style={{textAlign:'center',marginTop:'10px'}} className="title">{userData.email}</div>
      <div className="actions">
        <div>
<h1 style={{textAlign:'center',color:'#ff4500'}}> Diary Manager </h1>
<p style={{fontSize:'15px',textAlign:'center'}}>{userData.createdAt}</p>
        </div>
        <div className="follow-btn">
          <button style={{width:'500px',paddingRight:'150px'}} onClick={logout}  >Delete Account</button>
        </div>
      </div>
      <div className="desc">
        
      </div>
    </div>
      
    </div>
  )
}

export default Myprofile;