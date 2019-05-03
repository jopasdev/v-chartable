import Plotly from 'plotly.js-dist'

export default {
  props: ['descriptions'],
  data () {
    return {
      lines: []
    }
  },
  methods: {
    selectLine (index) {
      alert(index)
    }
  }
}
