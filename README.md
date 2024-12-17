<h1 align="center"> Proyecto Estación Meteorológica 🌤️ </h1>

<div align="center">
<img src="https://github.com/user-attachments/assets/b1a741c9-742b-45f8-a66d-9932fae553f5" alt="Estacion_Meteorologica" width="300" height="150">
<img src="https://github.com/user-attachments/assets/bbc762b9-b93d-4cf5-b790-ede91bc3a098" alt="Wokwi" width="300" height="150">
</div>

<h2 align="center"> Introducción </h2>

El proyecto **Estación Meteorológica** es un sistema IoT diseñado para monitorear y visualizar datos ambientales en tiempo real. Este proyecto consta de tres etapas principales: 

1. **Simulación del hardware en Wokwi**: Configuración inicial y validación del ESP32 y los sensores.
2. **Integración con Supabase**: Escalado hacia una base de datos en la nube para almacenamiento y gestión de datos.
3. **Desarrollo del Frontend**: Implementación de una interfaz web para la visualización interactiva de los datos recopilados.

Este enfoque escalonado asegura la validación de cada componente antes de su integración, permitiendo un desarrollo robusto y eficiente del sistema.
Puedes visitar nuestro proyecto [aqui](https://proyecto-clima-azure.vercel.app/)

---

<H2 align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="40" height="40"/> Etapa Inicial: Desarrollo en Wokwi 🛠️ </H2>

La primera etapa del proyecto se llevó a cabo en [Wokwi](https://wokwi.com/), una plataforma en línea para simular proyectos con microcontroladores. En esta fase se realizó:

- **Configuración del ESP32**: Programación inicial para leer datos de sensores, con MicroPython.
- **Implementación de Sensores**: Integración de un sensor DHTT para la temperatura y la humedad.
- **Simulación de datos**: Pruebas de lecturas y envíos de datos simulados.
- **Conexión simulada a una red Wi-Fi**: Preparación para la comunicación con la base de datos en etapas posteriores.

Puedes explorar la simulación en detalle [aquí](https://wokwi.com/projects/416590054597285889).

Esta etapa fue crucial para validar el diseño inicial del sistema y garantizar que los componentes funcionen correctamente antes de avanzar hacia la integración con una base de datos real.

---

<h2 align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="40" height="40"/>  Backend <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" width="40" height="40"/> </h2>

El backend del proyecto conecta el ESP32 con una base de datos **PostgreSQL** en **Supabase**, donde se almacenan todos los registros ambientales enviados desde el microcontrolador. Esta capa intermedia garantiza una comunicación fluida y segura entre el hardware y los datos en la nube.

### **Funcionalidades**

1. **Conexión ESP32 a Supabase**:
   - Los datos ambientales (temperatura, humedad) se envían al servidor mediante HTTP.
   - Uso de autenticación por claves API para asegurar la integridad de los datos.

2. **Gestión de la Base de Datos**:
   - Almacenamiento estructurado y consultas rápidas mediante PostgreSQL.
   - Funcionalidades CRUD para la gestión de registros.

3. **Optimización de la Transferencia de Datos**:
   - Implementación de intervalos de envío configurables desde el ESP32 para optimizar el uso de red y recursos.

Puedes visitar el deploy del Backend [aquí](https://clima-backend-plpg.vercel.app/api/data).

### **Dependencias del Backend**
- **[PostgreSQL](https://www.postgresql.org/):** Motor de base de datos utilizado en Supabase.
- **[Supabase](https://supabase.com/):** Plataforma backend para autenticación y almacenamiento.
- **[FastAPI Framework](https://fastapi.tiangolo.com/):** Para la creacion y manejo ApiREST.

---

<h2 align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="40" height="40"/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="40" height="40"/> Frontend <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" width="40" height="40"/> </h2>

El frontend está diseñado para ofrecer una experiencia intuitiva y moderna, permitiendo a los usuarios visualizar datos en tiempo real a través de gráficos y dashboards dinámicos.

### **Funcionalidades**

1. **Visualización en Tiempo Real**:
   - Representación gráfica de los datos ambientales utilizando **chart.js** y **react-chartjs-2**.

2. **Interfaz Intuitiva**:
   - Componentes modulares y diseño responsivo con **TailwindCSS**.
   - Panel principal con métricas clave y tendencias históricas.

3. **Interacción con la Base de Datos**:
   - Recuperación de registros directamente desde Supabase mediante **Axios**.
   - Actualización automática de gráficos.


Puedes visitar el deploy del Frontend [aquí](https://proyecto-clima-azure.vercel.app/).


### **Dependencias del Frontend**
- **[React](https://reactjs.org/):** Biblioteca principal para la interfaz.
- **[React Router](https://reactrouter.com/):** Manejo de rutas.
- **[Axios](https://axios-http.com/):** Comunicación con el backend.
- **[Chart.js](https://www.chartjs.org/):** Visualización de datos.
- **[TailwindCSS](https://tailwindcss.com/):** Diseño responsivo y moderno.

---

<h2 align="center"> Comunicación del Sistema 🔄 </h2>

1. **Microcontrolador ESP32**:
   - Recolecta datos de los sensores y los envía a Supabase mediante solicitudes HTTP.
   - Configuración de autenticación y claves API para acceso seguro.

2. **Base de Datos en Supabase**:
   - Almacena los datos enviados por el ESP32.
   - Proporciona endpoints para acceder y gestionar los registros desde el frontend.

3. **Frontend**:
   - Consulta los datos desde Supabase y los representa en gráficos interactivos.
   - Gráficos dinámicas basadas en los datos más recientes.


      - Microcontrolador: [Wokwi](https://wokwi.com/) 
      - Backend: [Vercel](https://vercel.com/) 
      - Frontend: [Vercel](https://vercel.com/)

---

<h2 align="center"> Aplicaciones del Proyecto 🌍 </h2>

El proyecto tiene múltiples aplicaciones en diferentes campos, como:
- **Monitoreo Ambiental**: Supervisión de condiciones climáticas en tiempo real.
- **Agricultura Inteligente**: Control de humedad y calidad del aire en invernaderos.
- **Ciudades Inteligentes**: Integración en redes urbanas para monitoreo de calidad del aire.
- **Educación y Experimentación**: Base para estudios relacionados con IoT y análisis de datos.

---
