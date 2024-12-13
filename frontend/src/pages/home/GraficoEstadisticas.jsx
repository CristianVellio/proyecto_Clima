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
    // Fetch data from your backend API
    axios
      .get("http://127.0.0.1:8000/api/data")
      .then((response) => {
        const fetchedData = response.data.data; // Assuming API response structure

        const created_at = fetchedData.map((item) => item.created_at); // Extract dates
        const temperaturas = fetchedData.map((item) => item.temperatura); // Extract temperatures
        const humedades = fetchedData.map((item) => item.humedad); // Extract humidity

        setChartData({
          labels: created_at,
          datasets: [
            {
              label: "Temperatura (°C)",
              data: temperaturas,
              backgroundColor: "rgba(54, 162, 235, 0.7)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Humedad (%)",
              data: humedades,
              backgroundColor: "rgba(255, 99, 132, 0.7)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
