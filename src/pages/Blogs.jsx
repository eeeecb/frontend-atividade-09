export default function Blogs() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog Articles</h1>
      <ul className="space-y-4">
        <li className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">First Blog Post</h2>
          <p className="text-gray-300">This is a summary of the first blog post...</p>
        </li>
        <li className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Second Blog Post</h2>
          <p className="text-gray-300">This is a summary of the second blog post...</p>
        </li>
      </ul>
    </div>
  )
}