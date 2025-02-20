"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-white text-white shadow-lg z-[9999] transition-all duration-300 ease-in-out 
        ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"} 
        hover:bg-secondary hover:scale-95`}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <Image src="/scroll-up.svg" width={22} height={41} alt="scroll up" />
    </button>
  )
}

export default ScrollButton
