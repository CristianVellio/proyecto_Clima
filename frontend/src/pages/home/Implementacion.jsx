const Implementacion = () => {
  return (
    <div className="flex flex-col md:flex-row py-16 justify-between items-center gap-12">
      {/* <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Rf_knQPKKl8?si=3NqMJOxIaAvx83sj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div> */}
      <div className="md:w-1/2 w-full">
        <h2 className="md:text-5xl text-2xl font-medium mb-7">
          Casos de usos prácticos de esta tecnología
        </h2>
        <p className="mb-10 text-lg leading-relaxed">
          Las estaciones meteorológicas que utilizan sensores como el DHT22 son
          herramientas valiosas en el mundo de la agricultura, especialmente
          para la gestión y optimización de los cultivos. Estos sensores, que
          miden la temperatura y la humedad del aire, permiten a los
          agricultores monitorear las condiciones ambientales en tiempo real, lo
          cual es crucial para tomar decisiones informadas sobre el manejo de
          los cultivos. Por ejemplo, con estos datos, es posible automatizar el
          sistema de riego, activando el riego solo cuando la temperatura es
          alta y la humedad es baja, lo que garantiza un uso eficiente del agua
          y evita tanto el exceso como la falta de riego. <br /> Además, el
          DHT22 puede ayudar a prevenir enfermedades y plagas, ya que muchas de
          ellas están relacionadas con ciertas condiciones de temperatura y
          humedad. Monitoreando estos factores, los agricultores pueden detectar
          momentos en los que las condiciones sean propicias para el crecimiento
          de patógenos o plagas, permitiendo una intervención temprana y
          reduciendo la necesidad de pesticidas. Este monitoreo también es
          fundamental para optimizar el momento de la cosecha, ya que la
          temperatura y la humedad influyen en la calidad y la cantidad de los
          cultivos, ayudando a los agricultores a determinar el mejor momento
          para recoger sus productos. <br /> En el contexto de la agricultura de
          precisión, las estaciones meteorológicas con sensores como el DHT22
          pueden integrarse con otros sistemas, como imágenes satelitales o
          sensores de suelo, para ofrecer una visión completa y detallada de las
          condiciones del terreno y los cultivos. Esto permite intervenciones
          más específicas, como aplicar fertilizantes o tratamientos solo en las
          zonas que realmente lo necesiten, lo que no solo mejora la eficiencia,
          sino que también reduce el impacto ambiental. <br /> Para cultivos
          protegidos, como los que se encuentran en invernaderos, las estaciones
          meteorológicas pueden ayudar a gestionar el microclima. El sensor
          DHT22 permite controlar la temperatura y humedad dentro del
          invernadero, activando sistemas de ventilación, calefacción o
          humidificación para mantener el ambiente ideal para el crecimiento de
          las plantas. Este control preciso del entorno puede mejorar
          significativamente la productividad y la calidad de los cultivos.{" "}
          <br />
          Además, estas estaciones meteorológicas pueden integrarse con sistemas
          de alerta temprana para predecir fenómenos climáticos adversos, como
          heladas o tormentas. Gracias a las alertas en tiempo real, los
          agricultores pueden tomar medidas preventivas, protegiendo sus
          cultivos antes de que el clima afecte su desarrollo. También se puede
          optimizar el uso de energía en sistemas de riego y climatización, ya
          que los datos de temperatura y humedad pueden guiar la activación de
          estos sistemas solo cuando realmente sea necesario. <br /> Las
          estaciones meteorológicas con sensores como el DHT22 ofrecen una
          solución integral para mejorar la gestión agrícola. Mediante el
          monitoreo de variables ambientales, los agricultores pueden optimizar
          recursos como el agua, mejorar la calidad de sus cosechas, prevenir
          enfermedades y plagas, y tomar decisiones más precisas y sostenibles
          en sus operaciones. Con la posibilidad de integrar estos sistemas en
          plataformas de agricultura de precisión, también es posible hacer un
          uso más eficiente de la tecnología, asegurando un futuro más
          productivo y respetuoso con el medio ambiente en la agricultura.
        </p>
      </div>
    </div>
  );
};

export default Implementacion;
