"use client";
import { Line } from 'react-chartjs-2';

const StockChart = ({ stockData }) => {
  const data = {
    labels: stockData.map(day => day.date),
    datasets: [
      {
        label: 'Stock Price',
        data: stockData.map(day => day.close.toFixed(2)), // Format to 2 decimal places
        borderColor: '#42A5F5',
        fill: false,
      }
    ]
  };

  return <Line data={data} />;
};

export default StockChart;
