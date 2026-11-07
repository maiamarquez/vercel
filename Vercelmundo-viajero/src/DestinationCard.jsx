import React from 'react';
import './DestinationCard.css';

const destinations = [
  {
    id: 1,
    name: 'Mendoza, Argentina',
    country: 'Argentina',
    description: 'Terraza de viñedos y aventura andina. Descubre el Gran Valle de la Uco y sus vinos premiados.',
    price: '$850',
    image: 'mendoza',
    alt: 'Viñedos de Mendoza'
  },
  {
    id: 2,
    name: 'Bariloche, Argentina',
    country: 'Argentina',
    description: 'Naturaleza pura en el corazón de los Andes. Lago Nahuel Huapi, chocolate artesanal y esquí de clase mundial.',
    price: '$1,200',
    image: 'bariloche',
    alt: 'Lago Bariloche con montañas'
  },
  {
    id: 3,
    name: 'Buenos Aires, Argentina',
    country: 'Argentina',
    description: 'La ciudad que nunca duerme. Tango, gastronomía y la arquitectura elegante de la época dorada.',
    price: '$650',
    image: 'buenos-aires',
    alt: 'Skirts of Avenida 9 de Julio'
  },
  {
    id: 4,
    name: 'Río de Janeiro, Brasil',
    country: 'Brasil',
    description: 'Cariño a cada paso. El Cristo Redentor, Copacabana y la energía única de la ciudad maravillosa.',
    price: '$1,500',
    image: 'rio-de-janeiro',
    alt: 'Cristo Redentor sobre Río de Janeiro'
  },
  {
    id: 5,
    name: 'París, Francia',
    country: 'Francia',
    description: 'Ciudad del amor y las luces. Torre Eiffel, Museo del Louvre y románticos paseos por Sena.',
    price: '$2,200',
    image: 'paris',
    alt: 'Torre Eiffel al atardecer'
  },
  {
    id: 6,
    name: 'Tokio, Japón',
    country: 'Japón',
    description: 'La fusión perfecta de tradición y tecnología. Santuarios antiguos, rascacielos y la experiencia de la ciudad más vibrante del mundo.',
    price: '$2,800',
    image: 'tokyo',
    alt: 'Skyline de Tokio'
  }
];

export default function DestinationCard({ destination }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="destination-card" onclick={() => setIsModalOpen(true)}>
      <div className="card-image">
        <img 
          src={`/src/assets/${destination.image}.jpg`} 
          alt={destination.alt} 
          loading="lazy"
          onError={e => { e.target.src = '/src/assets/placeholder.jpg'; }}
        />
        <div className="card-overlay">
          <span className="country">{destination.country}</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{destination.name}</h3>
        <p className="card-description">{destination.description}</p>
        <div className="card-price">{destination.price}</div>
        <button className="btn-ver-mas" onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
        }}>
          Ver más
        </button>
      </div>
    </div>
  );
}

export function useDestinationModal(destination) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
    setIsOpen
  };
}

export function DestinationModal({ destination, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{destination.name}</h2>
        <img 
          src={`/src/assets/${destination.image}.jpg`} 
          alt={destination.alt} 
          loading="lazy"
        />
        <p>{destination.description}</p>
        <p><strong>Paquete:</strong> {destination.price}</p>
        <p><strong>País:</strong> {destination.country}</p>
        <button className="btn-cerrar-modal" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}