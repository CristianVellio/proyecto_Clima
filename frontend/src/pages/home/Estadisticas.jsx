import GraficoEstadisticas from "./GraficoEstadisticas";

const Estadisticas = () => {
  return (
    <div className="flex md:flex py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full">
        <h2 className="md:text-5xl text-2xl font-medium mb-7">
          Tablero de Estadisticas
        </h2>
        <div>
          <GraficoEstadisticas />
        </div>
        <div>
          <p>
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
