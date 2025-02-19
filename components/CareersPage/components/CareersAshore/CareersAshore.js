import CareersAshoreItem from "./CareersAshoreItem"

const CareersAshore = () => {
  return (
    <div className="pt-7 sm:pt-14">
      <div className="max-w-screen-xl mx-auto w-full space-y-4 sm:space-y-5 px-4">
        <h2 className="text-3xl sm:text-5xl font-light tracking-wide">
          Careers Ashore
        </h2>
        <p className="text-base sm:text-lg font-light tracking-wide w-10/12">
          At Nautilus Shipping, we value our seafarers by ensuring on-time
          payments, offering competitive wages among the best in the industry,
          and prioritizing your safety with modern, well-maintained vessels that
          meet stringent safety standards. With a modern and expanding fleet
          equipped with cutting-edge technology, we provide exciting career
          opportunities both at sea and ashore, including pathways for career
          advancement. Join us to embark on a rewarding journey where your
          skills and dedication are truly recognized.
        </p>
      </div>

      <CareersAshoreItem />
    </div>
  )
}

export default CareersAshore
