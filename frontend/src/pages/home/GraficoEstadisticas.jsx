import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
          "https://clima-backend-nine.vercel.app/api/data",
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin":
                "https://proyecto-clima-azure.vercel.app",
            },
            withCredentials: false,
          }
        );

        const fetchedData = response.data.data;

        const created_at = fetchedData.map((item) => item.created_at); // Extract dates
        const temperaturas = fetchedData.map((item) => item.temperatura); // Extract temperatures
        const humedades = fetchedData.map((item) => item.humedad); // Extract humidity

        setChartData({
          labels: created_at,
          datasets: [
            {
              label: "Temperatura (°C)",
              data: temperaturas,
              backgroundColor: "rgba(255, 290, 59, 0.7)",
              borderColor: "rgba(255, 290, 59, 1)",
              borderWidth: 1,
            },
            {
              label: "Humedad (%)",
              data: humedades,
              backgroundColor: "rgba(118, 96, 34, 0.7)",
              borderColor: "rgba(118, 96, 34, 1)",
              borderWidth: 1,
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
        text: "Estadísticas de Medición - Humedad y Temperatura",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (!chartData) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Estadísticas de Humedad y Temperatura
      </h2>
      <div className="hidden md:block">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default GraficoEstadisticas;
