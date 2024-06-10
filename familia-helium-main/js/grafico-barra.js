// Data retrieved from https://en.wikipedia.org/wiki/Winter_Olympic_Games
Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Comparação entre as despesas e receitas da Família Helium',
        align: 'center'
    },

    xAxis: {
        categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril']
    },

    yAxis: {
        allowDecimals: true,
        min: 0,
        title: {
            text: 'Valores'
        }
    },

    tooltip: {
        format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
            'Total: {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Receitas',
        data: [6400, 5700, 6000, 7082.19],
        stack: 'Despesas'
    }, {
        name: 'Despesas',
        data: [3100, 3750, 3341, 3637.67],
        stack: 'Receitas'
    }]
});

//mes de janeiro
//receita = 6,400
//despesas = 3,180

//mes de fevereiro
//receita = 5,700
//despesas = 3,750

//mes de março
//receita = 6000
//despesas = 3,341

//mes de abril
//receita = 7.082,19
//despesas = 3.637,67