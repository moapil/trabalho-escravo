let ctx = document.getElementById('grafico_radar')

Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.family = 'sans-serif'

const labels = ['Criação de Bovina', 'Produção Florestal', 'Cultivo de Cana', 'Produção de Ferro-gusa', 'Cultivo de Cereais', 'Extração de Minérios']

const data = {
    labels,
    datasets: [{
        data: [8698, 1120, 1064, 360, 222, 166],
        label: 'Miores trabalhos feitos por escravo',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(221, 224, 8)',
          'rgb(194, 91, 155)',
          'rgb(100, 149, 119)'
        ],
        borderWidth: 3
    }],
}

const config = {
    type: 'polarArea',
    data,
}

const graph = new Chart(ctx, config)