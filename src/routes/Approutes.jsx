import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'
import Forgetpassword from '../components/Forgetpassword'
import Resetpassword from '../components/Resetpassword'
import Dashboard from '../components/Dashboard'
import Navebar from '../components/Navebar'
import Creatediary from '../components/Creatediary'
import Mydiarys from '../components/Mydiarys'
import Myprofile from '../components/Myprofile'
import EditDiary from '../components/EditDiary'
function AppRoutes() {
  return (
  <Routes>
  
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={ <Login/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/forgetpassword' element={<Forgetpassword/>}/>
  <Route path='/reset-password/:randomString/:expirationTimestamp' element={<Resetpassword/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/navebar' element={<Navebar/>}/>
  <Route path='/creatediary' element={ <Creatediary/>}/>
  <Route path='/mydiarys' element={<> <Navebar/> <Mydiarys/> </>}/>
  <Route path='/profile' element={<> <Navebar/> <Myprofile/> </>}/>
  <Route path='/edit/:id' element={<EditDiary/>}/>
  <Route path='/*' element={<Navigate to = '/login'/>}/>

  

  </Routes>
  )
}

export default AppRoutes;