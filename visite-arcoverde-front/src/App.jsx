import HeroSection from './components/HeroSection';
import MenuNavegacao from './components/MenuNavegacao';
import MapaTuristico from './components/MapaTuristico';

function App() {
  return (
    <div>
      <HeroSection />
      <MenuNavegacao />
    
      <MapaTuristico atracoes={[]} /> 
    </div>
  );
}

export default App;