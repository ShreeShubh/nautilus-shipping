const Driving = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 max-w-screen-lg mx-auto border-y border-gray-400">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-5xl leading-tight md:leading-tight text-center md:text-left pt-5 md:pt-0 tracking-wide">
            Driving a <br className="hidden sm:block" /> Greener Future{" "}
            <br className="hidden sm:block" /> in Maritime{" "}
            <br className="hidden sm:block" /> Operations
          </h2>
        </div>

        <div className="w-full md:w-3/4 bg-[#0C5C2E] py-5">
          <p className="text-white p-3 text-base sm:text-lg font-light leading-tight tracking-wide">
            At <span className="font-semibold">Nautilus Shipping,</span>{" "}
            sustainability is more than a commitment—it is an integral part of
            how we manage and operate vessels. As a responsible ship management
            company, we continuously implement strategies to reduce emissions,
            enhance energy efficiency, and ensure compliance with global
            environmental regulations. Our approach integrates{" "}
            <span className="font-semibold">
              technology, operational excellence, and sustainable best practices
            </span>{" "}
            to minimize the environmental impact of maritime operations while
            maintaining high safety and performance standards.
          </p>
        </div>
      </div>

      {/* <hr className="border-gray-400 w-full" /> */}
    </>
  )
}

export default Driving
