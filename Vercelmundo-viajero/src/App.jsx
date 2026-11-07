import React, { useState, useEffect } from 'react';
import './App.css';
import DestinationCard from './DestinationCard';
import ServicioCard from './ServicioCard';
import ContactForm from './ContactForm';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app" style={{ minHeight: '2000px' }}>
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="logo">Mundo Viajero</div>
        <ul className="nav-links">
          <li><a href="#inicio" className="active">Inicio</a></li>
          <li><a href="#destinos">Destinos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* Botón "Volver al inicio" */}
      <button id="back-to-top" 
        onClick={handleScrollToTop} 
        aria-label="Volver al inicio">
        ↑
      </button>

      {/* Portada principal */}
      <header className="hero">
        <div className="hero-content">
          <h1>Descubrí el mundo con nosotros</h1>
          <p>Tu agencia de viajes de confianza. Conocemos los mejores destinos para hacer de tus vacaciones una experiencia inolvidable.</p>
          <a href="#destinos" className="btn-explore">Explorar destinos</a>
        </div>
      </header>

      {/* Sección Destinos */}
      <section id="destinos" className="section">
        <h2>Destinos Turísticos</h2>
        <p style={{ textAlign: 'center', marginBottom: '32px', color: '#666' }}>
          Six destinations to inspire your next adventure
        </p>
        <div className="destinations-grid">
          {[
            { name: 'Mendoza, Argentina', country: 'Argentina', description: 'Terraza de viñedos y aventura andina.', price: '$850', image: 'mendoza', alt: 'Viñedos de Mendoza' },
            { name: 'Bariloche, Argentina', country: 'Argentina', description: 'Naturaleza pura en el corazón de los Andes.', price: '$1,200', image: 'bariloche', alt: 'Lago Bariloche' },
            { name: 'Buenos Aires, Argentina', country: 'Argentina', description: 'La ciudad que nunca duerme.', price: '$650', image: 'buenos-aires', alt: 'Avenida 9 de Julio' },
            { name: 'Río de Janeiro, Brasil', country: 'Brasil', description: 'Cariño a cada paso.', price: '$1,500', image: 'rio-de-janeiro', alt: 'Cristo Redentor' },
            { name: 'París, Francia', country: 'Francia', description: 'Ciudad del amor y las luces.', price: '$2,200', image: 'paris', alt: 'Torre Eiffel' },
            { name: 'Tokio, Japón', country: 'Japón', description: 'Fusión de tradición y tecnología.', price: '$2,800', image: 'tokyo', alt: 'Skyline Tokio' }
          ].map((dest, index) => (
            <DestinationCard key={index} destination={dest} />
          ))}
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="section">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {[
            { titulo: 'Organización de viajes', descripcion: 'Diseñamos itinerarios a medida según tus preferencias y presupuesto, cubriendo todos los detalles de tu viaje.', icono: '🗺️' },
            { titulo: 'Reservas de hoteles', descripcion: 'Acceso a una amplia red de hoteles asociados, desde boutique hasta todo incluido, con mejores garantías y precios.', icono: '🏨' },
            { titulo: 'Paquetes turísticos', descripcion: 'Experiencias completas que combinan transporte, alojamiento y actividades guiadas a precios especializados.', icono: '🎫' },
            { titulo: 'Asesoramiento personalizado', descripcion: 'Consejos expertos de nuestro equipo para ayudarte a elegir el destino perfecto y resolver dudas antes de tu viaje.', icono: '👨‍💼' },
            { titulo: 'Traslados y excursiones', descripcion: 'Servicio de recogida y regreso al aeropuerto, más excursiones guiadas a los principales puntos de interés de cada destino.', icono: '🚖' },
            { titulo: 'Asistencia al viajero', descripcion: 'Cobertura de seguro de viaje que incluye atención médica, pérdida de equipaje y apoyo 24/7 durante tu estadía.', icono: '🆘' }
          ].map((serv, index) => (
            <ServicioCard key={index} servicio={serv} />
          ))}
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="section">
        <ContactForm />
      </section>
    </div>
  )
}

export default App