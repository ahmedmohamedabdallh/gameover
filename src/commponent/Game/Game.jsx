

import { Link } from 'react-router-dom'


export default function Game({gam }) {
   
  
    
  return (
    <>
   
     <div  className='col-md-3  '>
      <div>
   <Link  to={`/detalis/${gam.id}`}>
   <div className='game card mb-4   grow shadow rounded  '>
 <div className="img ">
   <img className='w-100' src={gam.thumbnail} alt="" />
 </div>
 <div>
 <div className="gambody d-flex justify-content-between p-3 align-items-center ">
   <h4 className='text-muted text-truncate '>{gam.title .split(' ').slice(0,2).join(' ')}</h4>
   <span className='float-right px-2 py-2   badge bage-ftg'>FREE</span>
 </div>
 <div className='justify-content-start text-truncate mx-2 text-muted'>
 <p>{gam.short_description.split(' ').slice(0,3).join(' ')}</p>
 </div>
 <div className='d-flex justify-content-between align-items-center mb-2  '>
   <i className='fas fa-plus-square mx-3'></i>
   <div className='d-flex justify-content-between me-2 align-items-center'>
     <span className='nbnb badge badge-secondary text-dark badge-gener me-2 '>Shooter</span>
     {gam.platform=='PC (Windows)'? <i className='fab fa-windows text-muted'></i>:
     <i className='fas fa-window-maximize text-muted'></i>}
    
   </div>

 </div>
 </div>

</div>
</Link>
   </div>
   
   
   
   </div>
    </>
  )
}
