import axios from 'axios';

import React, { useEffect,  useState } from 'react'


import {  useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet';



export default function Detalis() {
   let {id}=useParams();
    
    
    const [itemDetalis,setitemDetalis]=useState({})
  ;
 
    async function getDetalis() {
         let respons= await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/game",{
             headers: {
                 'X-RapidAPI-Key': '203ff73b85msh61117d18aa92021p14e2f1jsn9fd78d7f26e8',
                 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
               },
               params: {id: id},
         })
         setitemDetalis(respons.data)
         console.log(respons.data)
     }
   
 
 
      useEffect(()=>{
         getDetalis()
   },[])
   
   
  

  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Detalis</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className='container   mt-5'>
        <div className="row ">
            <div className="col-md-4 bvb">
              <div className='bvb'>
              <img className='w-100' src={itemDetalis.thumbnail} alt="" />
            <div className="row ">
              <div className='col-3 ms-2 col-lg-2 mr-2'>
                <span className='btn color btn-dark  mb-3 mt-3'>FREE</span>
              </div>
              <div className="col mt-3">
                <a type='button' className='fes btn btn-primary btn-ftg-blue  p-2 btn-block ' target="_blank" href={itemDetalis.game_url}>
                  PLAY NOW
                  <i className='mx-2 fas fa-sign-out-alt'></i>
                </a>
              </div>
              <div className="col mt-3">
                <a type='button' className='fes btn btn-primary btn-ftg-blue  p-2 btn-block ' target="_blank" href={itemDetalis.freetogame_profile_url}>
               Game Profil 
                  <i className='mx-2 fas fa-sign-out-alt'></i>
                </a>
              </div>

            </div>
              </div>
        {/* <div className='btn-group btn-block mb-3 text-center   bg-dark shadow-sm rounded'>
        <Link  className="likeButton  mx-2 text-center text-white col-3 py-2 btn-dark2 active"  onClick={seeMore} > 
        <div className="text-success"><i className="far fa-smile fa-lg text-sucess"></i></div> 
        <div className="count mb-n2 text-muted"></div>19 <span class="title small">LIKE</span> </Link>
        <Link  className="likeButton mx-2 text-center text-white col-3 py-2 btn-dark2 active"  onClick={seeMore} > 
        <div className="text-success"><i className="far fa-smile fa-lg text-sucess"></i></div> 
        <div className="count mb-n2 text-muted"></div>19 <span class="title small">LIKE</span> </Link>
        <Link  className="likeButton  text-center text-white col-3 py-2 btn-dark2 active"  onClick={seeMore} > 
        <div className="text-success"><i className="far fa-smile fa-lg text-sucess"></i></div> 
        <div className="count mb-n2 text-muted"></div>19 <span class="title small">LIKE</span> </Link>
        <Link  className="likeButton mx-2 text-center text-white col-3 py-2 btn-dark2 active"  onClick={seeMore} > 
        <div className="text-success"><i className="far fa-smile fa-lg text-sucess"></i></div> 
        <div className="count mb-n2 text-muted"></div>19 <span class="title small">LIKE</span> </Link>
        </div> */}
 

            </div>
            
          
            <div className="col-md-8 color">
              <div>
              <h1>{itemDetalis.title}</h1>
                <h2 className='h5 '>About {itemDetalis.title}</h2>
                <p>{itemDetalis.description}</p>
              </div>
              <h3 className='mt-5'>Additional Information</h3>
                  <div className='text-muted mt-n2'>
                    <i className='fas fa-info-circle mx-2 mr-2'></i>
                    Please note this free-to-play game may or may not offer optional in-game purchases.
                  </div>
                  <hr class="mt-2 mb-3"></hr>
              <div className='row mb-3'>
                <div className="col-6 col-md-4">
                <span class="text-muted">Title <br /></span>
                <p>{itemDetalis.title}</p>
                
                </div>
                <div className="col-6 col-md-4">
                <span class="text-muted">Developer <br /></span>
                <p>{itemDetalis.developer}</p>
                
                </div>
                <div className="col-6 col-md-4">
                <span class="text-muted">Publisher <br /></span>
                <p>{itemDetalis.publisher}</p>
                
                </div>
                <div className="col-6 col-md-4">
                <span class="text-muted">Release Date <br /></span>
                <p>{itemDetalis.release_date}</p>
                
                </div>
                <div className="col-6 col-md-4">
                <span class="text-muted">Genre <br /></span>
                <p>{itemDetalis.genre}</p>
                
                </div>
                <div className="col-6 col-md-4">
                <span class="text-muted">Platform <br /></span>
                <p>{itemDetalis.platform=='Windows'? <i className='fab mx-2 fa-windows text-muted'></i>:
     <i className='fas fa-window-maximize text-muted'></i>}{itemDetalis.platform}</p>
                
                </div>
                
              </div>
        
                <h3 class="font-weight-dark text-lg-left mt-5 mb-0">Minimum System Requirements <span className="small text-muted">({itemDetalis.platform})</span> </h3>
                <hr className="mt-2 mb-3 text-muted"></hr>
                <div className="row mb-5 mx-3">
                <div className="col-sm-6 ">
                <span class="text-muted">OS <br /></span>
                <p>{itemDetalis.minimum_system_requirements?.os}</p>
                
                <span class="text-muted">Memory <br /></span>
                <p>{itemDetalis.minimum_system_requirements?.memory}</p>

                <span class="text-muted">Storage <br /></span>
                <p>{itemDetalis.minimum_system_requirements?.storage}</p>
                </div>
                <div className="col-sm-6 ">
                <span class="text-muted">processor <br /></span>
                <p>{itemDetalis.minimum_system_requirements?.os}</p>
                
                <span class="text-muted">Graphics <br /></span>
                <p>{itemDetalis.minimum_system_requirements?.graphics}</p>

                <span class="text-muted">Additional Notes <br /></span>
                <p>Specifications may change during development</p>
                </div>
                </div>
                
                <h4 className='mx-4'>{itemDetalis.title}  Screenshots</h4> 
              
            
       
         
            </div>
            <div className='row d-flex justify-content-end'>
            {itemDetalis?.screenshots?.map((img,index)=><div key={index} className="vvvv" >
<img className='w-100 m-2' src={img["image"]} alt="" />
        </div>)}
            </div>
    
       
        </div>
   
   
        
      </div>
    </>
  )
}

