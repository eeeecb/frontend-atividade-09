import { Outlet, Link } from "react-router-dom"
import { House, BookText, Phone } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ showHeader = true }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {showHeader && <Header />}
      <nav className="bg-gray-800 border-b border-gray-700 p-4">
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link to="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"><House className="mr-2" />Home</Link>
          </li>
          <li>
            <Link to="/blogs" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"><BookText className="mr-2" />Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"><Phone className="mr-2" />Contato</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}