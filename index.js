
const addPx = require('add-px-to-style')

const kebab = (str) => str.replace(/([A-Z])/g, g => '-' + g.toLowerCase())
const px = prop => val => typeof val === 'number' ? addPx(prop, val) : val

const toObj = a => key => ({ key: kebab(key), value: a[key] })
const toArr = obj => Object.keys(obj).map(toObj(obj))

const getParentKey = key => /^:/.test(key)
  ? '&' + key
  : /^@/.test(key)
  ? key
  : '& ' + key

const ox = (style = {}, opts = {}) => toArr(style)
  .filter(s => s.value !== null)
  .map(s => typeof s.value === 'object'
    ? ({
      parent: getParentKey(s.key),
      value: ox(s.value)
    })
    : s)
  .map(({ parent, key, value }) => parent ? `${parent}{${value}}` : `${key}:${px(key)(value)};`)
  .join(opts.newline ? '\n' : '')

module.exports = ox

