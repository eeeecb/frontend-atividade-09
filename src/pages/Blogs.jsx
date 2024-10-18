export default function Blogs() {
  const blogPosts = [
    {
      title: "A Ascensão das Ameaças de Ransomware",
      summary: "Explore o crescente perigo dos ataques de ransomware e aprenda estratégias eficazes para proteger sua organização contra esta ameaça em evolução.",
      image: "https://via.placeholder.com/300x200.png?text=Ransomware+Threats"
    },
    {
      title: "Segurança em um Mundo de Trabalho Remoto",
      summary: "Com o aumento do trabalho remoto, descubra as melhores práticas para garantir a segurança dos dados corporativos e pessoais fora do ambiente de escritório tradicional.",
      image: "https://via.placeholder.com/300x200.png?text=Remote+Work+Security"
    },
    {
      title: "A Importância da Higiene Cibernética",
      summary: "Aprenda como pequenas mudanças nos hábitos digitais diários podem fortalecer significativamente sua postura de segurança cibernética pessoal e profissional.",
      image: "https://via.placeholder.com/300x200.png?text=Cyber+Hygiene"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Artigos</h1>
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
            <div className="flex-1 md:pr-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.summary}</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Leia mais</a>
            </div>
            <div className="mt-4 md:mt-0 md:flex-shrink-0">
              <img
                src={post.image}
                alt={`Imagem para ${post.title}`}
                className="rounded-lg object-cover w-full md:w-[300px] h-[200px]"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}