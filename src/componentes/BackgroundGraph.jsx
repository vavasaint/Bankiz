import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const BackgroundGraph = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Donut Chart Example</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default BackgroundGraph;
