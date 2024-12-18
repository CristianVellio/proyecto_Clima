import GraficoEstadisticas from "./GraficoEstadisticas";

const Estadisticas = () => {
  return (
    <div className="flex flex-col py-16 items-center gap-12">
      {/* Título centrado */}
      <h2 className="text-center md:text-5xl text-2xl font-medium mb-7">
        Tablero de Estadísticas
      </h2>

      {/* Contenido principal: Gráfico y Descripción */}
      <div className="md:flex md:items-center md:justify-between gap-12 w-full">
        {/* Contenedor del gráfico */}
        <div className="md:w-1/2 w-full">
          <GraficoEstadisticas />
        </div>

        {/* Contenedor del párrafo */}
        <div className="md:w-1/2 w-full">
          <p className="text-lg text-gray-700">
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
