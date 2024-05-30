document.addEventListener('DOMContentLoaded', function() {
    const monthsValues = document.getElementById('rv-months');
    const months = JSON.parse(monthsValues.textContent);

    const quantitiesValues = document.getElementById('rv-orders');
    const orders = JSON.parse(quantitiesValues.textContent);

    const amountsValues = document.getElementById('rv-amounts');
    const amounts = JSON.parse(amountsValues.textContent);

    console.log('months', months);
    console.log('orders', orders);
    console.log('amounts', amounts);


    var ctx = document.getElementById('myChart');
    var revenueChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: months,
            datasets: [
                {
                    type: 'line',
                    label: 'Orders',
                    data: orders,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    type: 'line',
                    label: 'Amounts',
                    data: amounts,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: options 

    });

    var options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Values'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 40,
                    boxHeight: 10
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var label = context.dataset.label || '';
    
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y;
                        }
                        return label;
                    }
                }
            }
        }
    };
});
