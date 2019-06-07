import * as mathjs from 'mathjs'

import { values, atributes } from '@/assets/descriptions.js'

export default {
  props: ['indices'],
  data () {
    return {
      atributes: atributes[0].split(','),
      values: [],
      atribute: null
    }
  },
  mounted () {
    values.forEach(el => {
      this.values.push(el.split(','))
    })
  },
  computed: {
    statistics () {
      let stats = {}
      if (
        this.atribute !== null &&
        Array.isArray(this.indices) &&
        this.indices.length
      ) {
        var columnValues = this.indices.map(i => this.values[i][this.atribute])
        stats = {
          mean: mathjs.mean(columnValues),
          median: mathjs.median(columnValues),
          std_deviation: mathjs.std(columnValues),
          correlation: null,
          distribution: null,
          image_url: null
        }
      }
      return stats
    }
  },
  methods: {
    selectColumn (atribute) {
      this.atribute = atribute
    }
  }
}
