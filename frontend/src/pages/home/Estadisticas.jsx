import GraficoEstadisticas from "./GraficoEstadisticas";
import Irrigo2 from "../../assets/Irrigo2.png";

const Estadisticas = () => {
  return (
    <div className="flex flex-col py-16 items-center gap-12">
      {/* Título centrado */}
      <h2 className="text-center md:text-5xl text-2xl font-medium mb-7">
        Tablero de Estadísticas
      </h2>

      {/* Contenido principal: Gráfico y Descripción */}
      <div className="md:flex md:items-stretch md:justify-between py-8 gap-8 w-full max-w-7xl">
        {/* Contenedor del gráfico y la imagen */}
        <div className="relative md:w-2/3 w-full">
          {/* Imagen como fondo */}
          <img
            src={Irrigo2}
            alt="Irrigo"
            className="rounded-md w-full object-cover h-64 md:h-96"
          />

          {/* Gráfico superpuesto */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 md:bg-transparent rounded-md">
            <div className="w-11/12 md:w-full bg-white/90 md:bg-transparent shadow-md md:shadow-none rounded-md p-4 md:p-0">
              <GraficoEstadisticas />
            </div>
          </div>
        </div>

        {/* Contenedor del párrafo */}
        <div className="md:w-1/3 w-full flex flex-col gap-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            El gráfico de estadísticas es un diagrama de líneas diseñado para
            visualizar los valores de temperatura (en grados Celsius) y humedad
            (en porcentaje) recopilados de las mediciones de un sistema de
            monitoreo ambiental IoT. <br />
            Proporciona una manera clara y visual de comparar las fluctuaciones
            de temperatura y humedad en intervalos de tiempo específicos;
            ayudando a identificar tendencias o anomalías en las condiciones
            ambientales registradas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
