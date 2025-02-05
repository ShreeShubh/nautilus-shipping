import Link from "next/link"

const GetInTouch = () => {
  return (
    <div className="py-14 px-4">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-5">
        <h2 className="text-7xl font-light leading-tight">
          Looking for expert <br /> fleet management?
        </h2>
        <Link href="/contact-us">
          <button className="py-1.5 px-4 rounded-lg text-white bg-secondary hover:bg-primary hover:scale-95 transition-all duration-300 ease-in-out">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  )
}

export default GetInTouch
