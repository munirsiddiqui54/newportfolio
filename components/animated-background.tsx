"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  direction: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    // Initialize particles
    const initParticles = () => {
      particles.current = []
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000)
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: Math.random() > 0.5 ? "#ca49b4" : "#5662ea",
          alpha: Math.random() * 0.5 + 0.1,
          direction: Math.random() * Math.PI * 2
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      particles.current.forEach((particle, index) => {
        // Draw particle
        ctx.globalAlpha = particle.alpha
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Interaction with mouse
        const dx = mousePosition.current.x - particle.x
        const dy = mousePosition.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          particle.speedX += Math.cos(angle) * 0.2
          particle.speedY += Math.sin(angle) * 0.2
          particle.alpha = Math.min(particle.alpha + 0.02, 0.8)
          particle.size = Math.min(particle.size + 0.1, 8)
        }
        
        // Apply some damping
        particle.speedX *= 0.98
        particle.speedY *= 0.98
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
        
        // Gradually return to normal size and alpha
        particle.size = Math.max(particle.size * 0.99, Math.random() * 5 + 1)
        particle.alpha = Math.max(particle.alpha * 0.99, Math.random() * 0.5 + 0.1)
      })
      
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
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  )
}
