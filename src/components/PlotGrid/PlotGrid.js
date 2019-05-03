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
      lines: []
    }
  },
  mounted () {
    this.updatePoints()
  },
  methods: {
    selectLine (index) {
      this.lines[index].selected = !this.lines[index].selected
    },
    selectPoint (index) {
      this.lines[index].selected = !this.lines[index].selected
      this.$refs.predictPlot.selectPoint(index, this.lines[index].selected)
    },
    updatePoints () {
      this.chart = {
        traces: [
          {
            y: [],
            x: [],
            text: [],
            mode: 'markers',
            type: 'scatter',
            marker: { color: [] }
          }
        ]
      }
      for (let p of points) {
        this.chart.traces[0].x.push(p[0])
        this.chart.traces[0].y.push(p[1])
        this.chart.traces[0].marker.color.push('steelblue')
        this.chart.traces[0].text.push('Point: ' + p)
        this.lines.push({ text: p, selected: false })
      }
    }
  }
}
