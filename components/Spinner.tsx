'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function PageLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Route change hote hi loader show
    setLoading(true)

    // Thoda delay ke baad hide (static page turant render ho jata hai)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // duration adjust kar sakti hain

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  if (!loading) return null

  return (
<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white backdrop-blur-sm">
  <div className="flex flex-col items-center gap-3">
    <div className="relative flex h-35 w-35 items-center justify-center">
      {/* Spinning Ring */}
      <div className="absolute h-full w-full animate-spin rounded-full border-4 border-gray-200 
      border-t-[#4A34FF]" />
      
      {/* Logo in center */}
      <img src="/logo.svg" alt="" className="h-20 w-20" />
    </div>
  </div>
</div>
  )
}