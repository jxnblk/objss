
# objss

Converts JavaScript style objects into CSS-like strings.

```sh
npm i objss
```

```js
const objss = require('objss')

const css = objss({
  margin: 16,
  color: 'tomato'
})
// 'margin:16px;color:tomato;'

const css = objss({
  color: 'tomato',
  ':hover': {
    color: 'green'
  }
})
// 'color:tomato;&:hover{color:green;}'
```

## What is this for?

Sometimes CSS-in-JS solutions require tagged template literals.

JavaScript object literals are often easier to work with.

This can be used in place of tagged template literals.

```js
foo([objss({ color: 'tomato' })])
// The same as foo`color:tomato;`
```

There might be other use-cases as well.

Related:

The reverse of this:

[css-to-object](https://github.com/jxnblk/css-to-object)

MIT License

