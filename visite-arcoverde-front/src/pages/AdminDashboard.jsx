import React, { useState, useEffect } from 'react';
import { PlusCircle, Image as ImageIcon, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState('');

  // Hook de Efeito para buscar categorias ao carregar
  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    const res = await fetch('http://localhost:8080/api/categorias');
    const data = await res.json();
    setCategorias(data);
  };

  const handleCriarCategoria = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken'); // Token salvo no login

    await fetch('http://localhost:8080/api/admin/categorias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ nome: novaCategoria })
    });

    setNovaCategoria('');
    fetchCategorias(); // Recarrega a lista
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-terracota mb-8">Painel Administrativo</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card: Gestão de Categorias */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-laranja">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <PlusCircle className="text-laranja" /> Nova Categoria
          </h2>
          <form onSubmit={handleCriarCategoria} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ex: Religioso, Aventura"
              className="border p-2 rounded"
              value={novaCategoria}
              onChange={(e) => setNovaCategoria(e.target.value)}
            />
            <button type="submit" className="bg-laranja text-white py-2 rounded hover:bg-orange-600 transition">
              Adicionar
            </button>
          </form>
          <ul className="mt-4 text-sm text-gray-600">
            {categorias.map(cat => (
              <li key={cat.id} className="py-1 border-b">{cat.nome}</li>
            ))}
          </ul>
        </div>

        {/* Card: Upload de Imagens (Supabase) */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-azul">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <ImageIcon className="text-azul" /> Upload de Mídia
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Envie fotos do São João, Samba de Coco ou pontos turísticos.
          </p>
          <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-azul hover:file:bg-blue-100" />
          <button className="mt-4 w-full bg-azul text-white py-2 rounded hover:bg-blue-700 transition">
            Enviar para Bucket
          </button>
        </div>

        {/* Card: Calendário de Eventos */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-terracota">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Calendar className="text-terracota" /> Ciclo Junino & Natal
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Gerencie as datas oficiais da Festa da Efapi e do São João.
          </p>
          <button className="w-full bg-terracota text-white py-2 rounded hover:bg-red-800 transition">
            Abrir Calendário
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;