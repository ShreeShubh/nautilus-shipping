import Company from "@/components/AboutUsPage/Company/Company"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Nautilus Ship Management | Leading Ship Managers in India",
    description:
      "With 17 years of expertise, Nautilus Shipping has evolved from a crew management company to a full-service ship management provider. We operate from six global offices, offering technical management, inspections, and commercial services for maritime excellence.",
    path: "/about-us/company",
    metaImage: "",
    pageType: "WebSite",
  }
  return (
    <>
      <NextSeo {...seoField} />
      <Company />
    </>
  )
}
