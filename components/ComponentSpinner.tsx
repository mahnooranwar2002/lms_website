import { Suspense } from 'react'
// import MyComponent from './MyComponent'
import Home from '@/app/page'
import Navbar from './Navbar'

// Component-level Fallback
function ComponentSpinner() {
  return <div className="p-4 text-center">Loading section...</div>
}

export default function Page() {
  return (
    <div>
     
   
      {/* Component Suspense Wrapper */}
      <Suspense fallback={<ComponentSpinner />}>
    
      </Suspense>
    </div>
  )
}