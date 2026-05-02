import React from 'react'
import CategoriesLists from './CategoriesLists'

const Categories = () => {
  return (
    <div>
       <div>
     <div className='container mx-auto text-center mt-10 '>
        <h4 className='text-primary text-2xl'><img src="/title-icon.svg" height={100} alt="" className='inline'/> Top Categories</h4>
        <img src="/titleLink.svg" alt="" className='inline' />
         </div>
         <CategoriesLists/>
    </div>
    </div>
  )
}

export default Categories
