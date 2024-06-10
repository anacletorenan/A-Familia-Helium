Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Categoria de Despesas'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Essencial',
                    y: 49.12
                },
                {
                    name: 'Mercado',
                    sliced: true,
                    selected: true,
                    y: 18.26
                },
                {
                    name: 'Carro',
                    y: 7.43
                },
                {
                    name: 'Lazer',
                    y: 9.10
                },
                {
                    name: 'Emergencial',
                    y: 17.51
                }
            ]
        }
    ]
});

//total 13.908,69
//6.832,80
//2.540
//1.033,99
//1.265,85
//2.435,98

//essencial - 49,12
//mercado - 18,26
//carro - 7,43
//lazer - 9,10
//emergencial - 17,51