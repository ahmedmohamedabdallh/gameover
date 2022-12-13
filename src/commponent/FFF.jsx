

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function FFF() {
    const [itemDetalis,setitemDetalis]=useState({})
   async function getDetalis() {
        let respons= await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/game",{
            headers: {
                'X-RapidAPI-Key': '203ff73b85msh61117d18aa92021p14e2f1jsn9fd78d7f26e8',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              },
              params: {id: 523},
        })
        setitemDetalis(respons.data)
    }
  


     useEffect(()=>{
        getDetalis()
  },[])
  return (
    <>
      <div className='container'>
        <div className="row">
            <div className="col-md-3">
            <img className='w-100' src={itemDetalis.thumbnail} alt="" />

            </div>
            <div lassName="col-md-9">
                <h2>{itemDetalis.title}</h2>
            </div>
            
        </div>
        
      </div>
    </>
  )
}
