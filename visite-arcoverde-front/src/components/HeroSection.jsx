import React from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Vídeo de Fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover opacity-80"
      >
        <source src="/videos/arcoverde-hero.mp4" type="video/mp4" />
        O teu navegador não suporta o video.
      </video>
      
      {/* Overlay Escuro para destacar o texto */}
      <div className="absolute z-10 w-full h-full bg-black bg-opacity-40"></div>
      
      {/* Conteúdo Central */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
          Descubra o Portal do Sertão
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-light drop-shadow-md">
          A capital do Samba de Coco, da fé no Cruzeiro e do maior São João do interior.
        </p>
        
        {/* Barra de Busca Inteligente */}
        <div className="flex bg-white rounded-full p-2 max-w-2xl mx-auto shadow-2xl">
          <input
            type="text"
            placeholder="Buscar por restaurantes, hotéis ou festas..."
            className="flex-grow px-6 py-3 rounded-l-full text-gray-800 focus:outline-none"
          />
          <button className="bg-laranja hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition flex items-center gap-2">
            <Search size={20} /> Explorar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;