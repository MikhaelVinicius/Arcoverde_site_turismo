import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const AtracaoCard = ({ atracao }) => {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = async () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      alert("Faça login para salvar no seu roteiro!");
      return;
    }


    const res = await fetch(`http://localhost:8080/api/itinerarios/adicionar/${atracao.id}`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (res.ok) {
      setFavorito(!favorito);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden relative">
      <img src={atracao.imagemUrl} alt={atracao.nome} className="w-full h-48 object-cover" />
      

      <button
        onClick={toggleFavorito}
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
      >
        <Heart
          size={24}
          className={favorito ? "fill-laranja text-laranja" : "text-gray-400"}
        />
      </button>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-terracota">{atracao.nome}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {atracao.descricao}
        </p>
      </div>
    </div>
  );
};

export default AtracaoCard;