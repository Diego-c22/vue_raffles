const amountFilter = function (value) {
  if (!value) {
    return '0'
  }
  return '$' + value.toLocaleString('en')
}

const maxLegth = value => {
  if (value.length > 33) {
    return value.slice(0, 30) + '...'
  }
  return value
}

export { amountFilter, maxLegth }
