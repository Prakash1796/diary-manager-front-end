import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function useLogout() {
    let navigate = useNavigate()
  return ()=>{
    sessionStorage.clear()
    toast.success("user Logout successfull")
    navigate('/home')
  }
   
  
}

export default useLogout;