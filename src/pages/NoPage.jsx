import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-8">Oops! A página que você está procurando não existe.</p>
        <Link 
          to="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition duration-150 ease-in-out"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}