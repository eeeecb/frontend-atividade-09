import { Outlet, Link } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header />
      <nav className="bg-gray-800 border-b border-gray-700 p-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/blogs" className="text-blue-400 hover:text-blue-300 transition-colors">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">Contact</Link>
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