import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Game from '../Game/Game'

import Spinner from '../Spinner/Spinner'
import _ from "lodash"
import { Helmet } from 'react-helmet'
export default function All() {
  const[allgame,setallgame]=useState([])
  const[more,setmore] = useState(20)

  const seeMore=()=>{
    setmore((prevValue)=>prevValue+20);
  };
    
  async function getallgame() {
    let response= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games `,{
      headers:{
        'X-RapidAPI-Key':
        'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      },
    
    })
    console.log(response.data)
    setallgame(response.data)
    
  }
 
  useEffect(()=>{
    getallgame()
  },[])

 

  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>All game</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    
    {allgame.length>0?<div className="container my-5">
    <div className='row mt-5 '>
    {allgame.slice(0 , more) .map((gam,index)=> <Game key={index}  gam={gam}/>)}
    

    </div>
    <div className='d-flex justify-content-center m-auto'>
   
   <button onClick={seeMore}  className='btn btn-outline-secondary   py-2 pt-1'> More Game<i className='fas fa-angle-right'></i>
   

   </button>
   </div>
    </div>:<Spinner/>}
    
   
   
    
    </>
  )
}


 