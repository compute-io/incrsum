/**
*
*	COMPUTE: incrsum
*
*
*	DESCRIPTION:
*		- Provides a method to compute a sum incrementally.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
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

})();