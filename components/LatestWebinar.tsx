import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

interface LatestWebinarProps {
  title: string
  date: string
  image: string
  speaker: string
  speakerDescription: string
  registrationLink: string
}

export default function LatestWebinar({
  title,
  date,
  image,
  speaker,
  speakerDescription,
  registrationLink,
}: LatestWebinarProps) {
  return (
    <div
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden shadow-xl transform transition-all hover:scale-[1.01] duration-300"
      style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
    >
      <div className="relative h-48 md:h-40 lg:h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div
            className="inline-block bg-red-600/90 text-white text-sm font-semibold px-3 py-1 mb-2"
            style={{ borderRadius: "9999px" }} /* Inline style as a fallback */
          >
            Webinar Terbaru
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4 line-clamp-2 leading-tight">{title}</h3>
        <div className="flex items-start mb-6">
          <div className="bg-red-600/20 p-2 mr-3" style={{ borderRadius: "9999px" }} /* Inline style as a fallback */>
            <User className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <p className="font-medium text-white">{speaker}</p>
            <p className="text-sm text-white/70 line-clamp-2 mt-1">{speakerDescription}</p>
          </div>
        </div>
        <Link
          href={registrationLink}
          className="group flex w-full items-center justify-center bg-red-600 hover:bg-red-700 text-center py-3 px-4 font-medium transition-all shadow-md hover:shadow-lg"
          style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
        >
          <span>Daftar (Bayar Seikhlasnya)!</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
