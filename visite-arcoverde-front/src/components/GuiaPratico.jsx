import React from 'react';
import { MapPin, Sun, FileText } from 'lucide-react';

const GuiaPratico = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-azul mb-8 border-b-2 border-laranja pb-2 inline-block">
          Planeje sua Viagem
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col gap-3">
            <MapPin className="text-laranja" size={40} />
            <h3 className="text-xl font-bold text-gray-800">Como Chegar</h3>
            <p className="text-gray-600">
              A partir do Recife, o trajeto é feito pela <strong>BR-232</strong> (aprox. 256 km). 
              A viagem de carro dura cerca de 3h30 a 4h, em pista duplicada até São Caetano e simples até Arcoverde.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <Sun className="text-laranja" size={40} />
            <h3 className="text-xl font-bold text-gray-800">Clima e Melhor Época</h3>
            <p className="text-gray-600">
              Clima semiárido. Dias quentes e noites amenas (frio agradável no inverno). 
              A melhor época é <strong>Junho</strong> (São João) e <strong>Dezembro</strong> (Natal).
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <FileText className="text-laranja" size={40} />
            <h3 className="text-xl font-bold text-gray-800">Guias em PDF</h3>
            <p className="text-gray-600">
              Baixe nossos mapas e roteiros offline para não depender de internet na zona rural.
            </p>
            <a href="/downloads/guia-arcoverde-2026.pdf" className="text-azul font-semibold hover:underline">
              Baixar Guia Oficial (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuiaPratico;