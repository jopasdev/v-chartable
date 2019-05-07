import Plotly from 'plotly.js-dist'

const COLOR_STEELBLUE = 'steelblue'
const COLOR_ORANGERED = 'orangered'

export default {
  props: ['chart', 'line'],
  watch: {
    chart: {
      handler: function () {
        this.chart.traces[0].marker = { color: this.initialColors() }
        Plotly.newPlot(
          this.$refs.predictPlot,
          this.chart.traces,
          {},
          { responsive: true, scrollZoom: true, displaylogo: false }
        )
        this.$refs.predictPlot.on('plotly_click', eventData => {
          if (eventData.points.length > 0) {
            let colors = eventData.points[0].data.marker.color
            let pointNumber = eventData.points[0].pointNumber
            colors[pointNumber] =
              colors[pointNumber] === COLOR_STEELBLUE
                ? COLOR_ORANGERED
                : COLOR_STEELBLUE
            let update = { marker: { color: colors } }
            Plotly.restyle(this.$refs.predictPlot, update)
            this.$emit('select-lines', [pointNumber])
          }
        })
        this.$refs.predictPlot.on('plotly_selected', eventData => {
          if (eventData.points.length > 0) {
            let colors = eventData.points[0].data.marker.color
            let points = []
            eventData.points.forEach(function (point) {
              points.push(point.pointNumber)
              colors[point.pointNumber] = COLOR_ORANGERED
            })
            Plotly.restyle(this.$refs.predictPlot, {
              marker: { color: colors }
            })
            this.$emit('select-lines', points)
          }
          Plotly.restyle(this.$refs.predictPlot, { selectedpoints: [null] })
          Plotly.relayout(this.$refs.predictPlot, { dragmode: 'zoom' })
        })
      },
      deep: true
    },
    line: {
      handler: function () {
        this.selectPlotPoint(this.line)
      },
      deep: true
    }
  },
  methods: {
    initialColors () {
      const colors = []
      this.chart.traces[0].x.forEach((v, i, a) => (colors[i] = COLOR_STEELBLUE))
      return colors
    },
    resetPlotSelection () {
      Plotly.restyle(this.$refs.predictPlot, {
        marker: { color: this.initialColors() }
      })
      Plotly.relayout(this.$refs.predictPlot, { dragmode: 'zoom' })
    },
    selectPlotPoint (point) {
      let colors = this.chart.traces[0].marker.color
      colors[point.index] = point.selected ? COLOR_ORANGERED : COLOR_STEELBLUE
      Plotly.restyle(this.$refs.predictPlot, {
        marker: { color: colors }
      })
    }
  }
}
