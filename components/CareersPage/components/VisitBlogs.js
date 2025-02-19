import Link from "next/link"

const VisitBlogs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 pb-7 md:pb-14 max-w-screen-lg mx-auto px-3 md:px-0">
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-5xl font-light tracking-wide">Blogs</h2>
        <p className="text-base sm:text-lg font-light tracking-wide">
          The most recent articles, press releases,{" "}
          <br className="hidden sm:block" />
          reports and case studies
        </p>
      </div>

      {/* Search Section */}
      <div>
        <Link href="/resources/news-and-insights">
          <button className="py-1.5 px-6 rounded-lg bg-primary text-white hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out">
            Read More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default VisitBlogs
