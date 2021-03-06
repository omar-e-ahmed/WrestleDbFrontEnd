import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { Grid } from "@material-ui/core";
const ExampleChart = ({ tableData }) => {
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!chartRef) return;
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: tableData.labels,
        datasets: [
          {
            label: [],
            data: tableData.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            yeet: [tableData.array],
          },
        ],
      },
      options: {
        // responsive: true,
        plugins: {
          //  legend: { labels: { padding: "20" } }
        },
        ...tableData.options,
        yeet: tableData.array,
      },
    });
    setMyChart(myChart);
  }, [chartRef]);
  useEffect(() => {
    if (!myChart) return;
    myChart.data.datasets[0].data = tableData.data;
    myChart.update();
  }, [tableData, myChart]);
  return (
    <Grid container className='h-100 w-100'>
      <canvas
        array={tableData}
        ref={chartRef}
        id='myChart'
        height='100%'
        width='100%'
        // height='500'
      />
    </Grid>
  );
};

export default ExampleChart;
