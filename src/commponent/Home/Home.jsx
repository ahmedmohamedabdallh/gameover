import axios ,{ Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Offline,  } from "react-detect-offline";
import Dess from '../Dess/Dess';
import Spinner from '../Spinner/Spinner';
import { Helmet } from 'react-helmet';

export default function Home() {

  
const[games,setgame]=useState([]);
 async function game() {
    let response= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games `,{
      headers:{
        'X-RapidAPI-Key':
        'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      },
    
    })
    console.log(response.data)
    setgame(response.data)
  }
 
  useEffect(()=>{
    game();
  }
  ,[])
  return (
    <>
 <Offline><Dess/></Offline>
 <Helmet>
                <meta charSet="utf-8" />
                <title>Home page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    {games.length>0? <>  <div className='jumborton'>
      <div className="container text-center">
        <h1>Find & track the best<span className='blue'>free-to-play</span>games!</h1>
        <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>

        <p ><Link _ngcontent-dya-c8="" role="button" className="btn btn-outline-secondary btn-md ml-0" to="/all">Browse Games</Link></p>
      </div>

    </div>

<div  className="row g-3   ">
 {games.slice(0,3).map((gam,index)=> <div key={index} className="col-md-4 ">
 <Link  to={`/detalis/${gam.id}`}>
  <div className='game card mb-4 m-2 grow shadow rounded  '>
  <div className="img ">
    <img className='w-100' src={gam.thumbnail} alt="" />
  </div>
  <div className="gambody d-flex justify-content-between align-items-center p-3">
    <h4 className='text-muted'>{gam.title}</h4>
    <span className='float-right px-2 py-2 badge bage-ftg'>FREE</span>
  </div>
</div>
</Link>
  </div>)}
  

</div>
    

    </>:<Spinner/>}
   
    </>
  )
}
