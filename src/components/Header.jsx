import { Pencil } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="flex items-center justify-center space-x-4">
        <Pencil className="text-blue-400 cursor-pointer" />
        <h1 className="text-2xl font-bold text-blue-400">Atividade 09 | Rotas</h1>
      </div>
    </header>
  );
}
