"use client"

import { useEffect, useRef } from "react"

export default function FlowingGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number>(0)
  const time = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    // Create gradient animation
    const animate = () => {
      time.current += 0.005
      
      // Clear canvas with slight fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Create multiple blobs that move around
      for (let i = 0; i < 5; i++) {
        const size = Math.random() * 300 + 100
        
        // Position based on time and mouse
        const x = canvas.width / 2 + 
                 Math.sin(time.current + i * 0.5) * canvas.width * 0.4 + 
                 (mousePosition.current.x - canvas.width / 2) * 0.1
        
        const y = canvas.height / 2 + 
                 Math.cos(time.current + i * 0.7) * canvas.height * 0.3 +
                 (mousePosition.current.y - canvas.height / 2) * 0.1
        
        // Create radial gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size)
        
        // Alternate between the two colors
        if (i % 2 === 0) {
          gradient.addColorStop(0, "rgba(202, 73, 180, 0.3)")
          gradient.addColorStop(1, "rgba(202, 73, 180, 0)")
        } else {
          gradient.addColorStop(0, "rgba(86, 98, 234, 0.3)")
          gradient.addColorStop(1, "rgba(86, 98, 234, 0)")
        }
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
      
      animationFrameId.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    
    handleResize()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none"
    />
  )
}
