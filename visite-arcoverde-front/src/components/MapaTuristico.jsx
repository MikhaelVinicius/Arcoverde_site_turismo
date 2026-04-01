import React, { useEffect, useRef } from 'react';

const MapaTuristico = ({ atracoes }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Carrega o mapa apenas quando a API do Google estiver pronta
    if (window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -8.4192, lng: -37.0543 }, // Centro de Arcoverde
        zoom: 14,
        styles: [] // Estilos JSON podem ser adicionados aqui
      });

      // Itera sobre as atrações vindas da base de dados
      atracoes?.forEach(atracao => {
        new window.google.maps.Marker({
          position: { lat: atracao.latitude, lng: atracao.longitude },
          map: map,
          title: atracao.nome,
          icon: 'http://googleusercontent.com/maps.google.com/mapfiles/ms/icons/orange-dot.png'
        });
      });
    }
  }, [atracoes]);

  return (
    <div className="w-full h-96 rounded-lg shadow-inner overflow-hidden" ref={mapRef}>
      {/* O mapa será renderizado dentro desta div */}
    </div>
  );
};

export default MapaTuristico;