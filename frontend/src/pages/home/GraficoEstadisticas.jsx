import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";
import Cargando from "../../components/Cargando";

// Registrar componentes necesarios de ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraficoEstadisticas = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://clima-backend-plpg.vercel.app/api/data",
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: false,
          }
        );

        const fetchedData = response.data.data;

        const created_at = fetchedData.map((item) =>
          new Date(item.created_at).toLocaleString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
        );
        const temperaturas = fetchedData.map((item) => item.temperatura);
        const humedades = fetchedData.map((item) => item.humedad);

        setChartData({
          labels: created_at,
          datasets: [
            {
              label: "Temperatura (°C)",
              data: temperaturas,
              borderColor: "rgba(219, 17, 31, 1)",
              backgroundColor: "rgba(219, 17, 31, 0.5)",
              yAxisID: "y",
            },
            {
              label: "Humedad (%)",
              data: humedades,
              borderColor: "rgba(123, 241, 245, 1)",
              backgroundColor: "rgba(123, 241, 245, 0.5)",
              yAxisID: "y1",
            },
          ],
        });
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Mediciones en Tiempo Real (Multi Axis)",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false, // Opcional: evita que las líneas de cuadrícula se sobrepongan
        },
      },
    },
  };

  if (!chartData) {
    return (
      <div>
        <Cargando />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Estadísticas de Humedad y Temperatura
      </h2>
      <div className="hidden md:block">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default GraficoEstadisticas;
