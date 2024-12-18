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

// Registrar los módulos necesarios para el gráfico de línea
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
              yAxisID: "y1",
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              tension: 0.4,
            },
            {
              label: "Humedad (%)",
              data: humedades,
              yAxisID: "y2",
              borderColor: "rgba(54, 162, 235, 1)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              tension: 0.4,
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
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Medición en Tiempo Real: Temperatura y Humedad",
      },
    },
    scales: {
      y1: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Temperatura (°C)",
        },
        ticks: {
          beginAtZero: true,
        },
      },
      y2: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Humedad (%)",
        },
        ticks: {
          beginAtZero: true,
        },
        grid: {
          drawOnChartArea: false, // Evita que las líneas de la escala y2 se superpongan con y1
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
      <Line data={chartData} options={options} />
    </div>
  );
};

export default GraficoEstadisticas;
