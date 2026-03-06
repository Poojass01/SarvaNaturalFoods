'use client'
import { useEffect, useState } from 'react'

export default function ProfessionalBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff9ec]/95 via-[#fff2d8]/90 to-[#fff8e1]/85"></div>

      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-6 left-6 w-64 h-64 border-2 border-[#ffd27f]/35 rounded-full"></div>
        <div className="absolute top-32 right-20 w-48 h-48 border border-[#f7c56f]/35 rotate-45"></div>
        <div className="absolute bottom-16 left-1/4 w-32 h-32 border border-[#f4b124]/35 rounded-full"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="opacity-20">
          <defs>
            <linearGradient id="modernGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fcd977" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f3b23c" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <path
            d="M100,300 Q250,150 400,350 T700,200 T900,400"
            stroke="url(#modernGradient1)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {[...Array(15)].map((_, i) => (
        <div
          key={`float-${i}`}
          className="absolute w-2 h-2 bg-[#f2b705]/40 rounded-full animate-float-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}