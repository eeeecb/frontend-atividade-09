import { Home, Book, Calendar, Settings } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 w-64 p-6 hidden md:block">
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400">
              <Home className="w-5 h-5" />
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400">
              <Book className="w-5 h-5" />
              <span>Cursos</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400">
              <Calendar className="w-5 h-5" />
              <span>Agenda</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400">
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}