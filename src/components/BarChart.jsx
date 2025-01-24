import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "Kempinski",
      "Raffles JKT",
      "Fairmont  ",
      "Ayana",
      "Fairfield",
      "Langham",
      "Alila",
      "Park Hyatt",
      "The Darmawangsa",
      "The Oddbird",
      "Mulia",
      "The Ritz Carlton",
    ],
    datasets: [
      {
        label: "AR",
        data: [63, 15, 24, 19, 48, 9, 58, 17, 58, 53, 90, 44],
        backgroundColor: "#7086fd",
      },
      {
        label: "Client 1",
        data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        backgroundColor: "#6fd195",
      },
      {
        label: "Client 2",
        data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
        backgroundColor: "#ffae4c",
      },
      {
        label: "Client 3",
        data: [0, 55, 60, 65, 70, 75, 80, 85, 90, 95, 76, 105],
        backgroundColor: "#07dbfa",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          stepSize: 60,
        },
      },
    },
  };

  return (
    <div className="">
      <div>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
};

export default BarChart;

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const BarChart = () => {
//   const canvasRef = useRef(null);

//   const data = {
//     labels: ["January", "February", "March", "April", "May"],
//     datasets: [
//       {
//         label: "Sales",
//         data: [65, 59, 80, 81, 56],
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Monthly Sales Data",
//       },
//       tooltip: {
//         mode: "index",
//         intersect: false,
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     new ChartJS(ctx, {
//       type: "bar",
//       data: data,
//       options: options,
//     });
//   }, []);

//   return (
//     <div>
//       <h2>Sales Bar Chart</h2>
//       <canvas ref={canvasRef} width={600} height={400}></canvas>
//     </div>
//   );
// };

// export default BarChart;
