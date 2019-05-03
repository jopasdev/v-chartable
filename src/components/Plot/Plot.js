import Plotly from 'plotly.js-dist'

export default {
  props: ['chart', 'lines'],
  watch: {
    chart: {
      handler: function () {
        Plotly.newPlot(
          'predictPlot',
          this.chart.traces,
          {},
          { responsive: true }
        )
        let predictPlot = document.getElementById('predictPlot')
        predictPlot.on('plotly_click', data => {
          let colors = data.points[0].data.marker.color
          let pointNumber = data.points[0].pointNumber
          colors[pointNumber] =
            colors[pointNumber] === 'steelblue' ? 'orangered' : 'steelblue'
          let update = { marker: { color: colors } }
          Plotly.restyle('predictPlot', update)
          this.$emit('select-line', pointNumber)
        })
      },
      deep: true
    }
    // lines: function () {
    //   let colors = []
    //   for (let i = 0; i < this.lines.length(); i++) {
    //     colors[i] = this.lines[i].selected ? 'orangered' : 'steelblue'
    //   }
    //   let update = { marker: { color: colors } }
    //   Plotly.restyle('predictPlot', update)
    // }
  },
  methods: {
    selectPoint (pointNumber, selected) {
      let colors = this.chart.traces[0].marker.color
      colors[pointNumber] = selected ? 'orangered' : 'steelblue'
      let update = { marker: { color: colors } }
      Plotly.restyle('predictPlot', update)
    }
  }
}
