import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-[#141424] via-[#0f0d16] to-black text-white py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">iSoftwareStudios</h1>
          <p className="text-gray-300 max-w-md">
            Your trusted partner in website solutions, building high-converting websites for growing businesses.
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  )
}