import "./globals.css"
import { Inter } from "next/font/google"
import SearchForm from "./components/SearchForm"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AuraWeather",
  description: "Modern weather forecasts at your fingertips",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-black text-gray-100 min-h-screen`}>
        <div className="fixed inset-0 bg-[url('/graph-pattern.svg')] opacity-20"></div>
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/80"></div>
        <header className="relative backdrop-blur-sm bg-black/10 border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">
                aura weather
              </div>
              <div className="flex-1 max-w-md ml-4">
                <SearchForm />
              </div>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-6 py-8 relative">{children}</main>
      </body>
    </html>
  )
}

