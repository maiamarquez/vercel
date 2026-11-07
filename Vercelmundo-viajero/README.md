# Mundo Viajero

Página web para una agencia de viajes ficticia, desarrollado como proyecto universitario.

## Descripción

"Mundo Viajero" es una aplicación web completa para una agencia de viajes que muestra destinos turísticos, servicios disponibles y permite contacto mediante un formulario validado. El proyecto fue creado como trabajo universitario para la asignatura de Organización Empresarial, demostrando competencias en desarrollo frontend con tecnologías modernas.

El sitio incluye:
- **Portada principal** con llamada a la acción para explorar destinos
- **Sección de destinos turísticos** con 6 tarjetas (3 nacionales y 3 internacionales)
- **Sección de servicios** con 6 servicios de viaje
- **Formulario de contacto** con validación de campos
- **Navegación suave** entre secciones con efecto "back-to-top"

## Tecnologías utilizadas

- **React 19.3.1**: Biblioteca principal para construir la interfaz de usuario
- **Vite 8.3.6**: Herramienta de desarrollo y build ultrarrápida
- **JavaScript (ES6+)**: Lógica de la aplicación y manejo de estado
- **HTML5**: Estructura semántica de la página
- **CSS3**: Estilos, variables CSS, media queries y animaciones
- **Oxlint**: Validador de código para calidad y estándares

## Características principales

### Diseño y Interfaz de Usuario
- Barra de navegación fija superior con logo "Mundo Viajero"
- Portada hero con título "Descubrí el mundo con nosotros"
- Sección de destinos con 6 tarjetas interactivas (3 nacionales, 3 internacionales)
- Sección de servicios con 6 servicios con iconos representativos
- Formulario de contacto con validación en tiempo real
- Botón "Volver al inicio" para navegación rápida
- Efectos hover y transiciones suaves en todos los elementos interactivos

### Sección de Destinos (3 nacionales + 3 internacionales)
- **Nacionales**: Mendoza, Bariloche, Buenos Aires (Argentina)
- **Internacionales**: Río de Janeiro (Brasil), París (Francia), Tokio (Japón)
- Cada destino tiene: imagen, nombre, descripción, precio ficticio del paquete
- Botón "Ver más" que abre modal con detalles completos

### Sección de Servicios
- 6 servicios: Organización de viajes, Reservas de hoteles, Paquetes turísticos
- Asesoramiento personalizado, Traslados y excursiones, Asistencia al viajero
- Iconos visuales para cada servicio
- Diseño consistente con el resto del proyecto

### Formulario de Contacto
- Campos: Nombre y apellido, Correo electrónico, Teléfono, Destino, Mensaje
- Validación de campos obligatorios
- Validación de formato de correo electrónico
- Mensajes de error mostrados por campo
- Confirmación local al enviar exitosamente
- Reinicio automático del formulario después de 3 segundos
- Información ficticia de contacto de la agencia

### Interactividad y Usabilidad
- Navegación suave por anclas (`scroll-behavior: smooth`)
- Efectos hover en tarjetas y botones
- Botón "Volver al inicio" apareciendo al hacer scroll
- Menú responsive que se adapta a móviles (<768px)
- Carga de imágenes con fallback automático

## Requisitos para instalarlo

### Prerequisites
- Node.js (versión 18 o superior recomendada)
- npm (versión 9 o superior venía incluida con Node.js)

### Instalación
1. Clonar el repositorio: `git clone https://github.com/tu-usuario/mundo-viajero.git`
2. Navegar al directorio del proyecto: `cd mundo-viajero`
3. Instalar dependencias: `npm install`

## Comandos para ejecutarlo localmente

### Desarrollo
- `npm run dev`: Inicia el servidor de desarrollo en `http://localhost:5173`
- El proyecto se recargará automáticamente al hacer cambios (Hot Module Replacement - HMR)

### Producción
- `npm run build`: Genera la versión de producción en la carpeta `dist/`
- `npm run preview`: Vista previa del build de producción en `localhost:4173`

## Comando para generar la versión de producción

```bash
npm run build
```

Esto creará los archivos optimizados en la carpeta `dist/` listos para desplegar en Vercel u otro proveedor de hosting.

---

## Licencia

Proyecto universitario - Organización Empresarial - U5 - Agentes IA