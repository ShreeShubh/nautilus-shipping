"use client"

import Image from "next/image"
import SocialMediaBtn from "../../SocialMediaBtn/SocialMediaBtn"
import {
  helpfulLinksList,
  informationList,
  servicesList,
} from "@/utils/resources"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"

const MenuSection = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const formData = new FormData()
    formData.append("email", email)

    try {
      const response = await axios.post(
        "https://docs.nautilusshipping.com/wp-json/contact-form-7/v1/contact-forms/10031/feedback",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      if (response.data.status === "mail_sent") {
        setMessage("Subscription successful!")
      } else {
        setMessage("Subscription failed. Please try again.")
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.")
    }

    setLoading(false)
    setEmail("")
  }

  return (
    <div className="flex flex-col md:flex-row justify-between md:border-b border-dashed border-gray-400 pt-5 md:gap-0">
      {/* card 1 */}
      <div className="pb-7 md:p-4 w-full md:w-80 flex flex-col items-center md:items-start gap-3 border-b border-dashed border-gray-400 md:border-0">
        <Image
          src="/logo.png"
          width={143}
          height={61}
          alt="Nautilus Shipping"
          className="hidden md:block"
        />
        <p className="text-primary text-base self-start">
          Stay Updated with Nautilus Highlights
        </p>
        <form
          className="flex flex-col items-start gap-3 w-full"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            className="border-b border-t-0 border-x-0 border-gray-400 p-1.5 focus:outline-none focus:ring-0 focus:border-gray-500 appearance-none w-full"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <div className="flex justify-between items-center w-full">
            <button
              type="submit"
              className="py-1.5 px-4 text-sm bg-primary text-white rounded-lg hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
            <div className="sm:hidden">
              <SocialMediaBtn />
            </div>
          </div>
        </form>
        {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
      </div>

      {/* card 2 */}
      <div className="flex flex-row justify-around md:p-4 w-full md:border-x border-dashed border-gray-400 gap-5 pt-7 sm:gap-0">
        <ul className="flex flex-col gap-2 text-primary text-left">
          <h3 className="underline mb-3 text-sm md:text-base">Information</h3>
          {informationList.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-secondary transition-colors duration-300 text-sm md:text-base"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 text-primary text-left">
          <h3 className="underline mb-3 text-sm md:text-base">Helpful Links</h3>
          {helpfulLinksList.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-secondary transition-colors duration-300 text-sm md:text-base"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 text-primary text-left">
          <h3 className="underline mb-3 text-sm md:text-base">Our Services</h3>
          {servicesList.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-secondary transition-colors duration-300 text-sm md:text-base"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* card 3 */}
      <div className="flex flex-col items-center p-3 md:p-4 w-full md:w-80">
        <div className="space-y-3 text-center hidden md:block">
          <Image
            src="/footer/image01.png"
            width={105}
            height={105}
            alt="Hiring"
          />
          <p className="text-primary text-sm">Follow us</p>
          <SocialMediaBtn />
        </div>
      </div>
    </div>
  )
}

export default MenuSection
