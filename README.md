
# objss

Converts JavaScript style objects into CSS-like strings.

```sh
npm i objss
```

```js
const ox = require('objss')

const css = ox({
  margin: 16,
  color: 'tomato'
})
// 'margin:16px;color:tomato'

const css = ox({
  color: 'tomato',
  ':hover': {
    color: 'green'
  }
})
// 'color:tomato;:hover{color:green}'
```

## What is this for?

Sometimes CSS-in-JS solutions require tagged template literals.

JavaScript object literals are often easier to work with.

This can be used in place of tagged template literals.

```js
foo([ox({ color: 'tomato' })])
// The same as foo`color:tomato`
```

There might be other use-cases as well.

MIT License

