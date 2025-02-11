import Link from "next/link"
import Image from "next/image"
import { closeIcon } from "@/utils/icon"
import NavMenuItems from "./NavMenuItems"

const NavMenu = ({ handleMenu, menuRef }) => {
  return (
    <div
      ref={menuRef}
      className="bg-white rounded-b-xl fixed top-0 right-0 left-0 h-screen md:h-[60vh] z-50 flex flex-col"
    >
      {/* Header */}
      <div className="border-b border-gray-500">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image
              src="/logo.png"
              width={126}
              height={54}
              alt="Nautilus Shipping"
              className="w-[100px] md:w-[126px] h-auto"
              priority
            />
          </Link>
          <button onClick={handleMenu} className="text-3xl">
            {closeIcon}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-grow overflow-y-auto">
        <NavMenuItems />
      </div>
    </div>
  )
}

export default NavMenu
