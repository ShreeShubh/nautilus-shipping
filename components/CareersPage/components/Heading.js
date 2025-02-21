"use client"
import { ParallaxBanner } from "react-scroll-parallax"

const Heading = () => {
  return (
    <div className="pt-28 pb-7 sm:pb-14">
      <h1 className="text-2xl sm:text-6xl font-light text-center leading-snug sm:leading-tight tracking-wide">
        India’s Fastest Growing <br className="hidden sm:block" /> Ship
        Management Company
      </h1>
      <ParallaxBanner
        layers={[{ image: "/careers/bg.png", speed: -15 }]}
        className="bg-[url('/careers/bg.png')] bg-cover relative mt-8 sm:mt-10"
      >
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="max-w-screen-xl mx-auto w-full py-12 sm:py-20 px-4 sm:px-6 relative z-10 text-white space-y-5 sm:space-y-10">
          <h2 className="text-2xl sm:text-6xl font-light leading-snug sm:leading-tight tracking-wide">
            Why Join <br className="hidden sm:block" /> Nautilus Shipping?
          </h2>
          <p className="text-sm sm:text-lg font-light tracking-wide w-full sm:w-10/12 mx-auto sm:mx-0">
            At Nautilus Shipping, we value our seafarers by ensuring on-time
            payments, offering competitive wages among the best in the industry,
            and prioritizing your safety with modern, well-maintained vessels
            that meet stringent safety standards. With a modern and expanding
            fleet equipped with cutting-edge technology, we provide exciting
            career opportunities both at sea and ashore, including pathways for
            career advancement. <br className="hidden sm:block" /> Join us to
            embark on a rewarding journey where your skills and dedication are
            truly recognized.
          </p>
        </div>
      </ParallaxBanner>
    </div>
  )
}

export default Heading
