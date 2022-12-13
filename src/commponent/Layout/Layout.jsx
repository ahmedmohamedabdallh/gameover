import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout({userData ,setuserData}) {
  let navigat=useNavigate
  function logOut() {
    localStorage.removeItem('userToken')
    setuserData(null)
    navigat('/login')
  }
  return (
   <>
   <Navbar logOut={logOut} userData={userData }/>
   <div className='container'>
   <Outlet/>
   </div>
   
   
   
   </>
  )
}
