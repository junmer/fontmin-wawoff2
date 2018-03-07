fontmin-wawoff2
===

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Dependencies][dep-image]][dep-url]


> wawoff2 fontmin plugin

## Install

```sh
$ npm install --save fontmin-wawoff2
```

## Usage

Fontmin convert `font.ttf` to `font.woff2` as <https://www.w3.org/TR/2018/REC-WOFF2-20180301/>

```js
var Fontmin = require('fontmin');
var wawoff2 = require('fontmin-wawoff2');

var fontmin = new Fontmin()
    .src('fonts/*.ttf')
    .use(Fontmin.glyph({text: 'hello world'}))
    .use(wawoff2())
    .dest('build/fonts');

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }

    console.log('Files woff2 successfully!');
});
```

## Related

- [fontmin](https://github.com/ecomfe/fontmin)

[travis-url]: https://travis-ci.org/junmer/fontmin-wawoff2
[travis-image]: http://img.shields.io/travis/junmer/fontmin-wawoff2.svg
[downloads-image]: http://img.shields.io/npm/dm/fontmin-wawoff2.svg
[npm-url]: https://npmjs.org/package/fontmin-wawoff2
[npm-image]: http://img.shields.io/npm/v/fontmin-wawoff2.svg
[dep-url]: https://david-dm.org/junmer/fontmin-wawoff2
[dep-image]: http://img.shields.io/david/junmer/fontmin-wawoff2.svg
