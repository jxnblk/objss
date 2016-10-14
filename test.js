
import test from 'ava'
import ox from './index'

test('returns a string', t => {
  const css = ox()
  t.is(typeof css, 'string')
})

test('converts style object to css', t => {
  const css = ox({
    color: 'tomato'
  })
  t.is(css, 'color:tomato')
})

test('converts numbers to pixel values', t => {
  const css = ox({
    color: 'tomato',
    margin: 16
  })
  t.is(css, 'color:tomato;margin:16px')
})

test('filters null values', t => {
  const css = ox({
    margin: 8,
    padding: null
  })
  t.is(css, 'margin:8px')
})

test('creates nested rules', t => {
  const css = ox({
    color: 'tomato',
    ':hover': {
      color: 'green'
    }
  })
  t.regex(css, /:hover{/)
})

test('kebab cases keys', t => {
  const css = ox({
    marginBottom: 8
  })
  t.regex(css, /margin-bottom/)
})

