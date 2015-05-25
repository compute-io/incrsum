'use strict';

var incrsum = require( './../lib' );

// Initialize a method to calculate the sum incrementally:
var sum = incrsum();

// Simulate some data...
var value, s;

console.log( '\nValue\tSum\n' );

for ( var i = 0; i < 100; i++ ) {

	value = Math.random() * 100;
	s = sum( value );

	console.log( '%d\t%d', value.toFixed( 4 ), s.toFixed( 4 ) );
}

// Final sum:
console.log( '\nFinal sum is %d...\n', sum() );
