import BannerImg from "../../assets/BannerImg3.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={BannerImg} alt="banner" className="rounded-sm" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          Estacion Meteorologica Simple
        </h1>
        <p className="mb-10 ">
          Nuestra Estación Meteorológica es un sistema innovador diseñado para
          monitorear y registrar condiciones climáticas en tiempo real. Utiliza
          sensores de última generación para medir temperatura y humedad,
          integrándose perfectamente con una base de datos en la nube alojada en
          Supabase. <br /> El sistema aprovecha la conectividad IoT para enviar
          datos automáticamente al backend, donde se procesan y almacenan. Los
          resultados se visualizan en un dashboard interactivo desarrollado con
          tecnologías modernas como React y Chart.js, permitiendo un análisis
          claro y preciso de las condiciones climáticas. <br /> Este proyecto
          combina eficiencia energética, tecnología de punta, y accesibilidad,
          ideal tanto para aplicaciones urbanas como remotas, con el objetivo de
          fomentar una mayor comprensión y manejo de nuestro entorno.
        </p>
        <button className="btn-primary">Suscribirse</button>
      </div>
    </div>
  );
};

export default Banner;
