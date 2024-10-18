export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Contato</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
          <input type="text" id="name" name="name" placeholder="Nome" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
          <textarea id="message" name="message" rows="4" placeholder="Sua mensagem aqui..." className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Enviar Mensagem</button>
      </form>
    </div>
  )
}