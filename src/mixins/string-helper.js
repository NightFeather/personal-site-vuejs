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
      var match = pattern.exec(xmlString)
      var parts = [[match[1], match[2], match[3]].join('/'), match[4] + ':' + match[5]]
      return parts.join(' ')
    }
  }
}
