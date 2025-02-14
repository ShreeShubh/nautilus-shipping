"use client"

import { ourApproachList } from "@/utils/resources"
import { useState } from "react"

const OurApproach = () => {
  const [points, setPoints] = useState(ourApproachList[0] || {})

  return (
    <>
      <div className="pt-14 px-4">
        <div className="max-w-screen-lg mx-auto w-full space-y-7">
          <h2 className="text-3xl sm:text-5xl leading-tight md:leading-tight text-center md:text-left tracking-wide">
            Our Approach to <br className="hidden sm:block" /> Sustainable
            Shipping
          </h2>

          <div className="border-y border-gray-400 w-full flex flex-col md:flex-row">
            {/* List Container */}
            <div className="w-full md:w-[400px]">
              <ul>
                {ourApproachList.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setPoints(item)}
                    className={`tracking-wide cursor-pointer py-4 sm:py-5 px-3 border-x md:border-x-0 md:border-r border-gray-400 text-xl sm:text-2xl flex ${
                      index < ourApproachList.length - 1 ? "border-b" : ""
                    } ${
                      points.title === item.title
                        ? "bg-primary text-white"
                        : "bg-transparent text-black"
                    }`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Container */}
            <div className="p-5 self-center w-full md:w-3/4 h-auto md:h-[300px] overflow-hidden">
              <h3 className="text-lg sm:text-xl tracking-wide">
                {points.desc}
              </h3>
              <ul className="space-y-3 list-disc text-base sm:text-lg tracking-wide font-light p-5">
                {points.points.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <hr className="border-gray-400 w-full" /> */}
    </>
  )
}

export default OurApproach
