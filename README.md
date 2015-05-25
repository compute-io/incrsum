incrsum
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Provides a method to compute a sum incrementally.


## Installation

``` bash
$ npm install compute-incrsum
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var sum = require( 'compute-incrsum' );
```

#### incrsum()

Returns an initialized method to compute a sum incrementally.

``` javascript
var sum = incrsum();
```

#### sum( [value] )

If provided a `value`, the method updates and returns the updated sum. If not provided a `value`, the method returns the current sum.

``` javascript
sum( 2 );

console.log( sum( 1 ) );
// returns 3

sum( 3 );

console.log( sum() );
// returns 6
```


## Examples

``` javascript
var incrsum = require( 'compute-incrsum' );

// Initialize a method to calculate the sum incrementally:
var sum = incrsum();

// Simulate some data...
for ( var i = 0; i < 1000; i++ ) {
	sum( Math.random() * 100 );
}

console.log( sum() );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

The use case for this module differs from the conventional [vector](https://github.com/compute-io/sum) implementation and the [stream](https://github.com/flow-io/?query=sum) implementation.

The use case for the vector implementation is where you have a known dataset and want to calculate a summary statistic (e.g., the sum).

The use case for the stream implementation is where you have either (1) a stream source, which may or may not be definite, or (2) a desire to continually stream each updated value.

The incremental implementation overlaps both use cases, but also provides an additional benefit. Namely, this module decouples the act of updating the sum from the act of consuming the sum.

For example, suppose every 2 seconds your application receives a new value from a remote data source and you want to continuously update the sum.

In a streaming implementation, the updated sum is either pooled (chunked) or automatically piped to a new destination. The consumer is ultimately responsible for discarding incoming observations.

In contrast to the streaming (push) model, an incremental implementation provides a pull model in which consumers can choose when to observe the current value. Such behavior is important if we consider that, instead of observing on a regular interval (streaming), observations may be random. This module is more amenable to such observation indeterminacy.


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-incrsum.svg
[npm-url]: https://npmjs.org/package/compute-incrsum

[travis-image]: http://img.shields.io/travis/compute-io/incrsum/master.svg
[travis-url]: https://travis-ci.org/compute-io/incrsum

[coveralls-image]: https://img.shields.io/coveralls/compute-io/incrsum/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/incrsum?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/incrsum.svg
[dependencies-url]: https://david-dm.org/compute-io/incrsum

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/incrsum.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/incrsum

[github-issues-image]: http://img.shields.io/github/issues/compute-io/incrsum.svg
[github-issues-url]: https://github.com/compute-io/incrsum/issues
