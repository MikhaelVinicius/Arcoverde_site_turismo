import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import HeroSection from './components/HeroSection';
import MenuNavegacao from './components/MenuNavegacao';
import MapaTuristico from './components/MapaTuristico';
import GuiaPratico from './components/GuiaPratico';
import AtracaoCard from './components/AtracaoCard';

function App() {
  const [mostrarLogin, setMostrarLogin] = useState(true);
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [atracoes, setAtracoes] = useState([]);

  useEffect(() => {
    const dadosSimulados = [
      {
        id: 1,
        nome: "Alto do Cruzeiro",
        descricao: "Ponto mais alto da cidade com vista panorâmica e o tradicional Samba de Coco.",
        latitude: -8.4115,
        longitude: -37.0511,
        imagemUrl: "https://via.placeholder.com/400x300?text=Alto+do+Cruzeiro"
      },
      {
        id: 2,
        nome: "CECORA",
        descricao: "Centro Comercial de Arcoverde, o coração da economia e cultura local.",
        latitude: -8.4190,
        longitude: -37.0600,
        imagemUrl: "https://via.placeholder.com/400x300?text=CECORA"
      }
    ];
    setAtracoes(dadosSimulados);
  }, []);

  const handleLoginSucesso = () => {
    setEstaAutenticado(true);
    setMostrarLogin(false);
  };

  if (mostrarLogin && !estaAutenticado) {
    return <Login onLoginSuccess={handleLoginSucesso} />;
  }

  if (!mostrarLogin && estaAutenticado) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <HeroSection />

      <MenuNavegacao />

      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-terracota mb-12">
          Atrações em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {atracoes.map((atracao) => (
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
          <MapaTuristico atracoes={atracoes} />
        </div>
      </section>
    </div>
  );
}

export default App;