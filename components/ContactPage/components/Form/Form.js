"use client"

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { Country } from "country-state-city"
import Select from "react-select"
import { useState } from "react"

const Form = () => {
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
    message: "",
    consent: false,
  })

  const validateForm = () => {
    let newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address"
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required"
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    // if (!formData.phone.trim()) {
    //   newErrors.phone = "Phone number is required"
    // } else if (!/^\d+$/.test(formData.phone)) {
    //   newErrors.phone = "Enter a valid phone number"
    // }
    if (!formData.country.trim()) newErrors.country = "Country is required"
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty"
    if (!formData.consent) newErrors.consent = "You must agree to the terms"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // Returns true if no errors
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    console.log("Form Submitted!", formData)

    setFormData({
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      country: "",
      message: "",
      consent: false,
    })

    setErrors({})
  }

  const renderNameField = () => (
    <div className="w-full">
      <input
        type="text"
        placeholder="Name"
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
      />

      <div className="h-4">
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">*{errors.name}</p>
        )}
      </div>
    </div>
  )

  const renderEmailField = () => (
    <div className="w-full">
      <input
        type="email"
        placeholder="Email"
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <div className="h-4">
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">*{errors.email}</p>
        )}
      </div>
    </div>
  )

  const renderCompanyField = () => (
    <div className="w-full">
      <input
        type="text"
        placeholder="Company"
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
        value={formData.company}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, company: e.target.value }))
        }
      />
      <div className="h-4">
        {errors.company && (
          <p className="text-red-500 text-xs mt-1">*{errors.company}</p>
        )}
      </div>
    </div>
  )

  const renderJobTitleField = () => (
    <div className="w-full">
      <input
        type="text"
        placeholder="Job Title"
        className="border-b border-t-0 border-x-0 text-white bg-transparent w-full border-gray-300 ps-0 p-2 text-xl focus:ring-0 focus:border-white"
        value={formData.jobTitle}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, jobTitle: e.target.value }))
        }
      />
      <div className="h-4">
        {errors.jobTitle && (
          <p className="text-red-500 text-xs mt-1">*{errors.jobTitle}</p>
        )}
      </div>
    </div>
  )

  const renderPhoneField = () => (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-gray-400 text-base sm:text-lg md:text-xl">
        Phone Number
      </label>
      <div className="flex items-center border-b border-gray-300 pb-1">
        <PhoneInput
          international
          defaultCountry="IN"
          value={formData.phone}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, phone: value }))
          }
          className="custom-phone-input w-full text-base sm:text-lg md:text-xl text-white bg-transparent focus:outline-none"
        />
      </div>
      <div className="h-4">
        {errors.phone && (
          <span className="text-red-500 text-sm">*{errors.phone}</span>
        )}
      </div>
    </div>
  )

  const renderCountryField = () => {
    const countryOptions = Country.getAllCountries().map((c) => ({
      value: c.isoCode,
      label: c.name,
    }))

    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center border-b border-gray-300 pb-1">
          <Select
            options={countryOptions}
            className="w-full text-white/85 text-base sm:text-lg focus:ring-0 border-none focus:outline-none"
            classNamePrefix="react-select"
            placeholder="Select Country"
            value={
              countryOptions.find((c) => c.value === formData.country) || null
            }
            onChange={(selectedOption) =>
              setFormData((prev) => ({
                ...prev,
                country: selectedOption ? selectedOption.value : "", // Reset on form clear
              }))
            }
            styles={{
              control: (base) => ({
                ...base,
                background: "transparent",
                border: "none",
                boxShadow: "none",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
              dropdownIndicator: (base) => ({
                ...base,
                color: "white",
                ":hover": {
                  color: "white",
                },
              }),
              menu: (base) => ({
                ...base,
                background: "#333",
              }),
              option: (base, { isFocused }) => ({
                ...base,
                background: isFocused ? "#008E9C" : "#fff",
                color: isFocused ? "#fff" : "#00222F",
              }),
              input: (base) => ({
                ...base,
                color: "white",
              }),
              placeholder: (base) => ({
                ...base,
                color: "white",
                fontWeight: "100",
              }),
            }}
          />
        </div>
        <div className="h-4">
          {errors.country && (
            <span className="text-red-500 text-sm">*{errors.country}</span>
          )}
        </div>
      </div>
    )
  }

  const renderMessageField = () => (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-gray-500 text-base sm:text-lg">Message</label>

      <textarea
        name="message"
        id="message"
        cols={50}
        rows={5}
        className="rounded text-base sm:text-lg bg-white focus:ring-0 border border-white p-2 focus:outline-none"
        value={formData.message}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, message: e.target.value }))
        }
      ></textarea>
      <div className="h-4">
        {errors.message && (
          <span className="text-red-500 text-sm">*{errors.message}</span>
        )}
      </div>
    </div>
  )

  const renderConsentField = () => (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-white/80 text-base md:text-xl">Consent*</label>

      <div className="flex items-start md:items-center gap-2">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          className="focus:ring-0 accent-secondary w-5 h-5 cursor-pointer"
          checked={formData.consent} // Ensures checkbox state is controlled
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, consent: e.target.checked }))
          }
          aria-checked={formData.consent}
          aria-labelledby="consent-label"
        />
        <label
          htmlFor="consent"
          id="consent-label"
          className="text-sm md:text-lg text-white/80 cursor-pointer leading-tight"
        >
          I confirm that I have read and accept the{" "}
          <span className="text-secondary">Privacy Policy</span>.
        </label>
      </div>
      <div className="h-4">
        {errors.consent && (
          <span className="text-red-500 text-sm">*{errors.consent}</span>
        )}
      </div>
    </div>
  )

  return (
    <div className="p-3 sm:p-10">
      <h3 className="text-base sm:text-lg md:text-xl font-light text-white text-center md:text-left">
        Let’s navigate towards excellence together!
      </h3>
      <form
        className="flex flex-col gap-5 sm:gap-7 pt-5 sm:pt-7"
        onSubmit={handleForm}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5 md:gap-10">
          {renderNameField()}
          {renderEmailField()}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5 md:gap-10">
          {renderCompanyField()}
          {renderJobTitleField()}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 sm:gap-5 md:gap-10">
          {renderPhoneField()}
          {renderCountryField()}
        </div>

        {renderMessageField()}
        {renderConsentField()}

        <button
          type="submit"
          className="self-start py-2 px-6 rounded-lg border border-gray-500 text-white hover:border-secondary hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Form
