const amountPriceFilter = function (value) {
  if (!value) {
    return '0'
  }
  return '$' + Number(value).toLocaleString()
}

const amountFilter = function (value) {
  if (!value) {
    return '0'
  }
  return Number(value).toLocaleString()
}

const maxLegth = value => {
  if (value.length > 33) {
    return value.slice(0, 30) + '...'
  }
  return value
}

export { amountFilter, maxLegth, amountPriceFilter }
