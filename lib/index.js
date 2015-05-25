'use strict';

// INCREMENTAL SUM //

/**
* FUNCTION: incrsum()
*	Returns a method to compute the sum incrementally.
*
* @returns {Function} method to compute the sum incrementally
*/
function incrsum() {
	var sum = 0;
	/**
	* FUNCTION: incrsum( [value] )
	*	If a `value` is provided, updates and returns the updated sum. If no `value` is provided, returns the current sum.
	*
	* @param {Number} [value] - value used to update the sum
	* @returns {Number} sum
	*/
	return function incrsum( x ) {
		if ( !arguments.length ) {
			return sum;
		}
		sum += x;
		return sum;
	};
} // end FUNCTION incrsum()


// EXPORTS //

module.exports = incrsum;
