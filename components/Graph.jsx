import React from "react";
import Chart from "react-apexcharts";

const GraphsUI = ({
  color = "#FF0000",
  data = [60, 50, 30, 60, 60, 15, 2, 10, 5, 4, 1],
}) => {
  const fontFamily = "Helvetica, Arial, sans-serif";
  const primaryColor = color;
  const chartData = data;
  const lineOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      type: "line",
      width: "100%",
      height: 350,
      offsetY: 0,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const seriesName = w.config.series[seriesIndex].name;
        const seriesColor = w.config.colors[seriesIndex];

        return `
        <div style="padding: 5px;">
          <span style="height: 10px; width: 10px; background-color: ${seriesColor}; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
          <span>${seriesName}: ${series[seriesIndex][dataPointIndex]}</span>
        </div>
      `;
      },
      style: {
        fontFamily: fontFamily,
      },
    },
    series: [
      {
        name: "Average Sales",
        data: chartData,
      },
    ],
    colors: [primaryColor],
    stroke: {
      curve: "smooth",
      colors: [primaryColor],
      width: 2,
    },
    grid: {
      show: false,
      borderColor: "#f1f1f1",
      padding: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    markers: {
      size: 0,
      colors: [primaryColor],
      strokeWidth: 2,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
    },
  };

  return (
    <div className="absolute left-1 md:left-36">
      <Chart
        options={lineOptions}
        series={lineOptions.series}
        type="line"
        width={100}
        height={100}
      />
    </div>
  );
};

export default GraphsUI;
