import { values, attributes } from '@/assets/descriptions.js'

var jStat = require('jstat').jStat

export default {
  props: ['indices'],
  data () {
    return {
      attributes: attributes[0].split(','),
      values: [],
      attribute_A: '',
      attribute_B: ''
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
        this.attribute_A !== '' &&
        Array.isArray(this.indices) &&
        this.indices.length
      ) {
        var attributeValues = this.indices.map(i =>
          Number(this.values[i][this.attribute_A])
        )
        stats = {
          mean: jStat.mean(attributeValues).toFixed(2),
          median: jStat.median(attributeValues).toFixed(2),
          std_deviation: jStat.stdev(attributeValues).toFixed(2),
          distribution: null,
          image_url: null
        }
      }
      return stats
    },
    statistics_total () {
      let stats = {}
      if (this.attribute_A !== '') {
        var attributeValues = this.values.map(value =>
          Number(value[this.attribute_A])
        )
        stats = {
          mean: jStat.mean(attributeValues).toFixed(2),
          median: jStat.median(attributeValues).toFixed(2),
          std_deviation: jStat.stdev(attributeValues).toFixed(2),
          distribution: null,
          image_url: null
        }
      }
      return stats
    },
    statistics_correlation () {
      let correlation = null
      if (
        this.attribute_A !== '' &&
        this.attribute_B !== '' &&
        Array.isArray(this.indices) &&
        this.indices.length
      ) {
        var attributeValues = this.indices.map(i =>
          Number(this.values[i][this.attribute_A])
        )
        var targetValues = this.indices.map(i =>
          Number(this.values[i][this.attribute_B])
        )
        correlation = jStat.corrcoeff(attributeValues, targetValues).toFixed(2)
      }
      return correlation
    },
    statistics_correlation_total () {
      let correlation = null
      if (this.attribute_A !== '' && this.attribute_B !== '') {
        var attributeValues = this.values.map(value =>
          Number(value[this.attribute_A])
        )
        var targetValues = this.values.map(value =>
          Number(value[this.attribute_B])
        )
        correlation = jStat.corrcoeff(attributeValues, targetValues).toFixed(2)
      }
      return correlation
    }
  }
}
