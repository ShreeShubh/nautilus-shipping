import PromiseItem from "./PromiseItem"
import Heading from "./Heading"
import Image from "next/image"
import Link from "next/link"

const NautilusPromise = () => {
  return (
    <div className="min-h-screen py-14 flex flex-col gap-10 md:gap-14">
      <Heading />
      <PromiseItem />
      <div className="max-w-screen-xl mx-auto flex flex-col items-start gap-4 sm:gap-5 w-full px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-light md:leading-[1.25]">
          Safeguard Your Investment, <br className="hidden sm:block" /> Maximize
          Your Returns
        </h3>
        <p className="text-[#6E6E6E] text-base sm:text-xl font-light">
          Contact us for Ship Management, Crew Management, Ship Agency &
          Logistics, <br className="hidden sm:block" />
          Inspection and Commercial Ship Services.
        </p>

        <div className="flex items-start sm:items-center gap-3">
          <Image
            src="/home-page/section-3/icon01.svg"
            width={30}
            height={30}
            alt="call"
          />
          <span className="text-primary text-base sm:text-xl font-semibold">
            +91 44 4684 9999
          </span>
        </div>

        <div className="flex items-start sm:items-center gap-3">
          <Image
            src="/home-page/section-3/icon02.svg"
            width={30}
            height={30}
            alt="location"
          />
          <span className="text-primary text-base sm:text-xl font-semibold">
            hello@nautilusshipping.com
          </span>
        </div>

        <Link href="/contact-us">
          <button className="py-1.5 px-4 mt-3 rounded-lg bg-secondary text-white hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
            Let’s Connect
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NautilusPromise
