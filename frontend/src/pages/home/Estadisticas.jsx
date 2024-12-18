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
      <div className="flex flex-col md:flex-row md:items-stretch md:justify-between py-8 gap-8 w-full max-w-7xl">
        {/* Contenedor del gráfico */}
        <div className="w-full md:w-2/3 flex flex-col items-center">
          <GraficoEstadisticas />
        </div>

        {/* Contenedor del párrafo y la imagen */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {/* Imagen, que se mueve debajo del gráfico en pantallas grandes */}
          <img
            src={Irrigo2}
            alt="Irrigo"
            className="rounded-md w-full object-cover h-40 md:h-60"
          />
          {/* Descripción */}
          <p className="text-lg text-gray-700 leading-relaxed">
            El gráfico de estadísticas es un diagrama de axis multi linea
            diseñado para visualizar los valores de temperatura (en grados
            Celsius) y humedad (en porcentaje) recopilados de las mediciones de
            un sistema de monitoreo ambiental IoT. <br />
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
