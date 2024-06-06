import React from 'react';
import { useLocation } from 'react-router-dom';

const Rondas: React.FC = () => {
  const location = useLocation(); // Obtiene la instancia de useLocation
  const equipos = location.state.equipos; // Obtiene los datos de los equipos desde la ubicación

  const generarRondas = () => {
    // Tu lógica para generar las rondas
    const peleas: string[] = [];
    for (let i = 0; i < equipos.length - 1; i++) {
      for (let j = i + 1; j < equipos.length; j++) {
        const equipo1 = equipos[i];
        const equipo2 = equipos[j];
        for (let k = 0; k < equipo1.pesos.length; k++) {
          if (equipo1.pesos[k] === equipo2.pesos[k]) {
            peleas.push(`Equipo ${equipo1.nombreEquipo} vs Equipo ${equipo2.nombreEquipo}: Anillo ${k + 1} vs Anillo ${k + 1}`);
          }
        }
      }
    }
    return peleas;
  };

  return (
    <div>
      <h1>Rondas</h1>
      <ul>
        {generarRondas().map((pelea, index) => (
          <li key={index}>{pelea}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rondas;
