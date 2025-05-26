import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Users, Video } from "lucide-react"
import { getWebinars } from "../lib/webinars"
import { getPodcasts } from "../lib/podcasts"
import { getContent } from "../lib/content"
import StatCard from "../components/StatCard"
import Image from "next/image"

export const revalidate = 3600 // revalidate every hour

export default async function Home() {
  const allWebinars = await getWebinars()
  const allPodcasts = await getPodcasts()
  const allContent = await getContent()

  const featuredWebinars = allWebinars.slice(0, 3)
  const featuredPodcasts = allPodcasts.slice(0, 3)
  const featuredContent = allContent.slice(0, 3)

  // Get the latest webinar for the featured section
  const latestWebinar = allWebinars.length > 0 ? allWebinars[0] : null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="gradient-text">Berdayakan Pikiran</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl">
              Logos ID membawa sains, filsafat, politik & sejarah ke percakapan sehari-hari. Membuat 2000+ artikel &
              buku saintifik menjadi sederhana.
            </p>
            <Link
              href="/content"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
            >
              <span>Mulai Belajar</span> <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex space-x-4 mt-8">
              <Link
                href="https://twitter.com/logos_id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com/_logosid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153-1.772 4.902 4.902 0 01-1.772-1.153c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@LogosID"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://open.spotify.com/show/2bwe0dyWnFKmqXaYCSwhML"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors"
              >
                <span className="sr-only">Spotify</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/logos-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
            <span className="inline-block border-b-4 border-red-600 pb-2">Pengumuman Terbaru</span>
          </h2>

          {/* Grid for announcements - 4 cards in a single row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Announcement 1: Bahas Pendidikan */}
            <div
              className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
              style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
            >
              <div className="relative w-full" style={{ paddingBottom: "125%" /* 4:5 aspect ratio */ }}>
                <Image
                  src="/images/bahas-pendidikan.png"
                  alt="Bahas Pendidikan"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4">
                  <div
                    className="inline-block bg-blue-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                    style={{ borderRadius: "9999px" }} /* Inline style as a fallback */
                  >
                    Cohort Based Course
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-blue-800/50 to-blue-900/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2">Bahas Pendidikan</h3>
                <p className="text-white/90 mb-3 flex-grow text-sm">
                  Kursus intensif membahas teori dan praktik pendidikan.
                </p>
                <div className="flex items-center mb-3 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>Mulai 23 Mei 2025</span>
                </div>
                <Link
                  href="https://logos-id.myr.id/pl/bahas-pendidikan"
                  className="inline-flex items-center gap-1 bg-white text-blue-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors shadow-md"
                  style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
                >
                  <span>Daftar (Donasi Seikhlasnya)!</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Announcement 2: Henry Giroux 101 */}
            <div
              className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
              style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
            >
              <div className="relative w-full" style={{ paddingBottom: "125%" /* 4:5 aspect ratio */ }}>
                <Image
                  src="https://i.postimg.cc/9fRs8R6M/1.png"
                  alt="Henry Giroux 101"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4">
                  <div
                    className="inline-block bg-purple-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                    style={{ borderRadius: "9999px" }} /* Inline style as a fallback */
                  >
                    Cohort Based Course
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-purple-800/50 to-purple-900/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2">Henry Giroux 101</h3>
                <p className="text-white/90 mb-3 flex-grow text-sm">Eksplorasi mendalam pemikiran Henry Giroux.</p>
                <div className="flex items-center mb-3 text-xs">
                  <Users className="w-3 h-3 mr-1" />
                  <span>Terbatas 50 Peserta</span>
                </div>
                <Link
                  href="https://logos-id.myr.id/pl/henry-giroux-101"
                  className="inline-flex items-center gap-1 bg-white text-purple-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors shadow-md"
                  style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
                >
                  <span>Daftar (Donasi Seikhlasnya)!</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Announcement 3: Langka Website */}
            <div
              className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
              style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
            >
              <div className="relative w-full" style={{ paddingBottom: "125%" /* 4:5 aspect ratio */ }}>
                <Image
                  src="https://i.postimg.cc/J04qFSsq/Screenshot-2025-05-19-at-2-59-21-PM.png"
                  alt="Langka Website"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4">
                  <div
                    className="inline-block bg-red-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                    style={{ borderRadius: "9999px" }} /* Inline style as a fallback */
                  >
                    Baru Diluncurkan
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-red-800/50 to-red-900/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2">Website "Langka"</h3>
                <p className="text-white/90 mb-3 flex-grow text-sm">
                  Nikmati 400+ karya sastra, sejarah, sampai kejahatan HAM berat.
                </p>
                <Link
                  href="https://langka.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white text-red-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors shadow-md mt-auto"
                  style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
                >
                  <span>Baca Gratis</span>
                  <BookOpen className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Announcement 4: Latest Webinar */}
            {latestWebinar && (
              <div
                className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
                style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
              >
                <div className="relative w-full" style={{ paddingBottom: "125%" /* 4:5 aspect ratio */ }}>
                  <Image
                    src={latestWebinar.image || "/placeholder.svg?height=500&width=400&query=webinar"}
                    alt={latestWebinar.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <div
                      className="inline-block bg-green-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                      style={{ borderRadius: "9999px" }} /* Inline style as a fallback */
                    >
                      Webinar Terbaru
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-green-800/50 to-green-900/50 backdrop-blur-sm">
                  <h3 className="text-lg font-bold mb-2">
                    {latestWebinar.title.length > 30
                      ? `${latestWebinar.title.substring(0, 30)}...`
                      : latestWebinar.title}
                  </h3>
                  <p className="text-white/90 mb-3 flex-grow text-sm">
                    {latestWebinar.description.length > 60
                      ? `${latestWebinar.description.substring(0, 60)}...`
                      : latestWebinar.description}
                  </p>
                  <div className="flex items-center mb-3 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>
                      {new Date(latestWebinar.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <Link
                    href={latestWebinar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-white text-green-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors shadow-md"
                    style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
                  >
                    <span>Daftar (Donasi Seikhlasnya)!</span>
                    <Video className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bagian Statistik */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard title="Pengikut" value="220.000" icon="users" />
            <StatCard title="Tayangan" value="800 Juta" icon="eye" />
            <StatCard title="Artikel Edukatif" value="2.000" icon="book-open" />
            <StatCard title="Peserta Kelas Live" value="10.000" icon="user-check" />
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white relative inline-block">
            Webinar Terbaru
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-red-600 via-transparent to-transparent"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWebinars.map((webinar, index) => (
              <article
                key={webinar.id}
                className={`group simple-hover transition-all ${index >= 2 ? "hidden sm:block" : ""}`}
              >
                <Link href={webinar.link}>
                  <div
                    className="relative aspect-[16/9] mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    <Image
                      src={webinar.image || "/placeholder.svg"}
                      alt={webinar.title}
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                        {webinar.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors line-clamp-2 simple-underline">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{webinar.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Podcasts */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white relative inline-block">
            Podcast Pilihan
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-red-600 via-transparent to-transparent"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPodcasts.map((podcast, index) => (
              <article
                key={podcast.id}
                className={`group simple-hover transition-all ${index >= 2 ? "hidden sm:block" : ""}`}
              >
                <Link href={podcast.audio_url}>
                  <div
                    className="relative aspect-[16/9] mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    <Image
                      src={podcast.image || "/placeholder.svg"}
                      alt={podcast.title}
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                        {podcast.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors line-clamp-2 simple-underline">
                      {podcast.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{podcast.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white relative inline-block">
            Konten Edukatif
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-red-600 via-transparent to-transparent"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <article
                key={content.id}
                className={`group simple-hover transition-all ${index >= 2 ? "hidden sm:block" : ""}`}
              >
                <Link href={content.content_url}>
                  <div
                    className="relative aspect-[16/9] mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    <Image
                      src={content.image || "/placeholder.svg"}
                      alt={content.title}
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                        {content.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors line-clamp-2 simple-underline">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{content.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Dukung Misi Kami</h2>
            <p className="text-lg mb-8">
              Bantu kami terus menyediakan konten edukatif berkualitas dan sumber daya untuk pelajar di seluruh dunia.
            </p>
            <Link
              href="https://mayar.gg/logos-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors shadow-lg"
              style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
            >
              Dukung Kami Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
