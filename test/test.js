
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	incrsum = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-incrsum', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( incrsum ).to.be.a( 'function' );
	});

	it( 'should return a function', function test() {
		expect( incrsum() ).to.be.a( 'function' );
	});

	it( 'should compute a sum incrementally', function test() {
		var data,
			N,
			sum,
			expected,
			actual;

		data = [ 2, 3, 2, 4, 3, 4 ];
		N = data.length;

		expected = new Array( N );
		actual = new Array( N );

		sum = incrsum();

		for ( var i = 0; i < N; i++ ) {
			expected[ i ] = calc( data.slice( 0, i+1 ) );
			actual[ i ] = sum( data[ i ] );
		}

		assert.deepEqual( actual, expected );

		function calc( arr ) {
			var N = arr.length,
				sum = 0;
			for ( var i = 0; i < N; i++ ) {
				sum += arr[ i ];
			}
			return sum;
		}
	});

	it( 'should return the current sum if provided no arguments', function test() {
		var data = [ 2, 3, 1 ],
			sum = incrsum();
		for ( var i = 0; i < data.length; i++ ) {
			sum( data[ i ] );
		}
		assert.strictEqual( sum(), 6 );
	});

});