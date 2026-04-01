import React from 'react';
import { Music, Cross, Briefcase, Utensils } from 'lucide-react';

const MenuNavegacao = () => {
  const personas = [
    { nome: "Cultura e Tradição", icone: <Music size={32} />, cor: "text-laranja", link: "/cultura" },
    { nome: "Fé e Religiosidade", icone: <Cross size={32} />, cor: "text-terracota", link: "/religioso" },
    { nome: "Negócios & Eventos", icone: <Briefcase size={32} />, cor: "text-azul", link: "/negocios" },
    { nome: "Gastronomia", icone: <Utensils size={32} />, cor: "text-laranja", link: "/gastronomia" }
  ];

  return (
    <section className="py-16 bg-areia">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-terracota mb-12">
          O que você procura em Arcoverde?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <a key={index} href={persona.link}
               className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
              <div className={`p-4 rounded-full bg-gray-50 mb-4 group-hover:bg-gray-100 ${persona.cor}`}>
                {persona.icone}
              </div>
              <h3 className="font-semibold text-gray-800 text-center">{persona.nome}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuNavegacao;