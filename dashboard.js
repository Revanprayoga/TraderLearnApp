// Revenue Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
    type: 'line', // Grafik jenis line chart
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Label untuk sumbu X
        datasets: [{
            label: 'Revenue Growth',
            data: [3000, 2000, 3500, 4000, 5000], // Data untuk grafik
            borderColor: 'rgb(54, 162, 235)',
            fill: false,
        }]
    }
});

// Performance Chart
const performanceCtx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(performanceCtx, {
    type: 'bar', // Grafik jenis bar chart
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'], // Label untuk sumbu X
        datasets: [{
            label: 'Performance',
            data: [85, 90, 78, 92, 88], // Data untuk grafik
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

// Users Chart
const usersCtx = document.getElementById('usersChart').getContext('2d');
const usersChart = new Chart(usersCtx, {
    type: 'pie', // Grafik jenis pie chart
    data: {
        labels: ['Active', 'Inactive'], // Label untuk sumbu X
        datasets: [{
            label: 'Users Status',
            data: [65, 35], // Data untuk grafik
            backgroundColor: ['#36A2EB', '#FF6384'],
            borderColor: '#fff',
            borderWidth: 1
        }]
    }
});
