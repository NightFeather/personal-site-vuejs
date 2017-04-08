export default {
  filters: {
    capitalize: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    truncate: function (str, length) {
      if (str.length > length) {
        return str.substring(0, length - 3) + ' ...'
      } else {
        return str
      }
    },
    xmlTime: function (xmlString) {
      var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/i
      var month = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
      var match = pattern.exec(xmlString)
      return match[3] + ' ' + month[(match[2] - '') - 1] + ' ' + match[1]
    }
  }
}
