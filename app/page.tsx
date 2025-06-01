import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Users, Twitter, Instagram, Youtube, Music, Linkedin } from "lucide-react"
import { getWebinars } from "../lib/webinars"
import { getPodcasts } from "../lib/podcasts"
import { getContent } from "../lib/content"
import StatCard from "../components/StatCard"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const revalidate = 3600

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/logos_id", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/_logosid", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@LogosID", icon: Youtube },
  { name: "Spotify", href: "https://open.spotify.com/show/2bwe0dyWnFKmqXaYCSwhML", icon: Music },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/logos-id", icon: Linkedin },
]

export default async function Home() {
  const allWebinars = await getWebinars()
  const allPodcasts = await getPodcasts()
  const allContent = await getContent()

  const featuredWebinars = allWebinars.slice(0, 3)
  const featuredPodcasts = allPodcasts.slice(0, 3)
  const featuredContent = allContent.slice(0, 3)

  const announcementCards = [
    {
      title: "Bahas Pendidikan",
      image: "/images/bahas-pendidikan.png",
      tag: "Cohort Based Course",
      date: "Mulai 23 Mei 2025",
      description: "Kelas diskusi intensif membahas teori dan praktik pendidikan.",
      link: "https://logos-id.myr.id/pl/bahas-pendidikan",
      tagBg: "bg-primary",
      tagText: "text-primary-foreground",
      borderColor: "border-primary",
      buttonClass: "btn-primary",
      buttonText: "Daftar (Donasi Seikhlasnya)!",
    },
    {
      title: "Henry Giroux 101",
      image: "https://i.postimg.cc/9fRs8R6M/1.png",
      tag: "Cohort Based Course",
      participants: "Terbatas 50 Peserta",
      description: "Eksplorasi mendalam pemikiran Henry Giroux.",
      link: "https://logos-id.myr.id/pl/henry-giroux-101",
      tagBg: "bg-primary",
      tagText: "text-white",
      borderColor: "border-primary",
      buttonClass: "btn-outline-primary",
      buttonText: "Daftar (Donasi Seikhlasnya)!",
    },
    {
      title: 'Website "Langka"',
      image: "https://i.postimg.cc/J04qFSsq/Screenshot-2025-05-19-at-2-59-21-PM.png",
      tag: "Baru Diluncurkan",
      description: "400+ karya sastra, sejarah, sampai kejahatan HAM berat.",
      link: "https://langka.vercel.app",
      tagBg: "bg-accent",
      tagText: "text-accent-foreground",
      borderColor: "border-accent",
      buttonClass: "btn-accent",
      ctaIcon: BookOpen,
      buttonText: "Baca Gratis",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 section-padding pt-28 md:pt-36 lg:pt-40">
        {/* Geometric Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large background gradients */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/8 via-accent/6 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/6 via-primary/4 to-transparent rounded-full blur-3xl"></div>

          {/* Floating geometric shapes */}
          <div className="floating-circle w-32 h-32 top-20 right-1/4 blur-sm"></div>
          <div className="floating-circle w-16 h-16 top-1/3 right-10"></div>
          <div className="floating-square w-24 h-24 bottom-1/4 right-20 blur-sm"></div>
          <div className="floating-square w-12 h-12 top-1/2 left-1/4"></div>

          {/* Additional decorative elements */}
          <div className="absolute top-1/4 left-10 w-6 h-6 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-accent/25 rounded-lg rotate-45"></div>
          <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-primary/15 rounded-full"></div>
        </div>

        <div className="container relative z-10 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6 leading-tight">
              Berdayakan Pikiran!
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Logos ID membawa sains, filsafat, politik & sejarah ke percakapan sehari-hari. Membuat 2.000+ artikel &
              buku saintifik menjadi sederhana dan mudah diakses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/content" className="btn btn-primary btn-lg shadow-lg hover:shadow-xl">
                Mulai Belajar <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#announcements" className="btn btn-outline-primary btn-lg border-2 hover:shadow-md">
                Lihat Pengumuman
              </Link>
            </div>
            <div className="mt-12 flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/70 transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section with Enhanced Background */}
      <section id="announcements" className="relative section-padding bg-gradient-to-b from-slate-50 to-gray-50">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-accent/8 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/6 rounded-full"></div>
          <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-accent/5 rounded-lg rotate-12"></div>
        </div>

        <div className="container relative z-10">
          <h2 className="text-center text-3xl md:text-3xl font-bold mb-12 text-slate-800">
            Pengumuman Terbaru
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {announcementCards.map((item) => (
              <div
                key={item.title}
                className={cn(
                  "card-base flex flex-col h-full overflow-hidden border-t-4 hover:scale-[1.02] transition-transform duration-200",
                  item.borderColor,
                )}
              >
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={item.image || "/placeholder.svg?height=250&width=400&query=announcement"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className={cn(
                      "absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm",
                      item.tagBg,
                      item.tagText,
                    )}
                  >
                    {item.tag}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">{item.description}</p>
                  {(item.date || item.participants) && (
                    <div className="flex items-center mb-4 text-xs text-slate-500">
                      {item.date && (
                        <>
                          <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary/80" />
                          <span>{item.date}</span>
                        </>
                      )}
                      {item.participants && (
                        <>
                          <Users className="w-3.5 h-3.5 mr-1.5 ml-3 text-primary/80" />
                          <span>{item.participants}</span>
                        </>
                      )}
                    </div>
                  )}
                  <Link
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                    className={cn("btn btn-md mt-auto w-full shadow-sm hover:shadow-md", item.buttonClass)}
                  >
                    <span>{item.buttonText}</span>
                    {item.ctaIcon ? (
                      <item.ctaIcon className="w-4 h-4 ml-1.5" />
                    ) : (
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Gradient Background */}
      <section className="section-padding bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <StatCard title="Pengikut" value="220K+" icon="users" />
            <StatCard title="Tayangan" value="800M+" icon="eye" />
            <StatCard title="Artikel Edukatif" value="2K+" icon="book-open" />
            <StatCard title="Peserta Kelas Live" value="12K+" icon="user-check" />
          </div>
        </div>
      </section>

      <FeaturedItemsSection title="Webinar" items={featuredWebinars} type="webinar" />
      <FeaturedItemsSection
        title="Podcast"
        items={featuredPodcasts}
        type="podcast"
        bgColor="bg-gradient-to-b from-slate-50 to-gray-50"
      />
      <FeaturedItemsSection title="Konten Edukatif" items={featuredContent} type="content" />

      {/* Enhanced Support Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/8 rounded-lg rotate-45 blur-lg"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/6 rounded-full"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl md:text-3xl font-bold mb-4 text-white">Dukung Misi Kami</h2>
            <p className="text-base mb-8 opacity-90">
              Bantu kami terus menyediakan konten edukatif berkualitas untuk pelajar di seluruh
              Indonesia.
            </p>
            <Link
              href="https://mayar.gg/logos-id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg bg-white text-primary hover:bg-gray-100 shadow-lg font-semibold hover:scale-105 transition-transform duration-200"
            >
              Dukung Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

interface FeaturedItemProps {
  id: number | string
  title: string
  description: string
  image: string
  category: string
  link?: string
  audio_url?: string
  content_url?: string
}

interface FeaturedItemsSectionProps {
  title: string
  items: FeaturedItemProps[]
  type: "webinar" | "podcast" | "content"
  bgColor?: string
}

function FeaturedItemsSection({ title, items, type, bgColor = "bg-white" }: FeaturedItemsSectionProps) {
  const getLink = (item: FeaturedItemProps) => {
    switch (type) {
      case "webinar":
        return item.link || "#"
      case "podcast":
        return item.audio_url || "#"
      case "content":
        return item.content_url || "#"
      default:
        return "#"
    }
  }

  const getCategoryTagStyle = () => {
    switch (type) {
      case "webinar":
        return "bg-accent text-accent-foreground"
      case "podcast":
        return "bg-primary text-white"
      case "content":
        return "bg-yellow-400 text-yellow-900"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section className={cn("section-padding", bgColor)}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-slate-800">
          {title}
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mt-2.5 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {items.map((item) => (
            <Link
              key={item.id}
              href={getLink(item)}
              target={getLink(item).startsWith("http") ? "_blank" : "_self"}
              rel={getLink(item).startsWith("http") ? "noopener noreferrer" : ""}
              className="group block card-base overflow-hidden hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image || `/placeholder.svg?height=225&width=400&query=${type}+thumbnail`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span
                  className={cn(
                    "text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm mb-2 inline-block",
                    getCategoryTagStyle(),
                  )}
                >
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href={`/${type}s`} className="btn btn-outline-primary btn-md shadow-sm hover:shadow-md">
            Lihat Semua {type === "content" ? "Konten" : type.charAt(0).toUpperCase() + type.slice(1) + "s"}
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
