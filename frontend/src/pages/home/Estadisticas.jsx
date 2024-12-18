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
      <div className="md:flex md:items-start md:justify-between py-6 gap-8 w-full max-w-7xl">
        {/* Contenedor del gráfico */}
        <div className="md:w-2/3 w-full">
          <GraficoEstadisticas />
        </div>

        {/* Contenedor del párrafo y la imagen */}
        <div className="md:w-1/3 w-full flex flex-col gap-6 items-start">
          <img
            src={Irrigo2}
            alt="Irrigo"
            className="rounded-md w-full object-cover h-40 md:h-60"
          />
          <p className="text-lg text-gray-700 leading-relaxed">
            El gráfico de estadísticas es un diagrama de barras diseñado para
            visualizar los valores de temperatura (en grados Celsius) y humedad
            (en porcentaje) recopilados de las mediciones de un sistema de
            monitoreo ambiental IoT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
