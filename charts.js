const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Revenue',
            data: [3000, 5000, 7000, 4000],
            backgroundColor: ['#9b59b6', '#3498db', '#e67e22', '#2ecc71']
        }]
    }
});
