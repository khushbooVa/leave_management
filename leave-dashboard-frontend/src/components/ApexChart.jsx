import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = ({ value }) => {
  const [chartOptions, setChartOptions] = useState({
    series: [], 
    colors: ["#1C64F2", "orange", "grey"],
    chart: {
      height: 620,
      type: "pie",
    },
    stroke: {
      colors: ["#ffffff"],
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: ["Sick", "Casual", "Earned leave"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}%`,
      },
    },
    xaxis: {
      labels: {
        formatter: (value) => `${value}%`,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  });

  useEffect(() => {
    if (value?.length > 0) {
      calculatePercentage();
    }
  }, [value]);

  const calculatePercentage = () => {
    const val = value?.map((value) => parseFloat(((value / 25) * 100).toFixed(2))); 
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      series: val,
    }));
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
        <div className="flex justify-center items-center w-full mb-4">
          <p className="text-sm font-bold text-center">Leaves</p>
        </div>
        <div id="pie-chart">
          <Chart options={chartOptions} series={chartOptions.series} type="pie" />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
