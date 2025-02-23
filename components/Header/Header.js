"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import NavMenu from "./components/NavMenu/NavMenu"
import SearchMenu from "./components/SearchMenu/SearchMenu"
import { motion, AnimatePresence } from "framer-motion"

const Header = ({ logo, hamburger, search }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearchMenu, setOpenSearchMenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (openSearchMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [openSearchMenu])

  const handleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  const handleSearchMenu = () => {
    setOpenSearchMenu((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      {!scrolled && (
        <nav className="border-b border-gray-400 fixed top-0 right-0 left-0 transition-colors duration-300 z-50">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src={logo}
                width={126}
                height={54}
                alt="Nautilus Shipping"
                priority
                className="w-[100px] md:w-[126px] h-auto"
              />
            </Link>

            {/* Menu & Search Icons */}
            <div className="flex items-center gap-3 md:gap-5 transition-all duration-300 ease-in-out">
              <button onClick={handleSearchMenu} className="w-7 md:w-[29px]">
                <Image
                  src={scrolled ? "/search-dark.svg" : search}
                  width={29}
                  height={29}
                  alt="search"
                  className="w-full h-[21px] md:h-auto"
                />
              </button>
              <button onClick={handleMenu} className="w-8 md:w-[33px]">
                <Image
                  src={scrolled ? "/hamburger-dark.svg" : hamburger}
                  width={33}
                  height={25}
                  alt="hamburger-menu"
                  className="w-full h-[20px] md:h-auto"
                />
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Fixed Menu & Search Icons */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }} // Start state (hidden, slightly smaller)
            animate={{ opacity: 1, y: 0, scale: 1 }} // End state (visible, normal size)
            exit={{ opacity: 0, y: -10, scale: 0.95 }} // Exit animation (fade out, shrink slightly)
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
            className="bg-[#F5F5F5] inline-flex justify-center items-center py-2 px-4 md:px-6 
                 rounded-lg shadow-md z-50 fixed top-5 right-5 md:right-20 
                 gap-3 md:gap-5"
          >
            <button onClick={handleSearchMenu} className="w-7 md:w-[29px]">
              <Image
                src={"/search-dark.svg"}
                width={29}
                height={29}
                alt="search"
                className="w-full h-[21px] md:h-auto"
              />
            </button>
            <button onClick={handleMenu} className="w-8 md:w-[33px]">
              <Image
                src={"/hamburger-dark.svg"}
                width={33}
                height={25}
                alt="hamburger-menu"
                className="w-full h-[20px] md:h-auto"
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {openMenu && <NavMenu menuRef={menuRef} handleMenu={handleMenu} />}
      {openSearchMenu && (
        <SearchMenu menuRef={menuRef} handleSearchMenu={handleSearchMenu} />
      )}
    </>
  )
}

export default Header
