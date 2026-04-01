import React, { useState } from 'react';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import HeroSection from './components/HeroSection';
import MenuNavegacao from './components/MenuNavegacao';
import MapaTuristico from './components/MapaTuristico';
import GuiaPratico from './components/GuiaPratico';
import AtracaoCard from './components/AtracaoCard';

function App() {
  const [telaAtual, setTelaAtual] = useState('publica');
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  const atracoesMock = [
    {
      id: 1,
      nome: "Alto do Cruzeiro",
      descricao: "Ponto mais alto da cidade com vista panorâmica e o tradicional Samba de Coco.",
      latitude: -8.4115,
      longitude: -37.0511,
      imagemUrl: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?w=400&q=80"
    },
    {
      id: 2,
      nome: "CECORA",
      descricao: "Centro Comercial de Arcoverde, o coração da economia e cultura local.",
      latitude: -8.4190,
      longitude: -37.0600,
      imagemUrl: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&q=80"
    },
    {
      id: 3,
      nome: "Samba de Coco Raízes",
      descricao: "Tradição viva da cultura popular arcoverdense com muita música e dança.",
      latitude: -8.4210,
      longitude: -37.0580,
      imagemUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
    }
  ];

  const handleLoginSucesso = () => {
    setEstaAutenticado(true);
    setTelaAtual('admin');
  };

  if (telaAtual === 'login') {
    return (
      <div className="relative">
        <button 
          onClick={() => setTelaAtual('publica')}
          className="absolute top-6 left-6 text-terracota font-bold hover:underline"
        >
          &larr; Voltar ao Portal
        </button>
        <Login onLoginSuccess={handleLoginSucesso} />
      </div>
    );
  }

  if (telaAtual === 'admin' && estaAutenticado) {
    return (
      <div className="relative">
         <button 
          onClick={() => setTelaAtual('publica')}
          className="fixed top-6 right-6 bg-terracota hover:bg-orange-700 text-white px-4 py-2 rounded-lg z-50 shadow-md transition"
        >
          Sair do Painel
        </button>
        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      <button
        onClick={() => setTelaAtual('login')}
        className="fixed bottom-6 right-6 bg-terracota hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold transition-transform hover:scale-105"
      >
        Acesso Restrito
      </button>

      <HeroSection />

      <MenuNavegacao />

      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-terracota mb-12">
          Atrações em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {atracoesMock.map((atracao) => (
            <AtracaoCard key={atracao.id} atracao={atracao} />
          ))}
        </div>
      </section>

      <GuiaPratico />

      <section className="py-16 bg-areia">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-azul mb-12">
            Explore no Mapa
          </h2>
          <MapaTuristico atracoes={atracoesMock} />
        </div>
      </section>
    </div>
  );
}

export default App;