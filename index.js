
const addPx = require('add-px-to-style')

const kebab = (str) => str.replace(/([A-Z])/g, g => '-' + g.toLowerCase())
const px = prop => val => typeof val === 'number' ? addPx(prop, val) : val

const toObj = a => key => ({
  key: key,
  prop: kebab(key),
  value: a[key]
})
const toArr = obj => Object.keys(obj).map(toObj(obj))

const getParentKey = key => /^:/.test(key)
  ? '&' + key
  : /^@/.test(key)
  ? key
  : '& ' + key

const formatNested = (values, opts) => opts.newline
  ? `\n  ${values.split('\n').join('\n  ')}\n`
  : values

const ox = (style = {}, opts = {}) => toArr(style)
  .filter(s => s.value !== null)
  .map(s => typeof s.value === 'object'
    ? ({
      parent: getParentKey(s.prop),
      value: ox(s.value, opts)
    })
    : s)
  .map(({ parent, prop, key, value }) => parent
    ? `${parent}{${formatNested(value, opts)}}`
    : `${prop}:${px(key)(value)};`)
  .join(opts.newline ? '\n' : '')

module.exports = ox

