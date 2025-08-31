const ctxPreferencias = document.getElementById('chart-preferencias').getContext('2d');
new Chart(ctxPreferencias, {
  type: 'bar',
  data: {
    labels: ['Opción A', 'Opción B', 'Opción C'],
    datasets: [{
      label: 'Preferencias',
      data: [45, 30, 25],
      backgroundColor: ['#00ffe7', '#00bcd4', '#0088aa']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

const ctxSatisfaccion = document.getElementById('chart-satisfaccion').getContext('2d');
new Chart(ctxSatisfaccion, {
  type: 'doughnut',
  data: {
    labels: ['Alta', 'Media', 'Baja'],
    datasets: [{
      label: 'Satisfacción',
      data: [60, 30, 10],
      backgroundColor: ['#00ffe7', '#00bcd4', '#ff4081']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});
