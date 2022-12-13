import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Offline } from 'react-detect-offline'
import {  createHashRouter, Route, RouterProvider } from 'react-router-dom'
import Action from './commponent/Action/Action'
import Actionrpg from './commponent/Actionrpg/Actionrpg'
import All from './commponent/All/All'
import Alphabetical from './commponent/Alphabetical/Alphabetical'
import Battleroyale from './commponent/Battleroyale/Battleroyale'
import Bc from './commponent/Bc/Bc'
import Browser from './commponent/Browser/Browser'
import Categories from './commponent/Categories/Categories'
import Dess from './commponent/Dess/Dess'
import Detalis from './commponent/Detalis/Detalis'
import Fantasy from './commponent/Fantasy/Fantasy'
import FFF from './commponent/FFF'
import Flight from './commponent/Flight/Flight'
import Home from './commponent/Home/Home'
import Joinfree from './commponent/Joinfree/Joinfree'
import Layout from './commponent/Layout/Layout'
import Login from './commponent/Login/Login'
import Openworld from './commponent/Openworld/Openworld'

import Platform from './commponent/Platform/Platform'
import Popularity from './commponent/Popularity/Popularity'

import ProdectedRoute from './commponent/ProdectedRoute/ProdectedRoute'
import Racing from './commponent/Racing/Racing'
import Relasedata from './commponent/Relasedata/Relasedata'
import Relevance from './commponent/Relevance/Relevance'
import Social from './commponent/Social/Social'

import Sortby from './commponent/Sortby/Sortby'
import Sports from './commponent/Sports/Sports'
import Zombie from './commponent/Zombie/Zombie'
import Shooter from './commponent/Shooter/Shooter'

export default function App() {
 useEffect(()=>{
  if (localStorage.getItem("userToken")!==null) {

    saveUserData()
  }
 },[])
 
const[userData,setuserData]=useState(null)
function saveUserData() {
  let x=localStorage.getItem("userToken")
  let token=jwtDecode(x)
  setuserData(token)
}
  let routers =createHashRouter([
    {path:'/',element:<Layout setuserData={setuserData} userData={userData}/>,children:[
      {path:'all',element: <ProdectedRoute><All/></ProdectedRoute> },
      {path:'categories',element:<Categories/>,children:[
        { path:'racing',element:<ProdectedRoute><Racing/></ProdectedRoute> },
        { path:'sports',element:<ProdectedRoute><Sports/></ProdectedRoute> },
        {path:'social',element:<ProdectedRoute><Social/></ProdectedRoute> },
        {path:'shooter',element:<ProdectedRoute><Shooter/></ProdectedRoute> },
        {path:'open-world',element:<ProdectedRoute><Openworld/></ProdectedRoute> },
        {path:'zombie',element:<ProdectedRoute><Zombie/></ProdectedRoute> },
        {path:'fantasy',element:<ProdectedRoute><Fantasy/></ProdectedRoute> },
        {path:'action-rpg',element:<ProdectedRoute><Actionrpg/></ProdectedRoute> },
        {path:'action',element:<ProdectedRoute><Action/></ProdectedRoute> },
        {path:'flight',element:<ProdectedRoute><Flight/></ProdectedRoute> },
        {path:'battle-royale',element:<ProdectedRoute><Battleroyale/></ProdectedRoute> },
    
        
      ] },
      {path:'joinfree',element:<Joinfree/> },
      {path:'fff',element:<FFF/> },
      {index:true,element: <ProdectedRoute><Home/></ProdectedRoute>},
      {path:"detalis/:id",element: <ProdectedRoute><Detalis/></ProdectedRoute>},
      {path:'login',element:<Login saveUserData={saveUserData}/>},
      {path:'platform',element:<Platform/>,children:[
        { path:'bc',element:<ProdectedRoute><Bc/></ProdectedRoute> },
        {path:'browser',element:<ProdectedRoute><Browser/></ProdectedRoute> },
      ]},
      {path:'sortby',element:<Sortby/>,children:[
        { path:'release-date',element:<ProdectedRoute><Relasedata/></ProdectedRoute> },
        {path:'popularity',element:<ProdectedRoute><Popularity/></ProdectedRoute> },
        {path:'alphabetical',element:<ProdectedRoute><Alphabetical/></ProdectedRoute> },
        {path:'relevance',element:<ProdectedRoute><Relevance/></ProdectedRoute> },
        
      ]}
    ]}
  ])
  return (
    <>
    <Offline><Dess/></Offline>
    <RouterProvider router={routers}/>
    </>
  )
}
