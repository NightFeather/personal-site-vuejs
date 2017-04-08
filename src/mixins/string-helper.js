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
    }
  }
}
