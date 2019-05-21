import Plotly from 'plotly.js-dist'

const COLOR_STEELBLUE = 'steelblue'
const COLOR_ORANGERED = 'orangered'

export default {
  props: ['points', 'descriptions'],
  data () {
    return {
      chart: {
        traces: [
          {
            y: [],
            x: [],
            mode: 'markers',
            type: 'scatter'
          }
        ]
      },
      selectedLines: [],
      scroll: {
        width: 0,
        showLeft: false,
        showRight: true
      }
    }
  },
  watch: {
    points: {
      handler: function () {
        this.selectedLines = []
        this.chart.traces[0].x = []
        this.chart.traces[0].y = []
        this.chart.traces[0].marker = {}
        this.points.forEach(point => {
          this.chart.traces[0].x.push(point[0])
          this.chart.traces[0].y.push(point[1])
        })
        this.chart.traces[0].marker = { color: this.initialPointsColors() }
        Plotly.newPlot(
          this.$refs.predictPlot,
          this.chart.traces,
          { hovermode: 'closest', hoverdistance: 10 },
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
            Plotly.restyle(this.$refs.predictPlot, {
              marker: { color: colors }
            })
            this.changeSelectedLine(pointNumber)
          }
        })
        this.$refs.predictPlot.on('plotly_selected', eventData => {
          if (eventData.points.length > 0) {
            let colors = eventData.points[0].data.marker.color
            let points = []
            eventData.points.forEach(point => {
              points.push(point.pointNumber)
              colors[point.pointNumber] = COLOR_ORANGERED
            })
            Plotly.restyle(this.$refs.predictPlot, {
              marker: { color: colors }
            })
            this.selectLines(points)
          }
          Plotly.restyle(this.$refs.predictPlot, { selectedpoints: [null] })
          Plotly.relayout(this.$refs.predictPlot, { dragmode: 'zoom' })
        })
      },
      deep: true
    }
  },
  methods: {
    selectPoint (index) {
      let colors = this.chart.traces[0].marker.color
      colors[index] = this.selectedLines.includes(index)
        ? COLOR_ORANGERED
        : COLOR_STEELBLUE
      Plotly.restyle(this.$refs.predictPlot, {
        marker: { color: colors }
      })
    },
    changeSelectedLine (index) {
      let idx = this.selectedLines.indexOf(index)
      if (idx > -1) {
        this.selectedLines.splice(idx, 1)
      } else {
        this.selectedLines.push(index)
      }
      this.$refs.predictTable.rows[index].scrollIntoView()
    },
    selectLines (indices) {
      indices.forEach(i => {
        this.selectedLines.push(i)
      })
    },
    clearSelection () {
      this.selectedLines = []
      Plotly.restyle(this.$refs.predictPlot, {
        marker: { color: this.initialPointsColors() }
      })
      Plotly.relayout(this.$refs.predictPlot, {
        dragmode: 'zoom',
        xaxis: { autorange: true },
        yaxis: { autorange: true }
      })
    },
    initialPointsColors () {
      let colors = []
      this.chart.traces[0].x.forEach((v, i, a) => {
        colors[i] = COLOR_STEELBLUE
      })
      return colors
    },
    toScroll (step) {
      this.$refs.predictTable.scrollLeft += step
      switch (this.$refs.predictTable.scrollLeft) {
        case 0:
          this.scroll.showLeft = false
          break
        case this.scroll.width:
          this.scroll.showRight = false
          break
        default:
          this.scroll.showLeft = true
          this.scroll.showRight = true
      }
    }
  },
  mounted () {
    this.scroll.width =
      this.$refs.predictTable.scrollWidth - this.$refs.predictTable.clientWidth
  }
}
