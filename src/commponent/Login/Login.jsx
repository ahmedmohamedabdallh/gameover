import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import imgee from '../img/logo.png'
import { baseUrl } from '../../utilits/basUrl';

export default function Login({saveUserData}) {
  let navigat =useNavigate();
  const[erorr,seterorr]=useState('')
  const[erorrlist,seterorrlist]=useState([])
  const[islogin,setislogin]=useState(false)
const[user,setuser]=useState({
  
  email:'',
  password:''
  
})
function getUserData(e) {
  let myUser={...user};
  myUser[e.target.name]=e.target.value;
  setuser(myUser);
  
}
 async function sendData() {
  let{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,user)
  if (data.message=='success') {
    localStorage.setItem("userToken",data.token)
    saveUserData();
    setislogin(false)
    navigat('/')
  }else{
    seterorr(data.message)
    setislogin(false)
  }
}
  function submitForm(e) {
    setislogin(true)
    e.preventDefault();
    let validation=validateRegaster()
    if(validation.error){
      setislogin(false)
      seterorrlist(validation.error.details)
    }else{
      sendData();
    }
    
    
  }
   function validateRegaster() {
   let schema= Joi.object({
      
    email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
    password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/).required(),
    });
  return  schema.validate(user,{abortEarly:false})
  }




  return (
    <>
    <div className='container text-centet shadow mt-5 mad '>
        <div className='row '>
        <div  className="col-md-6 d-none d-lg-block bg-register-image">

</div>
            <div className="col-md-6 gray   text-center">
            {erorrlist.map((err,index)=>{
          if (err.context.label === 'password') {
            return <div key={index} className="alert alert-danger my-2">password invalid </div>
          }
          else{
            return <div key={index} className="alert alert-danger my-2">{err.message}</div>
          }
        })}
          {erorr.length>0?<div className="alert alert-danger my-2">{erorr}</div>:''}

                <div> <img className='w-25' src={imgee} alt="" />
                <h1 className='text-muted'>Log in to GameOver</h1>
                </div>
           
            
            <form className='m-4'onSubmit={submitForm}  >


<input onChange={getUserData} placeholder='Email'  type="email" className='form-control my-input my-2' name='email' id='email' />


<input onChange={getUserData} placeholder='Password'  type="password" className='form-control my-input my-2' name='password' id='password' />

<button type='submit' className='w-100   btn btn-secondary'>
  {islogin==true?<i className='fas fa-spinner fa-spin'></i>:'Login'}
   
</button>
</form>
            </div>
           
        </div>


    </div>
    </>
  )
}
