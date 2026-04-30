import React from 'react'
import CrousesList from './CrousesList'

const Crouses = () => {
  return (
    <div>
     <div className='container mx-auto text-center mt-10 '>
        <h4 className='text-primary text-2xl'><img src="/title-icon.svg" height={100} alt="" className='inline'/> Top Categories</h4>
        <img src="/titleLink.svg" alt="" className='inline' />
         </div>
         <CrousesList/>
    </div>
  )
}

export default Crouses
