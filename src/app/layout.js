import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafi-App',
  description: 'Web Anime List',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className="bg-primary"> 
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <a href="#" className="text-white text-2xl font-bold">My Website</a>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 rounded bg-white text-gray-700 focus:outline-none"
              />
              <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white focus:outline-none">
                Search
              </button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
