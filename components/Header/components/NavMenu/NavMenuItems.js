import { navMenu } from "@/utils/data"
import Buttons from "./Buttons"
import Link from "next/link"
import { useState } from "react"
import { shorArrowIcon } from "@/utils/icon"

const NavMenuItems = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [submenuTimeout, setSubmenuTimeout] = useState(null)

  const handleMouseEnter = (index) => {
    if (submenuTimeout) clearTimeout(submenuTimeout)
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredIndex(null)
    }, 300)

    setSubmenuTimeout(timeout)
  }

  return (
    <div className="flex justify-between max-w-screen-xl mx-auto px-10 py-10">
      {/* menu items */}
      <ul className="space-y-3">
        {navMenu.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 w-full relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={item.path}>
              <button
                className={`flex items-center gap-3 ${
                  index === hoveredIndex ? "text-secondary" : ""
                }`}
              >
                {item.menu}{" "}
                {item.subMenu.length > 0 && (
                  <span className="font-thin">{shorArrowIcon}</span>
                )}
              </button>
            </Link>

            {hoveredIndex === index && item.subMenu.length > 0 && (
              <div
                className="flex items-center gap-3 relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <hr className="w-20 border-black" />
                <ul className="absolute left-[90px] -top-3">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.path}>
                        <button className="w-[200px] flex items-start hover:text-secondary">
                          {subItem.menu}
                        </button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Buttons />
    </div>
  )
}

export default NavMenuItems
