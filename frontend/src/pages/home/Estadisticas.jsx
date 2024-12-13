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
      </div>
    </div>
  );
};

export default Estadisticas;
