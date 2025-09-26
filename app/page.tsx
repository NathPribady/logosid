import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Users, BookOpen, Play } from "lucide-react"
import { getWebinars } from "../lib/webinars"
import { getPodcasts } from "../lib/podcasts"
import { getContent } from "../lib/content"

export const revalidate = 3600

const announcementCards = [
  {
    title: "bell hooks 101",
    image: "https://i.ibb.co/kVkZzPp1/Screenshot-2025-09-25-at-11-47-39-AM.png",
    tag: "Cohort Based Course",
    date: "Mulai 29 Agustus 2025",
    description: "Kelas diskusi intensif membahas pemikiran bell hooks tentang pendidikan kritis dan pedagogi cinta.",
    link: "https://logos-id.myr.id/pl/bell-hooks-101",
    buttonText: "Daftar (Donasi Seikhlasnya)!",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Urun Dana Buku Logos ID",
    image: "https://i.ibb.co/pBV620tK/Screenshot-2025-08-16-at-11-05-18-PM.png",
    tag: "Urun Dana",
    date: "Target: Rp 50.000.000",
    description:
      "Bantu kami menerbitkan buku-buku berkualitas tentang pendidikan, filsafat, dan pemikiran kritis. Setiap kontribusi Anda sangat berarti untuk kemajuan literasi Indonesia.",
    link: "https://buku.logosid.app",
    buttonText: "Dukung Sekarang",
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
  {
    title: "Kelas Adat dan Leluhur",
    image:
      "https://sjc.microlink.io/1ECO8qMthBHbfvsRDO0wFPHg9DlMMyUc8Lksw923TyTlwqn7xyXq6iSNpPs_4bAzYrNklimTX5r_PaOkButjOQ.jpeg",
    tag: "Cohort Based Course",
    date: "5 Agustus - 24 September 2024",
    description:
      "Ruang aman dan inklusif untuk mengkonstruksi pengetahuan bersama yang melibatkan komunitas Adat, penghayat kepercayaan, dan pendidikan dekolonial.",
    link: "https://adat.logosid.app",
    buttonText: "Daftar Sekarang",
    bgColor: "bg-orange-500",
    textColor: "text-white",
  },
  {
    title: 'Website "Langka"',
    image: "https://i.ibb.co/608HZ6df/Screenshot-2025-08-16-at-11-08-33-PM.png",
    tag: "Baru Diluncurkan",
    description: "600+ karya sastra, sejarah, sampai kejahatan HAM berat.",
    link: "https://langka.logosid.app",
    buttonText: "Baca Gratis",
    bgColor: "bg-blue-600",
    textColor: "text-white",
  },
]

export const metadata = {
  title: "Logos ID - Platform Pendidikan Berkualitas",
  description:
    "Platform pendidikan yang memberdayakan pikiran melalui sains, filsafat, politik & sejarah. Webinar, podcast, dan konten edukatif berkualitas tinggi.",
}

export default async function HomePage() {
  const [allWebinars, allPodcasts, allContent] = await Promise.all([getWebinars(), getPodcasts(), getContent()])

  const featuredWebinars = allWebinars.slice(0, 3)
  const featuredPodcasts = allPodcasts.slice(0, 3)
  const featuredContent = allContent.slice(0, 3)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative">
              {/* Pink Circle Background */}
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">Logos ID</h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Platform pendidikan yang memberdayakan pikiran melalui sains, filsafat, politik, dan sejarah.
                  Menyediakan webinar, podcast, dan konten edukatif berkualitas tinggi untuk mengembangkan pemikiran
                  kritis dan wawasan mendalam.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/webinars" className="btn btn-primary btn-lg">
                    Jelajahi Konten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link href="/podcasts" className="btn btn-outline btn-lg">
                    Dengarkan Podcast
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <Image
                  src="/images/design-mode/OSRNH3N7LFB5XJEWUUBVS3ZWZM.png"
                  alt="The Thinker statue representing contemplation and critical thinking"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pengumuman Terbaru</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {announcementCards.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${item.bgColor || "bg-primary"} ${item.textColor || "text-white"} text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  {(item.date || item.participants) && (
                    <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                      {item.date && (
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{item.date}</span>
                        </div>
                      )}
                      {item.participants && (
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{item.participants}</span>
                        </div>
                      )}
                    </div>
                  )}
                  <Link
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                    className={`btn btn-md w-full text-white ${item.bgColor || "btn-primary"}`}
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Webinar Berkualitas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">250K+</h3>
              <p className="text-gray-600">Peserta Kelas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2K+</h3>
              <p className="text-gray-600">Artikel & Konten</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200K+</h3>
              <p className="text-gray-600">Followers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Webinar Terbaru</h2>
            <Link href="/webinars" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
              Lihat Semua
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWebinars.map((webinar) => (
              <Link
                key={webinar.id}
                href={webinar.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={webinar.image || `/placeholder.svg?height=500&width=400&query=webinar+${webinar.title}`}
                    alt={webinar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-pink-50 px-2 py-1 rounded-full">
                    {webinar.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{webinar.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Podcasts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Podcast Pilihan</h2>
            <Link href="/podcasts" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
              Lihat Semua
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPodcasts.map((podcast) => (
              <Link
                key={podcast.id}
                href={podcast.audio_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={podcast.image || `/placeholder.svg?height=500&width=400&query=podcast+${podcast.title}`}
                    alt={podcast.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-pink-50 px-2 py-1 rounded-full">
                    {podcast.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{podcast.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Konten Edukatif</h2>
            <Link href="/content" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
              Lihat Semua
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content) => (
              <Link
                key={content.id}
                href={content.content_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={content.image || `/placeholder.svg?height=500&width=400&query=article+${content.title}`}
                    alt={content.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                    {content.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{content.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bergabunglah dengan Komunitas Pembelajar</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Dukung misi kami dalam menyebarkan pendidikan berkualitas untuk semua
          </p>
          <Link
            href="https://mayar.gg/logos-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Dukung Kami
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
