import React from 'react';
import './ServicioCard.css';

const servicios = [
  {
    id: 1,
    titulo: 'Organización de viajes',
    descripcion: 'Diseñamos itinerarios a medida según tus preferencias y presupuesto, cubriendo todos los detalles de tu viaje.',
    icono: '🗺️'
  },
  {
    id: 2,
    titulo: 'Reservas de hoteles',
    descripcion: 'Acceso a una amplia red de hoteles asociados, desde boutique hasta todo incluido, con mejores garantías y precios.',
    icono: '🏨'
  },
  {
    id: 3,
    titulo: 'Paquetes turísticos',
    descripcion: 'Experiencias completas que combinan transporte, alojamiento y actividades guiadas a precios especializados.',
    icono: '🎫'
  },
  {
    id: 4,
    titulo: 'Asesoramiento personalizado',
    descripcion: 'Consejos expertos de nuestro equipo para ayudarte a elegir el destino perfecto y resolver dudas antes de tu viaje.',
    icono: '👨‍💼'
  },
  {
    id: 5,
    titulo: 'Traslados y excursiones',
    descripcion: 'Servicio de recogida y regreso al aeropuerto, más excursiones guiadas a los principales puntos de interés de cada destino.',
    icono: '🚖'
  },
  {
    id: 6,
    titulo: 'Asistencia al viajero',
    descripcion: 'Cobertura de seguro de viaje que incluye atención médica, pérdida de equipaje y apoyo 24/7 durante tu estadía.',
    icono: '🆘'
  }
];

export default function ServicioCard({ servicio }) {
  return (
    <div className="service-card">
      <div className="icono-servicio">
        {servicio.icono}
      </div>
      <h3>{servicio.titulo}</h3>
      <p>{servicio.descripcion}</p>
    </div>
  );
}