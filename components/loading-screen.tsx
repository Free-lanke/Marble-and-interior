'use client'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 500)
          return 100
        }
        // Accelerate progress as it gets closer to 100
        const increment = prev < 60 ? 2 : prev < 90 ? 5 : 10
        return Math.min(prev + increment, 100)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (isComplete) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a1a1a] transition-opacity duration-700 ${
        progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-20 md:mb-24 text-center px-5">
        <h1 
          className="text-[#efeae1] text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw]"
          style={{ 
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: '0.9'
          }}
        >
          My <span style={{ 
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontWeight: 500
          }}>Catchy</span>
        </h1>
        <p className="mt-6 md:mt-8 text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-[#efeae1]/60 font-sans">
          Interiors — Copenhagen
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-72 md:w-96 px-5">
        <div className="h-[1px] bg-[#efeae1]/20 overflow-hidden">
          <div
            className="h-full bg-[#efeae1] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 text-center text-xs md:text-sm text-[#efeae1]/60 font-mono tabular-nums">
          {progress}%
        </div>
      </div>
    </div>
  )
}
