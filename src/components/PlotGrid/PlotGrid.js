// import axios from 'axios'
import Plot from '@/components/Plot/Plot.vue'
// import Grid from '@/components/Grid/Grid.vue'

import { points } from './2dArray.js'

export default {
  components: {
    Plot
  },
  data () {
    return {
      chart: null,
      lines: [],
      line: null
    }
  },
  mounted () {
    this.updatePoints()
  },
  methods: {
    selectLines (indices) {
      if (indices.length === 1) {
        this.lines[indices[0]].selected = !this.lines[indices[0]].selected
      } else {
        indices.forEach(i => (this.lines[i].selected = true))
      }
    },
    selectPoint (index) {
      this.lines[index].selected = !this.lines[index].selected
      this.line = this.lines[index]
    },
    resetSelection () {
      this.lines.forEach(line => (line.selected = false))
      this.$refs.predictPlot.resetPlotSelection()
    },
    updatePoints () {
      this.chart = {
        traces: [
          {
            y: [],
            x: [],
            text: [],
            mode: 'markers',
            type: 'scatter'
          }
        ]
      }
      for (let i = 0; i < points.length; i++) {
        this.chart.traces[0].x.push(points[i][0])
        this.chart.traces[0].y.push(points[i][1])
        this.chart.traces[0].text.push('Point: ' + points[i])
        this.lines.push({ index: i, text: points[i], selected: false })
      }
    }
  }
}
