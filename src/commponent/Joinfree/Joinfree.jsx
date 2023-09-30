import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Joinfree() {
let navigat =useNavigate();
  const[erorr,seterorr]=useState('')
  const[erorrlist,seterorrlist]=useState([])
  const[islogin,setislogin]=useState(false)
const[user,setuser]=useState({
  name:'',
  email:'',
  password:'',
  rePassword:''
 
})
function getUserData(e) {
  let myUser={...user};
  myUser[e.target.name]=e.target.value;
  setuser(myUser);
  
}
 async function sendData() {
  let{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,user)
  if (data.message=='success') {
    setislogin(false)
    navigat('/login')
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
      name:Joi.string().min(3).max(18).required(),
    email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
    password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/).required(),
    rePassword: Joi.any().valid(Joi.ref('password')).required(),
    });
  return  schema.validate(user,{abortEarly:false})
  }
  
  return (
    <>
   
    <div className="container text-centet shadow mt-5">
<div className='card-body mad'>
        <div className='row mad'>

        <div  className="col-md-6 d-none d-lg-block bg-register-image">

        </div>
        <div className="col-md-6 gray text-center px-2 py-5">
        {erorrlist.map((err,index)=>{
          if (err.context.label === 'password') {
            return <div key={index} className="alert alert-danger my-2">password invalid </div>
          }
          else{
            return <div key={index} className="alert alert-danger my-2">{err.message}</div>
          }
        })}
          {erorr.length>0?<div className="alert alert-danger my-2">{erorr}</div>:''}
          
        <h1 className='h4 text-muted'>Create My Account!</h1>
        <form onSubmit={submitForm} >
   
   <div className='name d-flex '>
   <input onChange={getUserData} placeholder=' Name' type="text" className='form-control myinbut mx-2  my-input my-2' name='name' id='name' />

   
{/* <input onChange={getUserData} placeholder='Last Name'  type="text" className='form-control myinbut mx-2 w-50 my-input my-2' name='last_name' id='last_name' /> */}
   </div>
   
   
   {/* <input onChange={getUserData} placeholder='Age' type="number" className='form-control myinbut my-input my-2' name='age' id='age' /> */}

   
   <input onChange={getUserData} placeholder='Email' type="email" className='form-control myinbut my-input my-2' name='email' id='email' />

   
   <input onChange={getUserData} placeholder='Password' type="password" className='form-control myinbut my-input my-2' name='password' id='password' />
   <input onChange={getUserData} placeholder='rePassword' type="password" className='form-control myinbut my-input my-2' name='rePassword' id='rePassword' />
   <button type='submit' className=' btn btn-secondary w-100'>
    {islogin==true?<i className='fas fa-spinner fa-spin'></i>:'Creat Account'}
       
   </button>
 </form>
        </div>
        </div>
        </div>
    </div>

    </>
  )
}
