# always.flow

[![travis][travis.icon]][travis.url]
[![package][version.icon] ![downloads][downloads.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]

Just a function to create functions that always return the same value and some
pre-existing functions that always return common JS primitives.

## Usage

### Import

Rest of the the document & provided code examples assumes that library is installed (with yarn or npm) and imported as follows:

```js
import always from "always.flow"
```

#### `always(a) => (...args) => a`

```js
const one = always(1)
one() //? 1
one() //? 1

const array = [1, 2, 3, 4]
array.map(always(0)) //? [0, 0, 0, 0]
```

#### Primitive constants

```js
always.True() //? true
always.False() //? false
always.Null() //? null
always.Void() //? undefined
```

#### Empty values

```js
always.EmptyString //? ""
always.EmptyObject() //? Object.freeze({})
always.EmptyArray() //? Object.freeze([])
always.EmptyTable() //? Object.freeze(Object.create(null))
```

Note that empties are frozen that is to avoid someone mutating by mistake &
making them non empty there after.

Also note that last two are polymorphic and there for would allow you to be
used in place or arbitrary array / dictionary.

## Install

    npm install always.flow

[travis.icon]: https://travis-ci.org/Gozala/always.flow.svg?branch=master
[travis.url]: https://travis-ci.org/Gozala/always.flow
[version.icon]: https://img.shields.io/npm/v/always.flow.svg
[downloads.icon]: https://img.shields.io/npm/dm/always.flow.svg
[package.url]: https://npmjs.org/package/always.flow
[downloads.image]: https://img.shields.io/npm/dm/always.flow.svg
[downloads.url]: https://npmjs.org/package/always.flow
[prettier.icon]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier.url]: https://github.com/prettier/prettier
