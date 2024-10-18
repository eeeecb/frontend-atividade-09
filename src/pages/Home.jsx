import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, AlertTriangle, Cpu, Cloud } from 'lucide-react'

export default function Home() {
  const features = [
    { icon: <Shield className="w-8 h-8 text-blue-400" />, title: "Proteção Abrangente", description: "Soluções de segurança completas para sua infraestrutura digital." },
    { icon: <Lock className="w-8 h-8 text-blue-400" />, title: "Criptografia Avançada", description: "Mantenha seus dados seguros com as mais recentes tecnologias de criptografia." },
    { icon: <Eye className="w-8 h-8 text-blue-400" />, title: "Monitoramento 24/7", description: "Vigilância constante contra ameaças cibernéticas emergentes." },
    { icon: <AlertTriangle className="w-8 h-8 text-blue-400" />, title: "Resposta a Incidentes", description: "Equipe especializada pronta para responder rapidamente a qualquer ameaça." },
    { icon: <Cpu className="w-8 h-8 text-blue-400" />, title: "Segurança de Endpoints", description: "Proteja todos os dispositivos conectados à sua rede." },
    { icon: <Cloud className="w-8 h-8 text-blue-400" />, title: "Segurança em Nuvem", description: "Soluções robustas para proteger seus ativos na nuvem." },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Segurança da Informação</h1>
          <p className="text-xl text-gray-300 mb-8">Protegendo seu mundo digital contra ameaças cibernéticas</p>
          <div className="flex justify-center space-x-4">
            <Link to="/blogs" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Conheça mais
            </Link>
            <Link to="/contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Contato
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}