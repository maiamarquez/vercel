import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    destino: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errores = {};

    // Validar nombre y apellido (obligatorio, mínimo 2 caracteres)
    if (!formData.nombre || formData.nombre.trim().length < 2) {
      errores.nombre = 'Por favor ingrese su nombre y apellido (mínimo 2 caracteres)';
    }

    // Validar email (obligatorio y formato válido)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errores.email = 'Por favor ingrese un correo electrónico válido';
    }

    // Validar teléfono (opcional, pero si se proporciona debe tener un mínimo)
    if (formData.telefono && formData.telefono.trim().length < 5) {
      errores.telefono = 'El teléfono debe tener al menos 5 caracteres';
    }

    // Validar destino de interés (obligatorio)
    if (!formData.destino || formData.destino.trim().length === 0) {
      errores.destino = 'Por favor seleccione un destino de interés';
    }

    // Validar mensaje (obligatorio, mínimo 10 caracteres)
    if (!formData.mensaje || formData.mensaje.trim().length < 10) {
      errores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(errores);
    return Object.keys(errores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setShowConfirmation(false);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          destino: '',
          mensaje: ''
        });
        setErrors({});
      }, 3000);
    }
  };

  // Limpiar errores cuando el usuario empieza a escribir
  const campos = ['nombre', 'email', 'telefono', 'destino', 'mensaje'];
  campos.forEach(campo => {
    if (formData[campo] !== undefined) {
      // Este efecto se aplicaría en un uso más completo
    }
  });

  return (
    <div className="contact-form-wrapper">
      {showConfirmation ? (
        <div className="confirmation-message">
          <h2>¡Gracias!</h2>
          <p>Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo pronto.</p>
          <button className="btn-continuar" onClick={() => setShowConfirmation(false)}>
            Volver al sitio
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contacto</h2>
          <p>Estamos para ayudarte a planificar tu próxima aventura</p>
          
          <div className="form-group">
            <label htmlFor="nombre">Nombre y Apellido *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. Juan Pérez"
              required
            />
            {errors.nombre && <p className="error-message">{errors.nombre}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@email.com"
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+54 9 11 4567-8900"
            />
            {errors.telefono && <p className="error-message">{errors.telefono}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="destino">Destino de Interés *</label>
            <select
              id="destino"
              name="destino"
              value={formData.destino}
              onChange={handleChange}
              required
            >
              <option value="">-- Seleccionar un destino --</option>
              <option value="Mendoza, Argentina">Mendoza, Argentina</option>
              <option value="Bariloche, Argentina">Bariloche, Argentina</option>
              <option value="Buenos Aires, Argentina">Buenos Aires, Argentina</option>
              <option value="Río de Janeiro, Brasil">Río de Janeiro, Brasil</option>
              <option value="París, Francia">París, Francia</option>
              <option value="Tokio, Japón">Tokio, Japón</option>
            </select>
            {errors.destino && <p className="error-message">{errors.destino}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tus planes de viaje..."
              required
            ></textarea>
            {errors.mensaje && <p className="error-message">{errors.mensaje}</p>}
          </div>

          <button type="submit" className="btn-enviar">
            Enviar Mensaje
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;