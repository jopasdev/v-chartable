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
            type: 'scatter',
            text: [],
            hoverinfo: 'text'
          }
        ]
      },
      lines: [],
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
        this.chart.traces[0].x = []
        this.chart.traces[0].y = []
        this.chart.traces[0].text = []
        this.chart.traces[0].marker = {}
        this.lines = []
        for (let i = 0; i < this.points.length; i++) {
          this.chart.traces[0].x.push(this.points[i][0])
          this.chart.traces[0].y.push(this.points[i][1])
          this.lines.push({
            index: i,
            text: this.descriptions[i],
            selected: false
          })
        }
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
            eventData.points.forEach(function (point) {
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
    selectLineAndPoint (line) {
      this.changeSelectedLine(line.index)
      let colors = this.chart.traces[0].marker.color
      colors[line.index] = line.selected ? COLOR_ORANGERED : COLOR_STEELBLUE
      Plotly.restyle(this.$refs.predictPlot, {
        marker: { color: colors }
      })
    },
    changeSelectedLine (index) {
      this.lines[index].selected = !this.lines[index].selected
    },
    selectLines (indices) {
      indices.forEach(i => (this.lines[i].selected = true))
    },
    clearSelection () {
      this.lines.forEach(line => (line.selected = false))
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
      this.chart.traces[0].x.forEach((v, i, a) => (colors[i] = COLOR_STEELBLUE))
      return colors
    },
    toScroll (step) {
      this.$refs.container.scrollLeft += step
      switch (this.$refs.container.scrollLeft) {
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
      this.$refs.container.scrollWidth - this.$refs.container.clientWidth
  }
}
