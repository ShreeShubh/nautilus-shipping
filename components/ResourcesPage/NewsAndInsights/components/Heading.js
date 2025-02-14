const Heading = () => {
  return (
    <>
      <div className="pt-[125px] pb-14 px-4">
        <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-5">
          {/* Title */}
          <h1 className="text-3xl sm:text-7xl font-light leading-tight md:leading-tight tracking-wide">
            Nautilus <br className="hidden sm:block" /> News & Insights
          </h1>

          {/* Subtitle Section */}
          <div className="space-y-1">
            <p className="text-lg sm:text-xl font-light tracking-wide">
              From Ship to Shore:
            </p>
            <p className="text-sm sm:text-base tracking-wide">
              Clear Perspectives on News and Tech
            </p>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </>
  )
}

export default Heading
