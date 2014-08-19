# agito-json-loader [![NPM version][npm-img]][npm]

[![Build Status][travis-img]][travis]
[![Test Coverage][codeclimate-coverage-img]][codeclimate]
[![Code Climate][codeclimate-gpa-img]][codeclimate]
[![Dependencies Status][daviddm-dep-img]][daviddm-dep]

An [Agito][agito] plugin to load triggers from a JSON source.

## Installation

```bash
npm install agito-json-loader
```

## Getting Started

```javascript
var agito = require('agito');
var jsonLoader = require('agito-json-loader');

agito()
  .use(jsonLoader({
    pattern: 'http://localhost:80',
    action: {
      name: 'http-redirect',
      options: {
        destination: 'https://localhost:443'
      }
    }
  }))
  .start();
```

## Arguments

### triggers `...(Object|Object[])`

## Issue tracker

Please feel free to report issues and bugs or to submit patches by the
[issue tracker][issue-tracker].

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md)

## Authors

See [`package.json`](package.json)

## License

See [`LICENSE`](LICENSE)

[npm]: https://www.npmjs.org/package/agito-json-loader
[npm-img]: http://img.shields.io/npm/v/agito-json-loader.svg?style=flat
[travis]: https://travis-ci.org/agitojs/agito-json-loader
[travis-img]: http://img.shields.io/travis/agitojs/agito-json-loader/master.svg?style=flat
[codeclimate]: https://codeclimate.com/github/agitojs/agito-json-loader
[codeclimate-coverage-img]: http://img.shields.io/codeclimate/coverage/github/agitojs/agito-json-loader.svg?style=flat
[codeclimate-gpa-img]: http://img.shields.io/codeclimate/github/agitojs/agito-json-loader.svg?style=flat
[daviddm-dep]: https://david-dm.org/agitojs/agito-json-loader
[daviddm-dep-img]: http://img.shields.io/david/agitojs/agito-json-loader.svg?style=flat

[agito]: https://github.com/agitojs/agito

[issue-tracker]: https://github.com/agitojs/agito-json-loader/issues
