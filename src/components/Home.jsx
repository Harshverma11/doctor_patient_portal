import React from 'react'
import {Link,NavLink} from "react-router-dom" 


  function Home() {
  return (
    <>
    <div className='grid gap-1 m-1 sm:grid-cols-3 grid-cols-1'  >
      <div className="rounded-md bg-orange-400 min-h-12 text-center">
         <Link
             to="#"
             
          >
            1
         </Link>
         </div>
      <div  className="rounded-md bg-orange-400 min-h-12 text-center">
      <Link
             to="#"
             
          >
            2
         </Link>
      </div>
      <div  className="rounded-md bg-orange-400 min-h-12 text-center" >
      <Link
             to="#"
             
          >
            3
         </Link>
      </div>

     
    </div>

    <div className='grid gap-1 m-1 sm:grid-cols-3 grid-cols-1'  >
      <div className="rounded-md bg-orange-400 min-h-12 text-center">
         <Link
             to="#"
             
          >
            4
         </Link>
         </div>
      <div  className="rounded-md bg-orange-400 min-h-12 text-center">
      <Link
             to="#"
             
          >
            5
         </Link>
      </div>
      <div  className="rounded-md bg-orange-400 min-h-12 text-center" >
      <Link
             to="#"
             
          >
            6
         </Link>
      </div>

     
    </div>
    <div className='grid gap-1 m-1 sm:grid-cols-3 grid-cols-1'  >
      <div className="rounded-md bg-orange-400 min-h-12 text-center">
         <Link
             to="#"
             
          >
            4
         </Link>
         </div>
      <div  className="rounded-md bg-orange-400 min-h-12 text-center">
      <Link
             to="#"
             
          >
            5
         </Link>
      </div>
      <div  className="rounded-md bg-orange-400 min-h-12 text-center" >
      <Link
             to="#"
             
          >
            6
         </Link>
      </div>

     
    </div>
                   
                    
    </>

    
  )
}
export default Home
  
