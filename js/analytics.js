// Include Chart.js in CodePen JS settings: https://cdn.jsdelivr.net/npm/chart.js

const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Shipping', 'Customs', 'Tax', 'Misc'],
    datasets: [{
      label: 'Cost (€)',
      data: [4500, 2140, 900, 650],
      backgroundColor: ['#22c55e','#2563eb','#facc15','#f97316']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May'],
    datasets: [{
      label: 'Lead Time (days)',
      data: [12,15,14,13,16],
      borderColor: '#22c55e',
      backgroundColor: 'rgba(34,197,94,0.2)',
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});
