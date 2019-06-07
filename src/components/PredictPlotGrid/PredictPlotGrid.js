import Plotly from 'plotly.js-dist'
import Features from '@/components/Features/Features.vue'

const COLOR_STEELBLUE = 'steelblue'
const COLOR_ORANGERED = 'orangered'

export default {
  components: {
    Features
  },
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
      indices: [],
      stats: {
        mean: null,
        median: null,
        std_deviation: null,
        correlation: null,
        distribution: null,
        image_url: null
      }
    }
  },
  watch: {
    points: {
      handler: function () {
        this.indices = []
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
            let indices = []
            eventData.points.forEach(point => {
              indices.push(point.pointNumber)
              colors[point.pointNumber] = COLOR_ORANGERED
            })
            Plotly.restyle(this.$refs.predictPlot, {
              marker: { color: colors }
            })
            Plotly.restyle(this.$refs.predictPlot, { selectedpoints: [null] })
            Plotly.relayout(this.$refs.predictPlot, { dragmode: 'zoom' })
            this.selectIndices(indices)
          }
        })
      },
      deep: true
    }
  },
  methods: {
    selectIndex (index) {
      let colors = this.chart.traces[0].marker.color
      colors[index] = this.indices.includes(index)
        ? COLOR_ORANGERED
        : COLOR_STEELBLUE
      Plotly.restyle(this.$refs.predictPlot, {
        marker: { color: colors }
      })
    },
    changeSelectedLine (index) {
      let idx = this.indices.indexOf(index)
      if (idx > -1) {
        this.indices.splice(idx, 1)
      } else {
        this.indices.push(index)
      }
      this.$refs.predictTable.rows[index].scrollIntoView()
    },
    selectIndices (points) {
      this.indices = points
    },
    clearSelection () {
      this.indices = []
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
    }
  }
}
