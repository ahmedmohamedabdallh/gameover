import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Game from '../Game/Game';

export default function Racing() {
    const[allgame,setallgame]=useState([])
    const[more,setmore] = useState(20)

    const seeMore=()=>{
      setmore((prevValue)=>prevValue+20);
    };
 
   
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',

        params: {category: "racing"},
        headers: {
          'X-RapidAPI-Key': '203ff73b85msh61117d18aa92021p14e2f1jsn9fd78d7f26e8',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      
     async function getgam() {
      let {data}= await axios.request(options)
       
        setallgame(data)
      }
       useEffect(()=>{
        getgam()
    },[])
  
  return (
    <>
      <div className="container my-5">
    <div className='row mt-5 '>
    {allgame.slice(0 , more) .map((gam,index)=> <Game key={index}  gam={gam}/>)}
    

    </div>
    <div className='d-flex justify-content-center m-auto'>
   
   <button onClick={seeMore}  className='btn btn-outline-secondary   py-2 pt-1'> More Game<i className='fas fa-angle-right'></i>
   

   </button>
   </div>
    </div>
    </>
  )
}
