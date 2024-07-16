import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Datos de ejemplo, cambiar por tus datos reales
    const data = [
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo',
      'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo', 'alto', 'bajo', 'normal', 'ligeramente-alto', 'ligeramente-bajo'
    ];

    // Mapeo de estados a valores numéricos
    const valueMap = {
      'alto': 2,
      'bajo': -2,
      'normal': 0,
      'ligeramente-alto': 1,
      'ligeramente-bajo': -1
    };

    // Calcular el promedio por cada hora
    const hourlyAverages = [];
    for (let hour = 0; hour < 24; hour++) {
      const startIndex = hour * 6; // Cada hora tiene 6 datos
      const endIndex = startIndex + 6;
      const hourData = data.slice(startIndex, endIndex);
      
      const sum = hourData.reduce((acc, state) => acc + valueMap[state], 0);
      const average = sum / hourData.length;
      hourlyAverages.push(average);
    }

    // Etiquetas para las horas del día
    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

    // Configuración del gráfico de barras
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Promedio por Hora',
          data: hourlyAverages,
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo de las barras
          borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1 // Pasos de 1 en el eje Y
            }
          }
        }
      }
    });

    // Función de limpieza para destruir la instancia del gráfico al desmontar el componente
    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default MyChart;
