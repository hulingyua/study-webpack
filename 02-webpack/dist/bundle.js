/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);

// import './index.css';


__WEBPACK_IMPORTED_MODULE_0_jquery___default()('div').click(function (){
  alert('干嘛');
})

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.28.7@css-loader/index.js!../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!./index.less", function() {
			var newContent = require("!!../node_modules/_css-loader@0.28.7@css-loader/index.js!../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "div {\n  border: 1px solid salmon;\n}\n#box {\n  width: 200px;\n  height: 200px;\n  background-image: url(" + __webpack_require__(5) + ");\n  background-size: cover;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/bmp;base64,Qk2+qAEAAAAAADYAAAAoAAAAvgAAAL4AAAABABgAAAAAAIioAQAAAAAAAAAAAAAAAAAAAAAAwsa709fM29/U7/Po8fbr5/Dm6PDm6PDm6PDm5vDl4u/i4Ozg2+fb2uXZ1ubc1uff0+Pd0uDe0eDezOHdy+HcyN7Zyd/ax9/awt3Zv97Zu9zWttrUtdfSt9bTudjVvNvYvdzZwuHey+fk1u3r3O7t3ezr2u3r2+/t2+/t3vHv2fHvxObps9Xjl7vSkbnRkrvRkbvRjbvSh7vThLvWgb/Rf8DRebrSd7jYeLneerbgeLTedrLcdLDacq/Zba3Wba3Wba3Wba3WbKzXa6vYa6vYbKzZbKzZaq7Yaa/XaK7WZ63VZ63VZbLZZ7XcaLbdZrTaZrPbaK/faLHfZrTdZLXbZLPZY7DXY7DXY7DXYa7VYarRYqfPX6XNX6XNXKLKWaDGWJ/FVJvBU5rAUJe9RJGxPourO4ioOIWlMH6fK3qjLXisLnewL3mwNoC2OYK3OoKyO4OsRYyxTZG4WZvCYaHGZ6bIbKrKaq/KbbPMb7XMcLjLbrbKa6/Ia6zFbqfCbaO+aqC9Z527YZe1V42rTIGgPn6VN3uPM3aLMnWKOn2ROn6RQISXRYmcSY2gSpChTZWjV5utX5uwYpuzZpq1aZq3Z5m1Zpi0a525bqG7b6O7caa7dqu/eK+/e7W/iMTMisnRiMnRh8fQicbQjsvVjcrUjsvVi8jSiMXPicbQisfRjcrUjsrWjsrWjcnVjMjUjsrWjcnVi8fTjMjUjMjUjMfUjMfXjsnZjsnZjcjYi8bWjMfXj8rajsnZjsnZAADHy8DT18zc4NXw9Onv9Orn8Obo8Obo8Obo8Obm8OXi7+Lg7ODb59va5dnW5tzW59/T493S4N7R4N7M4d3L4dzI3tnJ39rI39rE39vB4Nu+39m429W119K31tO52NW52NW62da62NXA3NnN5eLZ6+rf7u3a7+3a8O7b8e/d8vDS7Oqp0tWZwdCPutKJudCMu9GNutKKutOFudODudaDv9SCwdR9u9Z6uNp5tt12stx2stx1sdt0sNpyr9lwsNlwsNlurtdtrdZsrthrrtlrrtlqrdhqrdhprtdortZnrdVnrdVnrdVnstlns9pns9potdxptNxqsN1qsd5os91mtNxks9tjsNdjsNdksdhir9Zjq9NjqdFgps5fpc1fpc1dpMtfpsxboshYn8VVncJIlbZAja4+i6w7iKkxgKEse6Qveq4ueLAvebE1gLQ4grQ5gbA5gatBh69Gi7RPk7tWmL9hocZqqsxqrstts85ts8tts8lssshrr8hur8hyrMZxqMNsor5onrxlm7lflbNYjqxMjKNAhJk6fZI3eo85fJE9gZRDh5pIjJ9Lj6JKkKFOlqRWmqxdma5gmbFlmbRpmrdnmbVmmLRrnbluobtvo7txprt2q794r798t8CKxc6LydGIydGIyNCLyNKPzNaNytSOy9WKx9GIxc+LyNKKx9GNytSOytaOytaOytaOytaMyNSLx9OMyNSMyNSMyNSMx9SMx9eOydmOydmNyNiLxtaMx9ePytqOydmOydkAAM3RxtXZzuHl2u/y5+zx5ufv5enx5+jw5ujw5ubw5eLu4uDs4Nzo3Nzo3Njo3tbn39Xk39Ti39Lg38zh3crg28nf2snf2sng28fi3sTj3sHi3Lve2Lja1bva17zb2Lva17va17jW07nV0sbe29Xn5t/u7drw79ry8Nnx79Xr6sHd3JPAxYi0xYa1zYG0zoK2zYS3z4O20IG10oK21YG60oG70X231Xq02nez3HWx3HWx23Sw2nOv2XGu12+v2G+v2G6u126u122v2Gqw2Gqw2Gmw12qx2Gmv12iu1met1Wet1Wet1Wev12mx2Wix2Gmy2Wuz226y3Gyy3Wmy3Wiy32ez3WWy2WSx2GSx2GKv1mOs02Sp0WGnz1+lzWKo0GCnzWKpzmCnzVuiyFigxk2ZvkSQtEKNskCLsDiFqjB/py14rC54sDB6sjF9rzN+rTeArjuBrj6Cr0KHs0eNtk2SuViawGeny2msy2ywzm+zz2yyymuxyWywyXGyzHavynasx3KnxGyiwWyiwGievGOZt1eXrkuOo0GEmTt+kzp9kj2BlESIm0mNoEyQo0yRo0+XpVebrV2arl+XsGOXsmiatmmbt2mbt2yeumyfum6huXClunWqvnuxwX24wYrFzozL04nK0ojI0Y3K1I7L1Y3K1I7L1YrH0YjFz4zJ04vI0ozJ047K1o7K1o7K1o7K1o7K1ozI1IzI1IvH04rG0ovG04zH147J2YzH14zH14zH143I2I7J2Y7J2Y3I2AAA1djN3uLW5ene6+/j6/Dk5+/l6fHn6PDm6PDm5vDl4u7i4e3h3+vf3ejc2Ofd1ebd1OTe1OLf0uDfzePezOLdyuDby+DbyuLdx+LexOPeweHcvODavd/ZwN7bv93av97bv97bu9rXutfUwdjVy9zb1OLh0ern1e/s0+3qxd3atNDNm8TMj7fLiLHOhLLPgLPOerHLeK7Le6/OgLLUgbbQf7bPfLPUerHZeK/ddLDbc6/Zcq7Yca3Xb6zWbKzVbazVba3Wba3Waq7WaLLXZ7DVZq/UZrDVZq7UZ63VZqzUZ63VZ63VZazUZ67WaK/WabDYbLHZb7PabrPca7HdarDhabPgZrTaZbLZZbLYY7DXZa3VZarTZKnRY6nRZarSYajPY6rPYqnPX6bMXqXLU57ETJe9SpW8SZS7Q5C1OIevMHywL3myL3ixL3urMHunNX2sOn+vPYCwPYSxQom0RYu0S4+3W53DZKbHaq3MbbHObLLMbbPLbrLLdrfQerTPerDLeK7KeK7MdavJcafFbKHAXZ61UZSpR4qfP4KXPoGWPoKVRIibR4ueS4+iS5CiTpakVpqsW5esXpevZJeyaJq2aZu3aZu3bJ66bJ+6bqG5cKW6daq+e7HCf7nDi8fPjczUicrSiMjRjcrUjsvVjcrUjsvVisfRiMXPjMnTi8jSjMnTjsrWjsrWjsrWjsrWjsrWjcrVjcnVjcnVjMjUjMjVjMfXjsnZjcjYjcjYjcjYjsnZkMvbkMvbjsnZAADc4trk6eHo7eXn7OXo7ubm7ubn7+fo7+fo7+fm7ubj7eXi7uTe7OHa6d3V59/S5N/Q4t3Q4d3Q4t/N497M4t3M4t3N497M497J497G49/C4N2/4N2/4N/A4N+/396+392+393A3Nu+19e60dG/09PE2NjC29nD392/3tyw0tGlyMqjxNCcvtCPts+Kss6Cs811scp0rsl1rMp5r898s85/ttB9tNR8sdh7sNt3rtl0rddxrNZvq9Vuq9Vrq9RpqtNpq9Roq9Rmq9NmrdNnrdNjqc9ortRmrNNmq9JlqtJmq9NnrNNlqtVmq9ZnrNdqr9prsNptstlssttpsdtpst5ptOBos91mstxmsttlsdtjsNdirdRhq9JkrdRkrNRjqtBjqtBjqtBjqtBjqtBao8pVnsRVnsRRmsBIk7k/jLU7hrU1frEye68xfKkyfqY1fqo3fqs5f686gbI+hbRAhbJFibJRk7tancFqrM5ur85vsM5ws85vtsx4utJ8uNF9tc9+tNCAtdR7stB0qshvpcNlortamrJPkahGiaBChZw+hZVBiJhEi5tIj59Gjp9Kk6RVmatZlalelKtmmrJom7RpnLVom7RrnrdtoLhvobpxo7x2qr98ssB/usGMyM+OzNSIydKIydKLytOMy9WNydOQy9WMyNKIxc+MyNKKx9GMydOPy9eOytaNydWNydWNydWOydeOydeOytiOytiNydeMx9eOydmPytqPytqPytqQy9uQy9uQy9uQy9sAAODm4ebs6Onv6uft6ebt5+bt5ebt5ejv6Ojv6Obu5+Tt5uPw597t4tjq3tTn4NHl4c/j3s3i3M/k38zi3c7k387k38/l4M3k38rj3sjj38Tg38Lh4cHh4sDi4sDi4r7g4L7g4MHe4L3Y2rbT1LfT1brX2LzX1rjV1rLT1qbO0aHK0KLG053D0ZO80Iu2zoS4znm0ynewyXStyXWty3evyXqxy3ux0H2x1X2v13eq1XSp1HCo0m2o0muo0mqp0mmq02aq02Sq0mSp0Gaoz2ms02OlzWqs02Wp0GSp0GWq0WWq0Wes02aq1maq12aq12qu22uv3Gux2Wuy2miz2me022e03Wiy32ey3mey3maw3WKx2V+w1l+t1GOv1mau1mat02Ws0mOq0GOq0GOq0GGnzV6kyluiyFWcwUyVu0aRuUWQuUGJtTyEszaAqTR/pDR/pjR+qDR9qjd/sT+Ftz6DsUOGskeKtFCUuV+ixmepym6tzXCyznC3zXe60ny60n+40oC303+0032z0XasynGnxWqkv2KeuFeYsU2PqUiMpEKLmkGKmEOMmkePnUOMnUWQo1OXqliUqF+UqWibsWics2mdtGebsmqetW6gt3ChunKivneqv3yyv366vozIzo7M1IjJ0ojJ04nK04vL1Y3J05HL1Y3J04nH0Y3K1IrH0YzJ047L1o7K1o7K1o3J1Y3J1Y7J2Y7J2Y7J2Y7J2Y7J2Y3I2I/K2pDL25DL25DL25DL25DL25DL25DL2wAA4Obh5+3o6/Hs6e/q5u3m5u7j5u7j6PDl6PDl5u/j5O/i4/Dk3+7j2uvg1ejj0+fi0eXgz+Pe0eXgzOLdz+Xgz+Xg0ObhzuXfyuPeyOPfxuPixeTkw+PkwePjwePjwOLiwOLiveDguNzctdjYs9fXtNjYt9bXstLVqs7RpczRpc3VosvXnMjVkcDTirvTiL3Tg7nOfrPKea7Id6vIdqrDdKjAdqfFeKjKfKvRdabScaXQbaPOa6POaqTOaabPa6nSaKnSZanRZKjPZajPa67VZKfOZ6rRYqbNYqfOZarRZKnQZarRZqrWZqrXZanWaKzZa6/ca7Laa7LaabTbZ7TbZbPcZrHeaLPfZ7LeZrDdYrHZYLHXYrDXZbHYaLDYaLDWaK/VZazSYqnPY6rQZazSZKvRX6bMWKDGUZm/TJi9TpnAS5S/RI26PYivOYWoNoKnNH+nMnymM36sO4SzPYSyPoOwQoayRYuyUZa8XqHEaKjKbbDNcLbOd7rTfrvUgbnUgbfVfrTSfbPRea/NdKrIbafCZ6S+X5+4VZixUZStSJCiQ4udQ4ucR46gQ4yeRI+hUZWoV5SoYZWrZ5qwaJyzaZ20Z5uyap61bqC3cKG6cqK+d6q/fLK/frq+jMjOjszUiMnSiMnTicrTi8vVjcnTkcvVjsrUi8jSjsvVjcrUjcrUjcnVjsrWj8vXjcnVjcnVj8raj8rajsnZjsnZjsnZj8rakMvbkMvbkMvbkMvbkMvbkMvbkMvbkMvbAADg5uHp7+rs8u3q8Ovo7+jm7+Lm7+Lm7+Lm7+Ll8N/k8d7h8OHh8OXd7eTY6+XW6uXS5uHQ5N/R5eDO5N/O5N/O5N/P5eDN5N/K5N7I5N/I5OPG5eXD4+TA4uLA4uLA4uLA4uK94uG639+33Ny02dmz2Nix19it0tWozdOozdSpztinztqeydeUwtWQwNiQw9iNv9OIus+DtMx9rcd2pr1zo7lzoLx0oMF5pMlzocxun8tsn8pqoMtqocxoosxopM5nps9np9Blp89jps1oq9Jjps1oqtFip81ip85kqdBkqdBlqtFlqdVnq9hmqtdnq9hprtpsstpstNxos9pms9pksttlsN1nst5msd1msd1isNlgsdZisNdlsNdpsdlpsNdqsddnrtRjqtBkq9FlrNJkq9FjqtBhqM5cpMlWosVUn8RQm8JJkr1EkLVBj687h6o1gKUyfaQvfaYxf6k4grA8g7NAhbU+ha5IjrVSl7xfocVqrc5tss50t9N7ttR+ttR/tdN/tdJ7sc96sM53rctxrMdrqcJlpb5cn7hVmbFKkqVFjKBDi55FjKBDjJ9FkKFRlahXlKhglapnmrBonLNqnrVnm7Jrn7Zuobdwobpyor53qb96sL1/vMCNyc+NzNOJytOIyNKKy9SMy9WMyNKQy9WPy9WMytSOy9WNytSNytSNydWNydWOytaPy9eNydaOydmOydmOydmOydmOydmRzNyRzNyPytqQy9uSzd2RzNyQy9uPytqRzNwAAOPp5Onv6uzy7erw6+nw6Onz4+nz4+nz4+nz5Oby3eXz2+T04OHx5N/v59vu6djs6NTo49Lm4dHl4M/l4M/l4M7k38/l4M7k38zl4Mrl4cbk48Ti5MLi48Di4sDi4r/h4b/h4cDh4sHi4r/g4bzd3bfZ2rDZ3KzV2azS2a3R26zO26vN2abL2pvD2JbB2pfF2pXE1pLB1pC+1Yq30YCtwnikuXOeuHScvHaewW6bxmybyGqcx2mdyGmeyWefymahy2ajzGWkzmSlzmGky2OmzVyfxmap0GSoz2Koz2Ooz2Ooz2Sp0Gaq1mmt2mer2Gaq12aq1mmv12yz22iz2maz2mSy22Ww3Wey3miz32Ww3GKx2WGy2GOx2Gax2Guy2mqx12mw1mmw1miv1WWs0mOq0GWs0mSr0WWr0mOs0GGuz12pzVWgxk2YwEqXuUiWtEGOrzqGqjiDqS5/pSp7oy97pzh/sTqAsjuErkKJsUaNs1Wav2OoyWitynKz0Xmz0nyz0n2y0X2z0Huxz3qwznqwznWwy3Ctx2mpwmGjvFqdtk2TqkiOpEWLokWLokGKn0WQoVGVqFeUqGCVqmaZr2ebsmmdtGics22huG+huHChunOjv3irwHyxvn+8wI3Jz43M04nK04jI0orL1IzL1Y3K1I/K1I3J04zK1I7L1Y3K1I3K1I3J1Y3J1Y3J1Y7K1o/L15HM3JHM3JHM3JHM3JHM3JHM3JHM3JDL25LN3ZLN3ZHM3JDL25DL25LN3QAA5vDi6PLm6PTq5vPq5/Pq6vPl6vPl6fLk6vPm6PXg5Pjc4vXh3/Hm3e/s3e7q2+vn2Ojk2Ofk1ubi0ejf0Offz+bg0OXi0OXizuXjzuXjy+PhyuLhyOPixOLixePjxePkxePkxuPkxuLjxODhwd3ev9vcsdvbrNfZrNbarNXbq9Hbq8zbqMnbpMXapMbepMjdocfWocfXosjZoMbXk7nLiK3Bgqa+gaLBf6DBdZ3HcpzIb5vGa5rFaJrDZZzCZ57EaJ/Fa6LIZqTKX6XKYaPKYJ7IaKPPaqfRaqrRaanRZajPY6fOY6jVZ6vaZ6vaZqrZZqrYZ63Va7HZbLPba7PbarPbaLPbaLPcaLLeabDgZrLeY7PdY7LcZLLcZbLdZrDYZ6/XarDXa7DXaKvTZKvQZKvQY6rPZavRZK3RYa/PYKzQWqXLU57HUJnATZa8SJG3QouyQIiwNoOsLnumLHelM3ytOICzPISzQIi1QYexTZK5W5/DZqfKbK7Pb7DQcLHPdLLQdrLQdbLQdbHPdbHPdK/Mcq3KbqnGZ6TAYJ25UZSsTZCoSo2mSIukR4ujS5GlUpWqU5OoW5itYpuxY5yyZ5+1a5+2cKO6cKO4b6O4cqa8ea3Cf7THgbzFi8fQj8vUjcrUjMnTi8jTjcnVjcnVjcjTi8fUjMfWjcnXjsnYjsnYj8vXj8vXjsrWjcnVjsrWjsrXjsrXjsrXj8vYkczZkcvYkszZk87blM7blM7blc/cldDdlM7blc/cAADp8+Lr9efp9eno9+3n9Ovq8+bq8+bp8uXq8+fq9+Pn+t/h8+Hg8ebe8Ove7erd7Ojc6+fc6ufa6eXT6uDS6eHR6OLR5uPR5uTQ5uTQ5uTP5ePP5ePN5eXK5ufK5ufJ5ebJ5ebI5OXG4uPE4OHC3d7A3N2z3Nuw29yv2dyu192u1d6t0N6rzdynyNqnyN2oytyny9mnzNqpzdulytidwdCVucuRssmNrMmKqcmFp8+Cps98o8x1nsZsmMBlmb1lmb5nm8BqncFknsJbn8NgoMZjn8hmnspmoMpopc1ops5jpcxips1gpNJkqNdlqdhkqNdkqNZnrdVrsdltstpsstpqstlos9lostposd5qseFns+Bks95jst1jst1jst1lstposdlpsdlqsNhqrtZmrdJmrdJlrNFmrdJlr9Jhrs9gq9BdqM5apM1XoMpSnMNMlr5Jk7pGkLg9ibI0f6sveqgyfKw0fa42fq08hLI+g65Gi7NPk7pcnMJkpspmqstnq8prrMpvrMpvrsxvrctvrctwrcpwq8hrp8Rmor9inrtXmbJTla5Rk6xPkKpOkahOk6dRlKlTlKlZmK1hnbNlnrRmn7VroLdxpLtwpLlwpblzqLx5rsJ/tMiAusWJxc+PytSOydONyNOLx9ONydWNydWMyNOLxtSMxteNyNiOydmOydmPy9iQzNiPy9eOytaOytaQzNiQzNiPy9ePy9eRzdmTzdmVz9qUztqUztqUztqVz9uW0NyVz9uVz9sAAOzz4+305+z16uz37ur17Ov05+rz5uny5erz5+v25Or44uf25eHx5d/v59/u6t7t6d7t6d3s6Nvr5tTs4tTr49Pp49Ln5NLn5dHm59Hm59Hm59Hm59Hn6dLr7dDp683m583l58nk5sbi48Tg4cPe38Dc3bbd3Lbd3rbc4LTa4LPY4LHW3q7S3KzP3KzO3qvP3arR3KrQ26fN2KjO2aTJ1p7C05m80pW20JKxz5Kv1JCv1Ius0oapzoCnzHWlyHKixXGixXKixWugwmOfwmagxWSdxWGYwl6ZwmKfx2GgyF2fxl2hyF6jzmGm0mKn02On1GSp1Get1Wqw2Gux2Wyy2muz2miz2miy22ix3mqx4Wez4GOz3mOy3WOy3WOy3WWz22ay2Wey2Wqx2Wux2Guy12yz2Guy12yz2Gqz1mWy02Sw1WGs0l6o0Vunz1WiyVCdxE2awUqXvkOQtz6KszaCrTN+qzB7qS94pDiBrDyBrECEsEWHskyMtFiZwGCixWOmx2anxWmpx2qryWmpx2mpx2urx2yrx2enw2Ojv1+fu1eZslOVrk6QqUyOp0yPpk6Tp1CTqFSUqViXrGKds2egtmaftWugt3Gku3GlunGmunSpvXqvw32zxn65w4jDzY7J043I0YzI0ovH043J1Y3J1YzI1IvG1IzH143I2I7J2Y7J2Y/L2JDM2JDM2I/L14/L15DM2JHN2ZDM2I/L15HN2ZTO2pXP25TO2pPN2ZLM2JPN2ZXP25XP25XP2wAA7vPk7/Pn7vXq7vbt7fbt7fbp6/Tn6vPm6/Tn7Pbm6/bk6vXm4/Lk3+/j3+7p3u3p3u3p3ezo3Ovn1Ozi1Ovj1Ork0+jl0+fn0eXq0eXq0eXq0OTp0+fq1uvt1Onr0ebo0OTmyuTlxuLjxOHixODhw9/gut/fud7gud7iuNvittnhstjcr9XZrtTbr9PdrtPdrNTcq9Lap87XpMvUpMrVosfVn8LVm73Vl7jSlLPTlLTVkbTVjrTUjbXVh7PVgq/QgKzNf6vMe6rLdKfJbaHFY5m/Xpa9XZjAXpzEXJrCWpzDW6DHXaPLX6XNYKbOYafQY6rSZKrSZ67VaK7WarDYarLaaLPaZ7LbaLHearHhZrLfYrLdYrHcY7LdY7LdY7PaYrHYZLDXaLLZabHYbbPYbrXabrXab7bbbbbZabbXabXaZrHYX6nTWqfPVqbMU6LJUaDHTJvCSZe9RpS5PouzOYSvNH+rMXyjNoCoOX+rP4GxQ4SzSIiyUJC4VZa8YKHFZqrJaq3Kaa3KaazJaazJa63Jba/LaqzIZafDYKK9V5myTpCpR4miRoiiSYyjTpKmUZSpVJWpWJesYZyyZ6G3Z5+1bKG4cqW8caW6caa6daq+eq/DfbLFfLfChsHLjcjSjMfRjMjSi8fTjcnVjsrWjcnVjMfVjcjYjsnZj8raj8rakMzZkczYkczYkc3Zkc3ZjsrWkMzYkMzYjsrWks3Zlc/bltDclc/bk83ZkcvXk83Zlc/blc/blc/bAADx9OXx9enw9uvu9e3u9u3u9+rt9unr9Ojt9ent9efr9OXp8+Xn8+bk8uTf7ebe7enf7ure7erd7ejW7eTW7eTV6+XU6ebT6OjR5erR5erR5erQ5OrR5erS5+nR5ujQ5efQ5ObJ4+TG4uPG4uPG4uPH5OS/4eK+4OS73uK52uK52+K23d2z2tyz2Nyy196w1t6t1dys09uq0dmp0Nimzdakytajx9egwtmcvdaWu9eVvNiUvNmRvNiQvNmPutmMttaKtNSJs9OGstJ8q8ttnsBbj7NVi7BSjbRSkLhUk7pTlLtXm8JXncVbocldospepMxgps5fpM1kqtNmrNRortdosNhlsNdmsNhpsN5rsuFmsd5ist1ks95jst1jsd1js9pistlhr9dksNhostlss9hutdputdpvtttut9pruNlrtttqtNtmsNhdq9JaqtBYqc9Wp81Vps1TosZMmb5HlLpEkLlAirU3gqg1f6c2e6g+f7BFhbZJh7RLi7VLjLNUlr1doMFlqsdrr81prcpprcpprchrrsloq8ZjpsFeobtVl69Nj6hHiaJGiKJLjqVPlKhSlapUlKpamK5gm7Jnobdmn7Vqn7Zwo7pxpbpxprp1qr56r8N9ssV8tsGFwMqMx9KMx9GMyNKLx9ONydWOytaNydWMx9WNyNiOydmRzNyRzNyRzdqRztqSztqRztqRztqPzNeQzNiQzNiOytaSzdmVz9uW0NyVz9uVz9uVz9uVz9uVz9uVz9uVz9sAAPL26vL26vL26vL26vH26u736u726+/37e717u317Oz16Ony5ejx5Ojx5OTw5d/t5uDv6d7v7Nzv69jt5djt5dfs5tfq59bp6NLn6dLn6tLl69Hj69Lk7NDl6dDk6dHl6dDj6czi5crh48nh48ng4sjf4cTf5cPg5r/d47vc4rvd4r7g4r7f4r3f4rzc37bZ3a/X267V2q3T263T3KzS2avQ2KfK2KXF2qTD3JvF3JrF3ZfB3ZW93JK72o+91oy51I241oy32Im31HytxWmatVmJp1aFpUx/oUuCpk+Kr02Ms0yPtkySt1KYvVWawVecxlygzF2hzl6iz16iz2On1GOr1Wau1Wyt1m6v2G2z22qy3mez4WS14mOz4Gix4GOy4GOy4GSy32ax32ex3mSy2Ge02Wqz2W202mq02Wa022q13Gy03G203Gmv12Or02Kr0mCs012r0limzVKfxk2Xvk2VvUuSukKHrzyCqjl9qj+BsUSEtEqFtkiHtkaIskeNtUySt1WcvV2kxmCmyGGoyWKpxmSpxWKlwWChvV2cuVSWr06QqUiKo0mLo0uNpk6RqlSWr1eXsF2as1+atGWgumWeuWect22hvG+luXOpuXWrvHqwwX2zxH2zxIm/0I/F1o7F1ZDG147H143G1o7G15DH2JDJ2o7K2Y3I2I3I2I/K2o7N2Y/P2pDQ24/P2o/P2o/P2I/Q2I/Q2I7P147O15TO2pTO2pPN2ZTO2pbP25fO25fO25fO25fO2wAA9Pjs9Pjs8/fq8vbq8ffp7vjo7vfq8Pjt7/fu7vbs7PXo6fLl6PHk6PHk5vHl5fHn4fDo4O/q3u/r2u/m2u/n2e3n2Ovo1+rp0ufo0ufp0+fs0uXs1Ofu1Ojt0ubr0eXqz+PozuTnzOPly+LkyuHix97gxN/kw+DlwN/jvd7ivN/iv9/ivN3gvN3gu9zfuNzetNrestfdsdbesdXfr9TcsNTdrdHdqsveqcrgncfcm8bcmcLbl77alLzYkLzTjbjSjbfUjbbVibXRfa/FcKG6ZpayZZSyV4ioToKjToaoSoerRYSqQ4aqSo6yT5K4U5W+VpjDWJvHXaDMXaDMYKPPXqTOX6fOZqfPaarTa7HYZrLaY7LaYLXcY7bdaLTdY7PgY7LgZLLgZrHfZrDeYbDWZLLXabLYbLPZaLLYZbPaaLTbbLTccLbebbPbaK/XZ6/XZbHYYa/WXKvSWabNVJ7FUJe/UJa+SY62RIixPoGuP4GxQH+vRH+wQ4KxQoWvQYevQoiuRYuwSZC0T5a6VZzAV5++WqG+W5+8W5y6Wpq4U5WwTZCrRoijRIahRoijTZCpVpixWZmyX5u1Xpq0ZJ+5Z6C6aJ65baK+b6W4cqi4c6m6eK6/e7HCfLLDiL7Pj8XWkMbXkcjZkMjZj8fYkMjZkcnakcrbjsnZjcjYjcjYj8rajs3Zj8/aj8/ajs3Yjs3Yjszbjszbjczajs3bkM3blM7alM7ak83ZlM7als/bl87bl87bmtHemtHeAAD0+Oz0+Oz0+Ozz9+vw9ujt9+Xt9+jw+evv+O3v9+vt9unr9Ofo8eTn8OPo8eTo8+fl8uji8Ojf7+jb8Ofa7+fZ7efZ7OnX6+nT6efT6ejU6evT5+zV6O7V6e7U6O3S5uvO4ufN4+bN5ObM4+XK4ePL4uTG4ePD4OPA4OK+4OG93+G83eC629652t242dy32dy22t622t+y1d2y096y1d6y19+w09+t0N6sz96jzNyhy9yfyNucw9qZwdiWwNaSvNOPuNKOtdKLttCHtsuDssmCsMqEsMx4pcJrnLlqnrxclLRKhqdBgKFCgaNFg6hKh65QjrdTlL5XmcNam8Ven8lcocpaosphocplpc5lq9NgrtNdsNRcs9detNhktNljs99jsuBksuBos+Fnsd9ks9hms9hosddpsddosdhntdxptNtstNxvtt5utNxqsdlnsNhmstljsdherdReq9JZo8pVnMRUmsJPlLxMkblEh7RAgrJAf7BCfK4/fq09gKpAhq1BiK8/h609has9hqxEjLJIkbJMlLNRlrZVmLlWl7hPkrBJjapDhqNAg6BBhKBNkKhVl7BXlrBem7VembNkn7lnn7pnnbhwpcBvpblwp7dzqbp4rr96sMF8ssOHvc6PxdaSyNmSyNmQyNmPx9iPx9iRydqRytuOydmNyNiNyNiQy9uQzNmSztqRzdmQzNiQzNiQyt2Qyt2Qyd2Ry9+Uzt+UztqUztqUztqVz9uX0NyYz9yYz9yYz9yZ0N0AAPT47PT47PT47PP36/D26Oz44+755u/56e/46u/46+736u326ev05+ny5erz5Ov15+r16eXy5+Hw59vw59rv59fs5dbp5tbp59Tr59Tr59Tq6tTp69To7NTo7dTo7dLm69Dk6c7k58/m6NDn6dDn6c7l58jk5cTj48Hi4r7i4b3i4b3f4rzd4bnb3rfZ3LbY27fZ3bja4LfX4LfV4bXX4rTY4rDV3q7S263R2qjQ3KfP3aTL26DH2pzE15nC1pnC2Je/2Ja815S+1pTC1ZG905K+1pjD3pXA2Y681Im81Xmvy2ulwl+ZuVaPsVCKrk2FrEuErEqKsVOTuleXvlubwlecw1SdxFydxWCgyV+lzFakzFSo0VWu1liw2GGx21+w3GCv3WOw3mez4Wiy4GSz2Gaz2Giy12qx12iy2Ge23Gq23W213W603G2z22uy2mix2Gaz2mOx2F+t1GGt1F+o0F2lzVyiylecxFKXwEuOu0mLu0WFtUWAsT59rDp8pzuBqT2GrjyHrziDqzR+pzV/qDiDpTyGpkGIqkaLrUiMrUOIqECGpTyCoTl/njp/nEiKo1CSq1OSrF2atF2YsmOeuGafuWact3GmwXCmuXKouHSqu3iuv3mvwHqxwYW8zI7E1ZLI2ZLI2Y/H2I/H2I/H2JDI2pDK247K2Y3I2I3I2JHM3JLM2ZTP2pTO2pTO2pTO2pTO2pTO2pTO25XP25bQ3ZXP25XP25XP25XP25bP25fO25fO25fO25nQ3QAA9fnt9fnt9fnt9Pjs8vjq8Prn8fvp8Pnq8Pnq8fns8Pns7vfq7fbp7PTo7PTl7fXm6/Xo6PPo5vLo3vDn3O/n2u3n2evo2Ovo1evm1evn1ero1enq0+jq0ubq0ufr0ubq0ubq0efq0ejq0ujr0+ns0+nsyubnx+blxOTjwuPjweTjweHjweDiv9/hvt3hvdzfvdvfvdzivdvjvNrjudvkt9rjtNngstfdsNfbrNTcqtPcqdDdps3cpMrcpMrco8jcosfdocTcoMfcn83dnMnbmsbanMnenMfcmsbblsXbkMLZjsHaicDcf7bUdq3Oa5/EXZO5T4yzTImxS4ixUY22T5C3TJG5VJW/WZnFWJ3JUJzJTJ7LS6HOTqPRVqfVV6jWW6zZYK3bZbDeabLgZbPaZ7PaabLabLLaarLaZ7TcbLffb7bgbrTdbbHabbPbbLPbabPbZ7HZX6/WYLDXYa3UY6zTZazUYabOXKHJVZnFTpG/TI67Soi3QYKvOXymOH6lOYKqOIOtOIKrNoCpM36nLXqeLHeZMHebNHmdOHufM3mbM3qbM3maMXeYMneXP4SdTJCpUZGqXZmyXJexYZy2Z5+6Z5y3cabBdKm+c6m6cqi7dqy/ea7Beq/BhbrMjcLUksfZk8jZkMfYkcjYkMfXkcnYkcrZj8rYj8nXj8nXkszblM3bl9Ddl8/dl8/dl8/dmNHcmNHcmNHcmNHcl9Hcl8/dl8/dmNDels/cls3bls3blszal83bmc/dAAD2+u72+u72+u72+u72+u70++70++7z+u30++70++/x+u/u9uvt9ers9Onq9OXq8+Xq8ufq8ujq8erk7ubh7eff7ejd7Orb7erZ7ubZ7ejY6+jY6urU6OnQ5efS5+nT6OrT6OrS5+vS5uvT5+zU5+3S5uvK5ebJ5ebI5OXI4+TH4+PF4t/F4uDF4eLF4OTF3+PD3ODA3OHA3uG93uG83eG62+C329+02d2x2dys1tur1dqq09uo0Nuoztyqy96pyt2oydyqyt2kydqfy9ify9icydWcyNWaxtWZxdaaxdaaxtabxteVyNyQxNuMvtqCstNypMdYlLdMhbFHfq9Iga1Hg6tGhK1MirhOjcBQj8dNlMdMmshOncxOn81Ooc9No9BTqNVaq9lgrNtlsN9os+BsteJqsd1rr9xqr9xosd1tteFxteJvsuBusdxwsttxs9xwsttvsNlhs9letNphsthjsNdlr9ZmrdVhp89boclWncRSmcBMkrpHjbU+haw7gak6gqk3gqg2gac3gqg2gacwfKIlcJYmbpQscJcucZcrdJYsdJYtc5UvcpYuc5QyfJhGjKZQkKldmbBdmLBhnLZmn7plm7ZvpL9zp79ypr1wpLxzp795rcR8rsOFuMyLvtKRxNiTx9qUyNmVydmTyNWTydSSytSSytWTy9aUy9aUzdeYzd2bz+Cc0OGc0OGc0OGc0OGc0OGbz+Cbz+Cbz+CZzd6Zzd6bz+Cazt+Zzd6Xy9yWytuWytuYzN0AAPb67vb67vb67vb67vb67vT77vT77vP67fT77vT77/H67+726+316uz06er05erz5ery5+ry6Orx6ubx6eTw6uDv6t7t693u69zx6dzw69rt69vs7djr7dPo6tLn6dLn6dLn6dLn6tLn6tLm6tHl6dLm6svn6Mrn6Mrm58rm58rl5sjk4cjk4sjj5Mji5sni5sXe4sDc4L/d4b3e4bzd4brb4Lfb37bb37Pb3q/X267V2qzS26zQ3KnO2qjL2qrM26vN3KzO3qfN26HN2qLN2qDL2KDL2J3J1pvI1ZvI1ZvI1ZvI1ZXJ2pPI3JTH4JDB34a52GmiwlSKs0d8qEV7pEJ7oUB7o0N+qkWBskyJvkyMw0yRyFGXzlCZ0E6Zz0mezk6k0lKn1lWp2Fut3GOw32ax4Gev32mv3mmv3Wew3Guy3m6y326x3m6x3HCy2nK03XGz3HCy22i23We432a022Sx2GSw12ev12Ss1GCo0F6mzlujy1Wbw1Sawk+VvUeNtUCIrzmEqjWApjR/pTN+pC96oCNulBpjiRlhhxlghxxmiyFqjyNqjydrkSdtkC11k0CFok2NqF2Ysl6Zs1+atWSdt2Wbtm2ivW+ju2+junCku3Onvnisw3qtwYCzx4i7z47B1ZPG2ZTI2ZXJ2ZPI1ZPJ1JLK1JLK1ZPL1pXN2JbO2ZnO3ZvP4JzQ4ZzQ4ZzQ4ZzQ4ZzQ4ZvP4JvP4JvP4JnN3pnN3pvP4JrO35nN3pfL3JbK25XJ2pbK3AAA9vru9vru9vru9vru9vru9Pvu9Pvu8/rt9Pvu8/ru8fnu7/fs7PTp6/Po6/Tl6/Xm6/Po6/Pp6/Lr5vHp5PDq4e/r3+7s3u/s3fLq3fHs3fDt3vDw3fDy2O3v1ers1Onr1Onr0ujo0ufn0efn0ebm0efnzOjpy+foyubnzOjpy+bnzeXjzeXkzuXnzuTpzeTpxuDkwt7ivtzgvN3gvd3hu9zgttretdvfstresNbbr9TZrtHbrc/cq87bqs3aq87crM/crtDerNDdps3bpczapMrYo8rYn8rXncrXncrXnMnWmcbTkcfTkcjXlMnclMfflcjiib/adajLXI62UIKnTIGjRHqhQHehQ3qqRn6xSoS8TorFUY/IU5PMVpjRTZvPTp7RT6DST6PVVajaXavbYa3dYq3dZ67fabDfaLHdabHdbLDdbbDdbrHbcbPbc7XedLbfdLbfbbbda7XdZ7LZY7DXYq/WY6/WY67VYKvSX6rRX6jPX6XNX6XNWqDIUpjASpO6Qo2zOYSqMn2jMn2jL3mfJnGXHGeNEl+FDlyBD1yCE1+FGWGHHmSLImiNKG+QNnqZRYOhXJazX5q0YJu1Zp+5aqC7b6S/b6O7caW8c6e+dKi/eKzCe67DfbDEg7bKir3RkMPWlMjZlcnZlMnWlMrVlMvVk8vWlc3Yls7Zls/Zm9DfnNDhnNDhm8/gm8/gm8/gm8/gm8/gm8/gms7fms7fm8/gms7fmc3emMzdl8vcl8vcl8vcmMzdAAD2+u72+u72+u72+u72+u70++70++7z+u30++7z+u7x+e7v9+zt9ers9Onr9ebr9Obr8+jr8+nr8uvm8enj8Orh8Ovg7+3e8O3d8urd8ezb7uzc7+/c7/HZ7vDY7e/W6+3W6+3U6unU6ujU6ujU6ujU6ujO6urL6OnM6OnM6erO6enS5+XS5+bQ5ejQ5OnO5OnH4eXE4eXB3+O/4OO/3+O83uK329+02d6x2Nyy1tyy1Nux0tyw0N2uz9ys0Nqs0Nqt0dut0dus0dyqz92pztyozdupzduiztifztefztefzteezdaUzdSTzNaRyNiRx9yYzeOVyN+Pv9+Jt9yDstN2qMhlmL1Uh7FGeag8caQ7caVGfbJOiLtQjL9WlMZUl81Tl85Ql85Oms9SoNVVpdhdq91eqdxjrOBosOBosdxrs95usN1tsN1tr9pvsdpytN1ytN1ytN1wtN1utNxpstpms9pktNtls9tntNtkstljsNhjrtZlqtNjqdFjqNBeo8xWnsVOmb9Gkbc9iK47hqw4gaYsdpskcpYdb5MRZYkPXoYQXIUSXIUWXYcaX4gfZogrbY82dJRPiahblbJgm7VnobtqoLttor1soLhxpbx0qL9zp752qsF8r8N9sMR9sMSGuc2NwNOSxtaVydmWy9iWzNaUzNaUzdiWztmXz9qY0Nub0OCc0OGc0OGbz+Cbz+Cbz+Cbz+Cbz+Cbz+Cazt+azt+bz+Cbz+Cbz+Cbz+Cazt+azt+bz+Cc0OEAAPf67vf67vf67vf67vf67vT77vT77vP67fT77vP67vD47e/37O/37O316uz25+v05uvz6Ovz6evy6+bx6eTy6eLx6+Dw7d/x7N7x6d7w6t7v697u7d3v8Nzv8dzw8dvv8Nvv8Nju7Nbt6dbs6dbt6tXs6dLr6tHq6tHq6tDq6dHq6NPq6NPq6dHm6dDl6s3j6Mjg5cji58Xh5sLh5cHh5L/f47nc37PY3LLZ3LbX3bXW3bPT3bLR3rLR3rDS367R3avO2q3P267R36vP3qrO3arO3azO3abP26LQ2qLP2qLQ2qLQ2p7R2pzQ2pvP25vO3Z7Q4Z/N5KDM6KDL6aHM6pnH5Y2/34O22WufxVCErjZrmjBnmDx1pkmEtVGNv1CSxVCUyE2Tx0yTyE+XzlCd01ej2Vil212r32Gv4GKu22aw3mev3Gqx322x3W+x3HKy3XKy3HOy3XO233O44G+13W2332654G264G674Wu43mm23Gi12mex12Wv1WOt01+qz12nzlmly1GcwkiTukSPtjyHry96pCl1oSd1nyFymRtpkxdijRRchxVahhRahBZfgidrjS9tjUR8nFePrWGbtmqgvWufvGyfvGmdtW+junOnvnGlvXWpwHmtwnquw3mtwoG1yom90ZHE15XJ2pbL2ZjN2ZfN2ZfO2pjO2pnQ3JrR3ZvQ4JzQ4ZzQ4ZvP4JvP4JvP4JvP4JvP4JvP4JrO35nN3pvP4JzQ4ZzQ4ZzQ4ZzQ4ZzQ4Z3R4p/T5AAA9/ru9/ru9/ru9/ru9vru9Pvu9Pvu8/rt9Pvu8vru7/fs7/fs8Pjt7vbr7ffo7Pbn6/Po7PTq7PPs6PPp5vTp4/Lr4fHt4PHr3/Dn3+/o3+7q3+3q3u3t3e/v3e/v3e/w3e/w2/Dt2PDr1+7q1+7q1u3p1uzq1uzq1uzq1evp1Onn0uro0urp0Ofpz+XqzePoyuDmyuLox+LnxOHmwuHkwN/iu9zftdrdtdvdudnfuNjettTetdLgtdPhstPjsdLhrc7erM3crc/drM/drM/dq87crc/dp9Ddo9DdpNDdpNDdpNDdpNDdpNDdpNDdpNHdpNDdpdDip9Hlpc/lps7oo87pmMnlk8fjisDffrTTW5O6PnelN3GgO3ioRYK0QIe1Qoy5RY29SI/BTZPJUJnSVJ7XUJ3VUKHWU6XYVqfVW6rZXKnYZK/fbLLfbrLdcLLecrDcdbHecbXecLffcLbecrjgdbvib7rfb7rfbbjea7bbaLXaZbTZZbPYY7LXYbDUYK7TX6vSV6TLTpvCS5i+RJC8OYK1MnqxMXquMHqoK3eiI2yYHmWSHF+NFVqFE1+CIWeJJ2WHOnOTT4akYJe0aJ68aJu5a5u7ap22b6O6cKS7cKS7danAeK3Deq/Eea7DfrPIhLnOjsDVlMfalMnYmM3amM3amc7bmc7bms/cm9Ddm9Dgm8/gm8/gm8/gm8/gm8/gm8/gm8/gm8/gms/gms7fm8/gnNDhnNDhnNDhnNDhnNDhnNDhntLjAAD0++70++70++70++70++70++70++7z+u30++7y+u7v9+zv9+zw+O3v9+3v+Ort9+jt9eru9uzu9e7p9Orn9erk8+zi8u7h8u3f8Off7+jg7+vg7uze7u3c7+zc7+zc7+zc7+zb8e3Z8e3Z8Oza8e3Z8OzX7evX7evX7evW7OrU6+nS6ujS6unQ5+nP5erN4+nL4ujL4+nG4efD4OXA3+O/3eC629633d+33d+62+C52d+41+G41eO31eO11OO00+Kx0N+uzdyszdurztus0Nyrztutz9yo0N2m0N2m0N6n0d6m0d6q0N6q0N6q0N6qz92p0N2m1N6n1OGn0+Ko1OSm0+ic0OeWzOSTyuWY0OyHw+NsqcxLh683dqE6eKY5f6o6gq4+hLNCh7hIjcBLk8lNl81Lls5LmNJKmc9LmspSn9BXotRiq9xpr99ssN1ust9wsN5zseBvst5utN5tstxus91vtd9tt99tuN9rtt1ptNtns9pms9pptt1ruN9otdxjsthdrNJZqM9Uo8pUoslRm8tHjsY/hcE7grs2gLMygawwfagqdKAka5gbY40SX4QYYIUeXYEvaYtBeZhXjqtjmbdkl7Vpmrlsnrlvorxuobpuobp1qcJ6r8R8scZ6r8R9sseBtcqJvNCRxdeUydiYzdqZztuaz9yaz9yaz9yb0N2b0OCbz+Cbz+Cbz+Cbz+Cbz+Cbz+Cbz+Cbz+Cbz+Cbz+Cc0OGc0OGc0OGc0OGbz+Cbz+Cbz+Cc0OEAAPH67fH67fH67fH67fL67fP67fP67fP67fP67fH57fD47fH57u/37O/37O/46u/56u726+316+307er16+j26+T07eLy7uHy7eLz6uLy6+Lx7eLw7uDw7t3x7d3x7dzw7Nzw7Nvw7drx7drx7drx7drx7drw7trw7tju7Nbs6tXr6dTs6tTs69Ho68/l6s/k6s3j6cri6Mbh58Ph5sDf48Df4rvc37bc3rbc3rrb4bvb4brZ47nW5LjU47fT4rfS4rfT4rXQ4LHQ3a7S3K7S3K3R267S3KvQ3arQ3qvR36zS4KzS4KrR36jQ3qjQ3anQ3qjQ3aTS26bU36fU4ajV5KbV5p/V5pnR5JXO45TN5IzL4X6/13CvzVydwkqLtECErTyAqzx/rUCCskaJuUaMvkqRxkqTy0uU0UmVzkmXyk2ZzVCbz1qi12Co2mSq2mis3Gut3W+w4HCz4nC042+z4W6y4G2y32q03mq03miy3Gex22ax22Wx22u34Wy44mq14Ga13F+x11us0lqs0Vmq0Fej0VCXzkiOyUWMxD6IujmJtDiHsjSBrCx2oiNtmBhnjRhhhxpcgihkiDlykk+Go12SsGSXtW2evW2evG+hvmyevG2fvHaoxXuvxX2yx3uwxXyxxn6zyIa5zY/C1ZPH15fM2ZnO25nO25nO25rP3JzR3pzQ4JzQ4ZzQ4ZzQ4ZzQ4ZzQ4ZzQ4ZzQ4ZzQ4ZzQ4ZvP4JzQ4ZvP4JvP4JrO35nN3pnN3prO35zQ4QAA7/nr7/nr7vjr7vjr7/jr8fjr8fjr8fnr8vnr8fjr8Pjt8fnu7/fs7/fs7/jq7/nq7/fs7vbs7vXu6/bs6ffs5vbv5PXx5PXw5fbt5fXu5fTw5fPy4vPv3vTs3/Ts3fLr3fLr2fDq1+7q2O/r2vHt2vHt1+3r1+3r1+3r1uzq1Ovp0uvo0uvq0OfqzuTpzuTqz+Xry+PpxODlxOLnw+LlwuLlvd7ht93ft93futvhu9vhu9nkutjmudXkuNLiuNLiutPjutPjttThsdbesdber9TcsNXdrtPfrdLhrtPhr9TirtThqNThpdTgpNLfo9Heo9Hdos/cpdHfp9PkqNPnptXnoNfkm9PiltDilM/jj9DfhsrZh8nhhsjpdrffY6fPU5nBSIy3QoWzQIOzP4SzQoi7QonDRYvMRY7MRZTHSZXKTJbMVZzSV5/SVp7PWZ/QX6LUZafZaq3dbrLgbLDfa6/eaq/eaLHdabLeZ7DbZa7aZa/bZbDcaLPfZ7LeZ7HeZrXeYbXaYLPZXbDWWazSW6jSVZ/QUJjNTpfJSJS/QJO9PI64O4q1OISwLHijIXGaH2qSHWCGI2GHMGqLQnmVUIajXZCuaJm4aZq5a527aZu5apy6c6XDeK3CfLHFe7DFe7DFfLDGgrXJir7Qj8PSlcrXl8zZl8zZmM3am9DendLfndHhnNDhnNDhnNDhnNDhnNDhnNDhnNDhnNDhnNDhm8/gnNDhnNDhnNDhnNDhnNDhnNDhnNDhndHiAADx+e/x+e/y+u/y+vDz+vD0+vD0+vDy+O7z+O7y+e7x+e7y+u/y+u/y+u/x+e7x+e3w+O3v9+zv9+3u9uzt9+zs9u3s9u7s9+/p9vHp9fHn8/Do9PLn9e/i9erh8+nh8+ng8ufd8enc8uzd8e3c7+3d8O/Y7+zY7+zZ7+3Z7OvX6ejV6ejW6ejV6OjR5OTR5efS5uvP5OnM4ebM4ebJ4+PH4+LF4uHC4N7B392929282t682uC92eK82OO61OO61OO61eO61eS41eGy1N2w092t0d2t0t+x09+z1OCy1OKw0+Ov0+Sn1d+l1N6k0t6j0d6j0N+hz+Cj0eKl0uSn1Oel1ueg1+ee1eWa0uOZ0OKU0OCQ0OGQzuOQzuePzOiJxel4td1kos1OjLw/fbA5e68/gbdBgr1GhsRIisdKjcZMj8ZPk8ZUl8hUm8lSm8lQl8hSl8tZndRdotVjqdpmrN1mrN1ort9sseBrsN9ordxprdxqsN5qr95rsd9rsd9tsuFrtOBmstxns91ksNtfqtVcp9BXos5Sn8xSn85Lm8lClcA/k70/j7k/jbg4hrAteqMpcZslZ5EiYIspY4o3b5FDeZpNgqJcj65klLNsm7tsnbpom7ZuortyqcJ2q8R4rMN7rcN9sMSAs8eIvM6LwM+TyNWWy9eXztqWzdmb0t2c096d096d096c096b0t2b0t2d096d096c0t2b0d2b0d2c0OCc0OCc0OGc0OGb0OCa0OGa0OGb0OGd0uMAAPL68PL68PL68PH57/L57/P47/P47/X68fP47/L57/L67/L67/H57vH57vH57vD47fD47e/37O/37O727O727O727O/37e/37+r18ur18un08en08ef17uX26uP06eLz6OLz6ODz6t/17OD07t7x7t7w7tnx7dnx7dvw7d3v7Nzt69nr6tfp6Nbn5tPl49Tm59Ll69Hk6dDj6NDi587l5c3m483m48rj4Mjh3sDd3b3b3rzZ3rzY3rzX4b3X5bzW5L3X5b3X5bvW4rbV3rPT3a/S36/T4rLT4LPU37LV4rDT467T5afV3qXT3aTR3qPQ3qPP4KHP4aPR46PR46XT5aPU5p3U5ZzS45vR4prP4JTP35DP4I/M4I/K4I3J34zG5YzG6Xq13ViTwUB8rDd4qzx9sj5+tkWEvUmHw0mGxEqIw0uKwk2MwUqQwEuTwkuSxEySx1CWzVScz1qh016l12Gp22iu4Gis3Waq22aq22is3Wuu322w4W+x4m+y43Gz5G2z4mew3Gix3Wix3WSs2GGr1Vun0laj0FWk00+f0EebxUSYwkOTvUORvECNuDmDrjV8pzJyny1qmCtmkC9pjzZukjxylUh9nlaHqGaVtmydu22gu2+jvG6lwHGnwXWowHqswXyuwn+yxoi7zoi8y5DF0pTL15bP2ZfP2pzU35zU357V357W3p7V3p7V3p7V3p/W3p/W3p3U3ZzT3JzT3Z3S4J3S4J3S4J3S4JzS4JvS4pvS4pvS4pvR4QAA8vrw8vrw8fnv8fnv8fnv8fnv8fnv8Pju8fnv8vrv8vrv8vrv8fnu8fnu8Pjt7/fs7/fs7/fs7/fs7vbs7vbs7vbs7/ft7/jv6vfw6vfw6vbv6fTu5/Xt5vfs5vfs4/Tp5PXq4vbq4Pbr4fbu4PXv3/Pv2fPs2vLs3PLs3vLs3/Ds2uzr1+no1efm1Obl1Ofn0uXp0eTn0OPmz+Plz+Xlz+bkzuXjy+LgyODev93dvtvfvdrfvNjgvtjjwNjkwNfjwNjkv9bivtfiudbgt9Xgs9PhstPisdTgsdTfsNXirdTjq9Plp9XepdPdpNHeo9DepNDhoc/hotDiotDipNHjodLkm9LimtDhmtDhmM7flc7dkc3dkMvdjsncjcfdjcbgi8Xih8Ljcq7VVpO8P4CvOnqrPHutQX+0QX+4P3y8QX68Q4C+RIC/QYS8RIq/SY/ETZPIT5XLUZjKVJvNVZzOV57QXKPWX6TXYafaY6ncZqzfaq/iba/jbrDkcLLlcrTocLTkarDdarDda7LearDdZ7HbYazXXKnWW6rYVaXVTqLMSZ3HR5fCSJbBRJK9QIq3PoSxPHyqOHOjL2qXKmSPLGaOMWmPO3CWRHmcVoytYpa2bJ68dKXBb6bBc6nCdanBeqvBfK7CfrHFhbnLhrrJjcLPlMvXls7ZmNDbmdHcnNTfntXfn9bfntXendTdndTdn9bfn9bfndTdndTdndTdntTfntTfntTfntTfndTgnNPhnNPhnNPhmtHfAADy+vDy+vDy+vDy+vDx+vDv+vDv+vDu+e7t+O7w+e/y+u/y+u/y+u/y+u/x+e7w+O3v9+zu9uvu9uvw+O7w+O7v9+3w9+3w+e/r+e7r+e7p9+3p9+3o9+zm+O3o+e7n+O3m9+zj+evh+Orh9+zh9u7h9u/Z9OrZ8+rd9Ovf8+rf8erd7+7c7u3a7OvX6enV6efU6ejS5+bQ5ePQ5ePQ5ePQ5ePP5ePO4+HM4d/B3t/A3eG+2+C92eG/2eTE2uPE2uPE2uPC2ODA2OG81+K71uK31eO00+Ox1OCv1d+s0+Kr1OOo1OWl09yk0tyi0Nyj0N+k0OKhz+Gfzd+gzuChz+CdzuCa0OGa0OGYzt+XzN6UzdqSzNmRytqPx9mPx9uNx9qJxNmIw92Cvt12s9Vfn8hOjblDga8/faw7eaw6ebE9fLY+fLhCf75Agb5BhcBHjMRJj8VOlclOlchOlcdNlMZNlMZRmMtVndJaotddpdpiq+BoruNur+Vur+Vtr+RvsedwsuNsr9xrrttvst9yteJrtN5ksNtfrdlerNtaqdlRpdBMoMpMnMdNm8ZFkr5AiLg9grI9fa47dqc0bqAuaZktZpQyaZU5b5k3cpdGgKNXja5klbVwn75tpL9yqMJ3qsJ8rcN+sMR9sMSBtMeFusiLwM2TytaVztiY0NuY0Nue1uGe1t+e1d6e1d6d1N2d1N2d1N2d1N2c09yd1N2e1d6e1d6e1d6e1d6e1d6d1d6c1N+c1N+c1N+a0t0AAPL68PL68PL68PL68PH68O/68O/68PD78fD78fH78PL67/L67/L67/L67/H57vH57vH57vD47fD47fH57/H57/D47vH57/H68Ov57uv57uv57uv57un47eb47ej57uj57un67+T56+P66+L56+H27OH27tv169v169727N/06+Dz7N/x8N7w793v7tzu7Nnt69bs6dXq6NPo5dPo5dPn5dPm5dPm5dHl49Dk48bj5MXi5sPg5cHd5cTe6Mjd5cjd5cfc48TZ4cPZ4r/Y4rzX47rW5LfU5K/T3qrT3KjR36bR4KXR4qDP2aHP2qHP3KHO3aLP4KDO4J7M3p3L3Z3L3ZrL3ZfM3ZfM3ZXL3JTJ25LK15DK1Y/I1o7G14/G2YzF1YzG14zH3IfC3YK/3HWz2mSiyUqHsjVxnytpmCttnjFypTV1rDx6tDt8uj6CwEKGwD+Eu0OKvUWMvkeOwEeOwEWMv0eOwEaQxU2WzFGb0FWg1Vui2GSl3G2u5W2v5m2u5m2v4Wms2Wir2G2w3XK14m224Gm04GCt2mCu3V2t3VSn00+izE+fylCeykmWw0OLvUGFtz99sD54qzhzpjJuoDBrnDJrmjdvnDNwmDh1mUZ8oFWGp2iWtmmgu3Clv3irw32tw3+xxX2wxH+yxYO4x4q/zJHI1JXN2JnR3JjQ257W4Z7W357V3p7V3p3U3Z3U3Z3U3Z3U3ZzT3J3U3Z7V3p7V3J7V3J7V3J7V3J3V3ZzV3pzV3pzU3prT3AAA8vjz8vjz8ffy8vjz8ffy8vjz8vjz8vjz8/n08/rz8/vw8/vw8vrv8vrv8fnu8Pjt8Pjt8Pjt8Pjt7/vv7/vv7/vv8Pzw8P3x7fvv7Pru6vjs7Prt6vjv6Pbw6Pfw6ffx7Pr06frv5/ns5vjr5ffq5ffq3fXo3PXo3PTq3fTt3vTv3/Pu3/Pu3fHs3O/r2u7q1+3o2O7p1erm0+nk0ejk0+rm0unl0Ofj0Ofjy+XoyuXpyeXpyeToyOLnyuDnyd7mxtvjxNngwdjeu9jdutfeudjht9fhr9TeqdPdptHeos7coM3enszdnszdnszen83eoM7goM/dns3cnMrdnMnemsndlsrblsrblMjZlMjZk8fYksfXkcXWksbXk8fYjsnXj8vakMzdiMPXgrzTfrrXdbHUWJS/NG+jIFyQHluMJWGWKWSeMWqpMXKtNny0OoC3OH21OoC3PIG3QIW6Q4m9RYu9RYy+QYy+RI/BSJPFT5rMUJzOU5/UXafdZKvhZ63kaazfZ6raZqnZZ6rbbbDhbrLia7DhZKvbYavbX6vbWafVVKLQUqDOUZ/NS5nHRY/BQ4m7QYCzP3uuOnWnNnGiNG6gMGucMGubMWucNG6bO3KaSX2fXY+uYpy3bafAea3FgLDGgrPHfrLDfrLDgrbHiLzNkMXTlczWm9LcnNLcntXfn9bfntXentXentXentXendTdndTdntXentXentXeoNfgoNfgoNfgoNfgn9bgntTfntTfndTendPeAADy+PPy+PPx9/Ly+PPx9/Ly+PPy+PPy+PPz+fXz+fLx+e3x+e7y+u/y+u/z+/Dz+/Dz+/Dz+/Dz+/Dv++/v++/v++/w/PDw/fHt++/s+u7q+Ozr+e3r+fDq9/Lq+PLq+PLr+fPp+u/n+ezm+Ovm+Ovm+Ovf9+je9ujf9+vf9+3f9e7f8+7f8+7f8+3d8evc8evZ7+rY7unW7OfV6+bS6OTT6ubS6eXR6OTR6OTM5unM5+vL5urJ5OjI4ubJ3+XI3uPF2+HE2uDB2d672N2619651+C52OOv1d+p092m0N6gzduezNycytycyt2bytybytydzN2dzdqbytmayNqZx9yXx9qTx9iTx9iUyNmUyNmVyNmUx9mSxteSxteRxdaKxdOKxtaLx9iJwteJw9mBvNZ7t9Z0r9VnotBJhbUnZZIdW4scWI4kXZkiX5ohYpwpaaQvb6oycqwydKg2eaw6fbA9gLI/grU8hLZAibtDjL5Gj8FFjsFGkcdQmc9XntRdodhhpNdjptZmqdpnqttrrt9rrt9orN1iqNlhqtpfqtpZp9VUotBSoM5QnsxLmcdGksJGjr5EhrdCgLI9e6w6d6g3daUycKAvbZ0rapkua5g2cJlBd5xNgaNSjatmoL1zqMN9rseAscd9sMR9sMSBtMiFuM2NwtGUytWa0Nuc0t2e1N+f1d+e1d6e1d6e1d6e1d6d1N2d1N2e1d6e1d6e1d6g1+Cg1+Cg1+Cg1+Cf1uCe1N+e1N+f1eCf1eAAAPL48/L48/H38vL48/H38vH38vH38vH38vL49PL58fD47fD47fH57vH57vL67/L67/L67/L67/L67+/77+/77+/77+/77+/88O377+377+v57ez67uz68ev58+n38er48un38ej47uf57Of57Of57OX46uL45+L56eT57OP47OH27N7z6t/0697069/0693y69nv6tft6Nbs59Xr5tLp5NPq5tPq5tPq5tTr59Ho7NDn7M/m6s3j6Mrh5cfe4cfe4cbc38Pa3cDY3LvX3LnW3LfV3rbV4K7U3qjS3KXQ3aHN253L25nK3JnK3JjJ25fI2pfJ2pfK15fK2JXH2JXG2pXH2pPH2JPH2JTI2ZXJ2pbK25XJ2pTI2ZPH2JPH2I3F1YfB0YnB04rB1orC2IK803u20Hez0Xu422upzUeFqiJfiRdSgRdQhBVOhRNNhxlTjCNdlidhmiZllSxsmjNzpDh1qTx6sDl+sT+Ft0OJu0eMvkaNwEKLwUSKwEmNw1KTy1iazl6h0WOm12eq22ms3Weq22So2WCm112n11ml1Vak0lOhz0+dy0yayEiXxEaVwUWRvUWKuEGDsT5/rjt7rDd4qDNzoy1unihrmClrlzNwmjx1n0N6okaDpVuVtm2iwnmryX6tyX2vxXyuxICyyIa4z4u+0ZTI1prO3Z3R4J/T4p7V357V3p7V3p7V3p7V3p7V3p7V3p3U3Z7V3p/W36DX4KDX4KDX4KDX4J/V35/V4J7U357U357U3wAA8vjz8vjz8ffy8vjz8ffy8ffy8ffy8ffy8/n08/ry8fnu8fnu8fnu8fnu8fnu8vrv8vrv8vrv8vrv8Pzw8Pzw8Pzw8Pzw8Pzw7vzw7vzw7Pru7fvu7Prx7Pr06ffx6Pfx6ffx5/jt6Prt6fzv6Prt5Pfp5frm5fro5fnp5Pfq4vbq3vXo3/Xp3vTo3/Xo3PLp2O7q1+3o1+3o1evm0+rl0+rm1ezo1Ovn1u3p1uru0eXrz+PozeHmyd7ixt7fxt7fxd3exNvcwNrbu9fcuNXcttXetdTfrtTdqNLcpc/coM3bnMjalsnalsrblcnalMjZlMjZlMnWlMnXksbYk8bak8fak8fXlMjZlcnal8vcmMzdl8vclsrbl8vcl8vclMvak8nZkMXYjMHWjcHYiMDVg77Se7fOeLfOeLfSb63LUo+yMGuUF1F8GlGBG1GCGU+AG1GCH1WGIVyGIl+JJmCQK2OZMWqiL3KlOn6wPoK1QYS3QIW5P4W8QYS7Q4S7SYjATY/CVZnJXJ/QYKPUYqXVYaTUXKDRV57OWaPTUZ3NTpzKTpvJS5nHSpjGRZXBQZW+QpG7RI65RIi0QIOxPH+vOHurNXinMHOjKHCbKHGbMXOfN3OgPXajPXuiTIiuY5m+cKLGeqrJfK7Gfa/Hfa/HhbbPibvQk8fXms7endHhntLjntXfntXentXentXentXentXentXendTdntXen9bfoNfgoNfgoNfgoNfgn9Xfn9XgntTfntTfntTfAADy+fLy+fLx+PLy+fPy+fPz+fT0+vX0+vX0+vX0+/Pz+/Dz+/Dz+/Dz+/Dz+/Dy+vDy+vDy+vDy+vDy/fHy/fHy/fHy/fHx/PDw/fDw/fDu+u7u++7u+vHt+vPr+PHr+PHr+PHr+e/s++/r++7q+u3r++7n++jl+Ofl9+jl9ujj9enh9uzi9uzf8+ng9Onc8urY7erX7ejT6eXS6OPQ5uLP5uPR6OTR6OXT6ufT6OrR5ejN4eXJ3uHH3N/F3N3F3N3E3N3E293C2dy81ty31du11dy11N2v09yo0tyk0NyfztucytqVydmUyNmUyNmTx9mTx9mTx9aTx9eSxtiTxtqUx9uUydqXy92XzN2Zzd+Zzd6YzN6YzN6Zzd+Zzd+XzN2XzN2Xy9+Yy+GazeOWzuKUzuGNyNyMyNuLyN6Fwt96ttRpo8dMhqxEe6JDdp44bJQvY4svY4omYYUfXIIhW4cjW44iW5AfYZIoa5wxcqQ5eaw7fLA5fLI6fLI/f7VCgbdCgrZIi75Rk8ZSlMdTlchVmMpUl8pSl8lQmMlKlMVHlsRImMZHlcNHlcNFlMFAlL1CkrxFkLtIjrlEiLVAg7I8f644e6s2eakvd6MtdKAxdKE0c6M3cqM1c5xDf6hUi7JqncR2p8p9rMh/rsp9rcmDs8+Huc+RxNaZzd+bz+Cd0OKd0t6d1d6d1d6d1d6d1d6d1d6d1d6d1N2e1d6f1t+f1+Cf1+Cf1+Cf1+Ce1d+e1d+e1N+f1N+g1N8AAPP78fP78fL68PP78fT78vP59PX79vX79vT59fP68vT88fT88fT88fT88fT88vT88vT88vT88vT88vX98vX98vX98vT88fP77/P97PP97fP87/P78PP78fL68PL68PL68PL68PL68PL68PH57/L68PH68Oj47Ob46uX26eX26eX26+X08OX08OLx7ePx7d7w7Nft6tfs6dPo5dPo5c3j383k38/l4tDl5c/k5tDm5M7k4crg3cfd28bc2sXa28Xa3MXZ3sTX3sLV3b3V27fY3LTX27jW27HV26rU3KTS25zP2pnN2pfM2ZbL2JTI2ZTH25TH25LF2ZLF2ZPG2pXI3JXJ3ZXK3pbL4JfM4JfM4JjM4JrN4ZvO4pvO45vO45rQ4ZrQ4ZrR4ZzS453T5JrS5ZrS5ZrR5ZrR5JnQ55bO65LK54vD4Ia+2oG31n2z0nSrym2kw2ievVeWtESEozNxlhpWgR1ZhidolChplS5tmzt3pz16rDV2qTFypTR1qDt8rjt8sUGCukeIv0GCuUGCuUqLwlKTylCRyFCQx06QxkKUxEWWxUaVxEeSwkeSwkWSwEaRv0aNvEeMvEaIt0ODs0GBsT5+rj19rTt6qjl5qTh4qDZ2pzV1pTR1n0B/qEmCrFyQvG+fyHqmyX2qzHyqyoGwzYW1zo291JXH25rM3pzP35jO25rT3ZvT3pvT3pvT3pvU3ZvU3ZvU3ZvU3Z3W35zV3pzV3p3W35zV3prU3ZnV3Z3U3aLT3aXS3QAA8Pju8Pju8fnv8/vx9Pvy8/n09fv29fv29Pn18/ry9Pzx9Pzx9Pzx9Pzx9Pzy9Pzy9Pzy9Pzy9Pzy9f3y9f3y9f3y9Pzx8/vv8/3s8/3t8/zv8/vw8/vx8vrw8vrw8vrw8vrw8vrw8vrw8fnv8vrw8frw6Pjs5vjr5PXo5fbp5vfs5fTw5fTw4vHt4vHt3/Ht2e7r2O3q1Onm1Onm0ObizeTgzeLiy+DiyN3gyt/eyuDdyd/dx93bxtzaxdrbxdrcxtrfyNvixtrhvtneuNrftNnduNjds9ferdffp9XeoNLdnNDdmM7al8zZlcnalcjclcjclMfblMfblcjcl8rel8relsvfmM3hmM3hmM3hmc3hm87inM/jnM/jnM/jnNTgnNXfnNXfndXfntbhm9Pjm9Pjm9PjndXlndbomtPqmNHolc7llc7lls7ml8/ok8zlkcnikMjhhsTceLbSYp+/SIKoTIauTYuyQYCoOnekOnemNHOkMHGkMHGkKmueLm+iM3SpNneuNneuMXKpNneuPH20Roe+SovCTY7FTI/FQ5HBQpC/RI++R46/Ro6+RY++RY28R4y7R4u6Roe3Roa2RYW1Q4OzQYGxQICwP3+vPX2tOXmpOHioOnukQH6nQ3ymTICsXY23bpzBd6bIeKjIfKzLgLHLh7rQj8PXlMjamM3dl87am9Pdm9Pem9Pem9Pem9Tdm9TdmtPcmtPcm9TdnNXenNXendbfnNXemtTdmdXdndTdotPdpdLdAADy+vDy+vDz+/H0/PL1/PP0+vXz+fTz+fTz+fT0+vP0/PH0/PH0/PH0/PH0/PL0/PL0/PL0/PL0/PL0/PH0/PH0/PH0/PH0/PDz/ezz/e3y++7z+/Dy+vDy+vDy+vDy+vDy+vDy+vDy+vDx+e/w+O7w+O7p+ezm+Ovl9unl9unn9+zl9PHk8+/i8e3i8e3g8e7c8e7Y7erW6+jW6+jQ5uTO4+PM4ePK3uPH2+DI3t3I3tzI3tzI3tzI3dzG29zH3N7J3eHJ3OPH3OS/3OG23OCz3N+43OCz2d+t19+p1+Ci1OCd0d6az9yXzNmVydqVyNyVyNyWyd2VyNyVyNyXyt6Xy9+Wy9+XzOCXzOCXzOCZzeGbzeGcz+Ocz+Ocz+Oc1N+c1d6c1d6c1d6b1d6Z1N6b1uCc1+Kc1+Gf2eah2eqh2emg1+if1+ed1eed1eid1eeb0+WZ0eOV0OKLxtqEvdaGvdx/tdZwqstbl7tOi7VDgbEwcKIqa54pap0kZZgnaJsub6QvcKcvcKcwcag3eK86e7I+f7ZBgrlHiL9Ji8FEjL1FjL1Ijb5MjsBMj8BHjr1HjbxIjLtHiblHh7dHh7dHh7dGhrZGhrZEhLRCgrJAgLA+fq48fKw7fKY+fKU9dqBFeaRVhbBnl71yocd1psh7rM18sMuDuM2MwdWQxteWzd2WzdmY0Nqa0t2b096b096a09ya09yZ0tua09yb1N2c1d6d1t+e1+Ce1+Ca1N2Z1N2d1N2i092m094AAPL68PL68PH67/L68PT88/T69fT69fP59PP59PT68/T88fT88fT88fT88fT88vT88vT88vX98/X98vT88fT88fT88fT88fT88PP97PP97fL77vP78PL68PL68PL68PL68PL68PL68PL68PL68PL68PL68Or77ej57Ob36uf46+j47eXz8OX08OPy7uLx7eDx7tzx7tjt6tPo5dPo5c3i4srf4cnd4sjb4sfZ4sje3cje3Mje3Mje3Mje3Mjd3sne4Mnd4snc48fb473d4bXc4LHb3rXb37LY3qzW3afV3qHT3pvQ3JnO25bL2JTI2ZTH25TH25XI3JPG2pTH25bI3JbK3pfM4JjO4ZnO4pnO4prO4pzP453Q5J3Q5J3Q5JzT4pzT4ZvS4JvS4ZzU4ZnW3JzZ35zY3p7b4aDb4qHZ4qHZ4qHZ46DY4Z/X4qDX46DX46DY45/W4pvV4JHL2Ie/0oi+1oW61X+10HKqzGejzVWTxDd3qyVmmR1ekR9gkx5fkh5flCRlnSdonyxtpDN1qzl7sTt9tDV2rTl6sUGDuUOHuEaKu0uLvE6Lvk6NvkiNvEeMu0iKukiHt0aFtUWFtUWFtUaGtkaGtkSEtESDs0ODs0ODs0CAsD1+p0B+pz94okh7plOEr12Pt2qcw3Cjx3isznuxzIC4zIfA04zG1pLM3JTN2ZjQ2prS3ZrS3ZjR25rT3JrT3JnS25rT3JvU3ZzV3p3W357X4J/Y4ZrU3ZnU3Z3U3aHS3KXS3QAA8vvz8fnx8Pfw8/nx8/ry9Pr29vz38/n08/n09Pr09Pvz9Pvz9Pvz9Pvz9Pvz9Pvz9Pvz8/rz9Pvz9Pzx9Pzx9Pzx9Pzx9Pzw8/zu8/zu8vvv8/vw8vrw8vrw8vrw8vrw8vrw8vnx8vny8vnz8/nz8/nz6/rw6fnv5vft5fjt5fju4/Xt4/Xt4PPr4PLq3/Ps3PLt1+7p0ujk0Objyd/extzdxdvextrgx9viyN7dyN/dyN/dyN/dyeDeyuDgyuDiy+DlzN/mxd7lut7itdzgstrdtdvfsNffqtXfptTfoNHem87dmMvYlsnWk8bWksbYk8bak8fbkcXaksbak8fblsrfmc3ims7jm87km87knM/kndDkntHln9LmntHlntHmn9Hmn9LnoNPnotXoodnhpdzkpNzkpdzko9vjotnio9rjo9rkotnjoNfhn9bhn9bhn9bhntbgnNLgmc3elMjclMbfksPeibzYfbLScavRXp3GQoSxJWibFViLF1mOEFKIDE6DGFuQIGGXJWWdLmylMnCpN3WuNHKrOHWuP322Q4S0RYW1SYe4TYq7Toy8Sou7Soq6Soi5SYe3RoS1RYO0RIO0RoS1RoS1Q4S0Q4S0Q4S1Q4S0QYKzQIGtQ4GtQnyqRn2rS3+sUoawYZa/aqDFdarPebDPfbbOhL3SisTTkczYlc3YmNDbmdHcl8/amtLdmtPcm9PdmtPdmtPdnNXenNXendbfntfgntfgmtTdmdTdndTdoNHbpNHcAADw+vXw+fTw9vLz9/Ly9/L0+vX1+/b0+vX0+vX0+vX0+vX0+vX0+vX0+vX0+vX0+vX0+vXz+fT1+/b0/PH0/PH0/PH0/PH0/PHz+/Hy+vDz+/Hz+/Hz+/Hy+vDy+vDy+vDy+vDy+PPy9/Xy9/Xy9/Xy9/Xr+PLp9/Hl9u/i9+/i9+7h9+vg9une9ejf9ejd9erZ8erV7OfQ5+TO5OPH3t3E3NvE2t3E2t/E2uDG3uDJ4eHI4ODI4eHJ4eHH3+DH3+HI3+TI3eXA2+W02uOy1+Cx1d6z1+Ct1eCn0t+k0d6fzN6ay9yYyNWXxtSSxNSRxNaSxdmRxtuPxNmQxdqRxtuTyN6WyuGYy+KYy+KYy+KYzOGYzeKaz+OazuOYzeGazOSczuadz+ed0Oef0eei1OOj1uSj1uSj1uSh1eSe1OSg1uag1uag1uaf1uaf1eWf1eWe1OSd0+OazuWYzOaWyeWUxuWTxeWKvd18stNuqsteoMFJjrYvdagZXpIYXJQOUowDR3wPVIUhYpcmY50taKMvaaQ1b6o6c649d7JEf7lFgrRHhLVIhbdKiLlMirtMiLpMiLtKh7lJhrhHhLZFgrREgbNFgrRFgrRCg7RBg7RBg7RAgrNAgrNCgrNEg7NEgLJEf7BGfq5OhLBakbtimsJuqM10rtB5stCBu9KIwdCSzNWUzdeXz9qY0NuY0Nub096a0t2b1N+c1N+b096d1uCc1d6c1d6d1t+d1t+a1N2Z1N2d1N2h0dyl0t0AAO748vH79fL48/H18PH18PT69fX79vX79vX79vX79vT69fT69fT69fT69fT69fT69fT69fP59PX79vT88fT88fT88fT88fT88fP78fL68PP78fP78fP78fL68PL68PL68PL68PL48/L39fL39fL39fL39ev48un38eX27+L37+L37+H27OD1697z6d3z6dvy6dbt6dLp5c7j4s7j5Mbd3sPa3MPZ3sLY38DV3sDZ3sLb38Lc38Ha3sDZ3cHZ3sHZ38HY4sLX47nT46zP4azN4K3O4a/P4qjP3qPO3KDM3J3J3JjH25fF1ZXD1JHC1Y/C1pHD2ZDF2o7D2I/E2ZDF2pDF24/F3JHG3ZHH3pHH3ZHH3ZLI35TK4JLI35HH3ZDH4ZHJ5JLK5JPL5pXN55nP5ZnO5JjO45jO5JjO5JrO55zQ6JzQ6ZzQ6ZzQ6ZzQ6ZzQ6ZzQ6ZvP55TN6ZHM6pDK65DJ7I7H63+73m+t0WOkylaawUeMtzmCtSdvohpimQ1TjQRKgA1Qghlbjx9dlilknyxmoTJspzp0r0F6tkeBu0eEuEeEt0eDt0iEuEqGukqHuUqHuUmGuEeEtkaDtUWCtESBs0WCtEWCtEKDtEGDtEGDtECCs0CCs0KFtUSFtUSDs0aCskiCs0+HtFWPulqVvWijy3Crz3Wwz3y30IO+0I/L1pPM1pXN2JfP2pbO2ZnR3JrS3ZzU35zU35vT3p3W4JzV3pzV3p3W353W35rU3ZnU3Z3U3aLT3abT3gAA5e/p8fr08/n09Pjz8vfy8vjz9Pr19fv29fv29fv29Pr19Pr18/n08/n09Pr19Pr19Pr19Pr19Pr19Pzx9Pzx9Pzx9Pzx9Pzy9f3z8/vx8/vx8/vx8/vx8/vx8/vx8fnv8fnv8vj08/j28/j28vf18vf16vfy5vXu4/Tt4fbu4fbu4fXv4PTu3PDq2u7o1+3o0unm0OblzOHjy9/jxdrewtndwdfdwNXevtLeudPcudPcuNLbt9Hat9HattDats/ct8/et87fs87hq8zgqMjcpcbapcbaosfZnsjZnMjamsbclsXblcTWlcPWksHXkMLYkMLaj8TZj8TZj8TZkMXaj8bbjMXbjMXbjMXbisPZisLajMTdjsbfjsbfjsbeiMXih8bkiMblicflisjnjMjnjcnpjcnojsrpj8rrksvtlM7wk83uk83ulM7vls/xl9Dylc7wlM3visvuhcjthMbsf8DqfL3nbLPZXaPLVpzGTpS/Qom5OoW3MXyuIGqgDVaPBk2CCk6ADE2CE1GKI16aK2SfMGqlN3GsQHq1RH65RoK5SIS6SIS6SIS6SIW6Soe5Soe5SYa4SIW3RoO1RYK0RYK0RIGzRIGzQoO0QYO0QYO0QYO0QoW2Q4i4RIe2Q4S0R4a2S4e4UYy8VI+8VJC7YJzGa6jOca3PdrPPf7zPi8jWkMnUlczXmNDbl8/amtLdmtLdntbhm9PemtLdndXgnNXenNXendbfnNXem9XemtXen9XepNXfp9TfAADZ493o8uzz+fT0+PPy9/Ly+PP0+vXz+fTz+fT0+vX0+vX0+vXz+fTz+fT0+vX0+vX0+vX0+vX0+vX0/PH0/PH0/PH0/PH0/PL1/fPz+/Hz+/Hz+/Hy+vDw+O7w+O7x+e/y+u/x9/Lx9vPy9/Tz+PXz+PXq9/Hm9O7h8+ve8+ve8+zg8+/e8u3b8Ora7unY7unU6unP5OXJ3uLI3OLB1ty+1Nq90dq7ztq5zNqzzdmwy9etx9SrxdKsx9OrxdSrxdWqw9Wpwdaow9ejxtWgwtKfwdGgw9KbwdKXwNKVv9STv9aRwNeSwNWUwteRwNePwdmPwNqPxNmPxNmPxNmQxdqOxdqIwtiJwtiJwtiHwdaGvteGvtmHv9mHvtmEvNZ6u9t3udx3utt3udt2udp5uN57ud97ud98uuB7u+F2uuF3uuJ0t990t991uOB1uOB0t99ytt1vstlmrtVgqNFcpNBZn85VnctOnMVFkrxCjbpAiLg3gbIwfq4teawkb6YTXpcMVIkMT4EISX4SUIklYJstZ6IwaqU0bqk4cq09d7E/erJDf7ZFgLhHgrpJhbtIhrdIhrdIhbdHhLZFgrRFgrRFgrREgbNEgbNCg7RBg7RBg7RDhbZDhrdCibhFi7pIi7tJi7pMirtSjb9Sjb1OirhZl8Flo8psqs10ss59u9GJx9eOx9OTy9aXz9qXz9qa0t2a0t2e1uGb096a0t2d1eCc1d6c1d6d1t+c1d6b1d6a1d6e1N6j1N6m094AAMnU09vl4+vy7/L48/P48/X18fb38/b38/b38/b59PX79fX69fT59Pb69fX69vX69/X7+PX69/P59vD68PD78PL88vL88vL88/P89fL89fL89PH78/L88PL78PD49u72+ez1+e309+3y+O/z/fD1/O3y9uby8uPx8N/u7N/v7N/w7dzw7Nzu8Nvr8Nrr7tjs7NHn6Mzg5Mfa4cXY4MDS3LzP27fL2rTJ2rHI2q3F2qvE2aa/06G7zJ65yZ66yJ66yZ+6zKC6z6C+0Jq/zZi8y5e7zJO2yZG1y4+2zY+4z5G70pG+1ZK+05O/1pG/14++2Y6+2Y2/2IzA2IzB2YvC2ovE24fD2IbC2IXB1oO/1YK91IG81IC61X+51X221He11HKz03Cx022v0mqt0Wus0mys1Guq1Wuq12ir1mKr0mOr0mWq0WSoz2KnzmClzFmfx1OaxVCYwk2VwUuTwEqRwEmQv0ePvjyLuDiGszWCsDF+rS57qip4qCl2piRxoxxpmxNhkg1ZigVNfw5RhSNjmC9rpS9rpi5qpTJuqTl0rz11sEJ5tUN7t0Z9uUqBvEqCvEqCvEmBu0iAuUeAtkeBtUeBtUeBtEiCtkSCtUSCtUWDtkaEt0iFuEqIuE2Ku02KukyIuEyIuFGLu1CLukyItlaRv1+dyGmozXSy0n+504nD14zH1pHK2JfO3JjO2p3T3Z3X3J7X4ZzS4pvS4J7W4ZzU353V353V4J3V4JzU3pvT3Z3T3Z/T3qDT3gAAsb7AzNjY3Obk6fLu8vjz9PXx9fby9vfz9vfz9fjz9fn09Pjz9Pfy9vn09fn39fr49vv59vv59Pn37/nw8Pzx8Pvx8Pvx8Pry7/n07/rz8Pvw7vvt7fjs7/bz7fP83+b30dnpx87cxsrczM7m0tXp2d/t3Oju4O3x3Onr3uvq4PDt2u/s2u3y2er02Ovx1untzuLoyNvjxNbgwtTgvc7duMvbs8jar8XarMTZq8LaqcHZpr/UobvMnbjImbfFmbfGmbbImbXKl7fJkLXEjrLEjrHFjK7Fia3GibLJjLXMjrnQj73Tkr7Uk8DWkL/Yjb3Yjb3ZjL7ZibzXhbvVg7vVg77XgL/Ufr3Sfr3SfLvQe7nPebfPd7TPdLDOc67Oca/Obq7Oa63PaKvQZKnPZKjOZKjOZKbRZaXTYKbRWajNW6jNX6jOX6fNX6bMXKTJU5zETJfCSZbBR5TCRpLARZG/RJC+Qo+9Poy7PYu5OIa0NYSxM4GwMX+uMX+uL32sKnmnIHGgF2aXDViKEliKI2WXLWmjLmqlLmqlMGynNnGsOnGuQHazQXe0RHq3SH27SH66SH66SH66SH67SIC3SIG1SIG1SIG1SoO3SIO3SIS4SYS5SIS5Soa6TIa3Toe4TYe4TIa3TIa2Tom3UYy6Tom3Uo27WZfCZqTLdLHSfrbSiL/UisTVj8nZmM/dmc7antLcntncntfhnNLjm9LhntbhnNTfndXgm9PfnNPfm9LdndLdn9XgntTfntTfAACgsbS7yszR4N7f7Ort9/Py9/L0+PP0+PP0+PP0+PP0+PPz9/Lz9/L0+PP0+fb2+/n3/Pr3/Pr2+/nz+/Tz+/Ty+fPx+fLw+PLu+PPt+fDs+Ozs+err9e/m6/fU1+68v96tstCfo8CfoMKko8qnp8y4utnL0+Tb5fHe6fLi7vPh8PHZ7/DX6vPW5/bW6fPT5vDK3uvE1+bA0uO+0OK5y9+zx9uvxdurwtuowNqkv9eivdSivdGeusuat8eVtcSUssSTscWRrsWNrsOGrb6Dqb2Cp76EqMCAqL+DrcSJtcyOvNKPwNWSwNeTwdqRwdyPwd6Owd+NwN2IvtmEu9eBu9aAvdd8vdV6u9N3uNB1ts1zs8xxscxwr8xurcxuq8xrqsxnqctkqM1ip81gps1eo8xeostfpMxgo85bpc1SpspUpcpXpstapsxbp8tXo8lNnMNImMFDlr9Ak8A/kr8+kb48j7w8j7xAj71Ajrw9i7k8irg6iLc3hbQ5h7Y7ibg4hrUsfKsfbp8VYJITWIocXpAjYJooZKAsaKMtaqUxbKc1a6g9cq9AdrNBd7VEerZEerZFe7dGfLhHfblHf7dIgbRIgbVIgbVKg7dJhbhKhrpKhrpJhbpLh7tLhrdMhrdMhrdLhbZLhbVNiLZRjLpOibdPirhTkbxgn8Zwrc57tM+EvdGHwdGOyNiZ0N6a0Nud0tye2due1+Gc0uOc0+Ge1uGd1eCd1eCd1eCd1eCe1eCe1N+e1N+e1N+e1N8AAJits6m9wMHU1djp6Of18u/18PP59PP59PP59PT59PT48/T48/P38vX58/X69/f8+vj9+/j9+/j9+/j8+vb59/X49vT29fH28u758O338ez09O/2+O7z/trc97Ky2JycyZ+iz6Ki0KWi1qeh3KCc0qKg0bCx1srM69/l/OPr++Pu+9Pm9c7f9c7d+NDg98zf88PY7L3R57rN5rjK5bPH4KzB26i+2qa926O826C+1p6905690Z6+zpu7zJa3yZW2yZSzyo6sxoWovnynunukunqiu36lv3+owYGtxIi3zYq70Yu9046+14+/2Y/A3Yy/34rA34m+3YW82n+413u31Hi203S20XK0z3GyzW6wy2yuyWytymysy2ury2uqzWaoy2Omyl+ly16kzF2kzlyhzlyhzVyjzF6ly1ynzFanzFinzFynzV6nzV6nzFmjyFCbwkqYwUaVwEGVwUCVwj+UwT6SwD+SwEKRv0KQvkKQvkKQvj+NvDuJuDyKuT6MuzqIty19rSFwoRZhkxFWiBRViBpXkCJemSdjnipmoSxnojBnpDlvrD50sT91s0J4tER6tkV7t0Z8uEZ8uEZ+tUeAs0iBtUeAtEmCtkmEuEiFuUiEuEiEuEiEuEmDtEmDtEmDtEqDtUqEtUyHtVOOvFGMuk6It0+NuFybwWuoyXixzIG6zoS+z47I15nQ35zR3Z3S3J3X2p3V4J3T5J3U4p3V4J7W4Z7W4Z3V4J3V4J3V4J7U357U35/V4J/V4AAAiqGnm7G2qb7BxNnZ3Ovq6fDr7vbx8vn08vn08/r09vr19vr19fn09vr19fr39/z79/z69fr49vr49fj29fj29fj29Pb18ffx7/vu8fr48PT/5eX90tLwtrjcmpjIj4/FmZvQpaPcqaPjqqLnqqTlpqLeoZ3SrKraxMXs1tn32uL6zd74zNr9ytf+ytj9yNr3wNXtuc3ntsnms8XkrcHepLrWnrXTnbbXnbjZnr3VnbzSnLzQnL3NnL3OmLrNmbrPlrfOjq7IgqW+eKG3eaK5fKS+gqnGgavEgK/FhLXLgrTKgbXKgLLMgbLPgLPSfrLTfbLUfLHSeK/PcqzMbqvKaanHZanEZqnEZqnEZqjEZ6nFZ6nHZ6fIZqbJZqbLYKPJXaLHWqDHWKDJV5/LWaDNXaTPW6TLXKbKXKbKWqTKW6TKXaLJXqLJX6PJXqLJV5zFUZnDUJjFSpjFSZjFSZjGSZnGSZnGSJfFSJbESZfFSZfFRpTCQI69QpC/QpC/PIq4MIGwJHSkF2KTDlOFD1GEEk+IHFeTI1+aJmKdKGSfLmWhNmypO3GuPnSxQni1RHq2RXu3Rny4Rny4Rn61R4CzSIG1R4C0SYK2R4K2RoK2RoK2RIC1Qn6yQ32uQ32uRH6vRX+xRYCwSYSyU468U468T4q4Toy4WJe+ZqPEdK3IfbbKgLrLjcfWm9LgnNLenNHbm9bYnNTem9LinNPgm9PentbhntbhnNTem9TendPentTfntTfn9Tfn9TfAACBmJ2SqK2YrLGpvsPJ2t3l7urv+PTv+fDx+u/z+/P0+vX0+vXz+fT1+vX2/fn3/fr3/Pr5+/n5+ff29/b1+Pbz+PTv9/Hw+vLz/ffq8/fQ1eu0s92Vl8aJkb+Pk8ySldGYm9Wen9yjnuSmn+aro+awqeSlqdajpteusePBx++9x+euut6ntdqisNmdrtiWp8+VqM2ZrNCittirwOCrvuCitdiZsNCatNGbuNOYu8+Wuc2VuMuUuMqWusyZvM+ZvNCTtcyKrMWDpb9+pL18pLyAqcKEr8h+rsh8rsp/scx6rMd4qsV1qcR0qsdyqchwqcpvqMtvqsprqMhmpcVlpsVkpsVkpcNlpcRjpMJlpcNkpsRjpsVjpcVhpMRhpMRboMRYn8RWnMFYnsNaocZboshdpMpco8hdpMlco8pYoctZn8pcn8pcnspbn8hZoMdWm8RTl8RTl8ZMmsJLnMFNncNOnsRPn8ZNnMdNnMdOnchNnMhLmsVIl8FJmMNHlcRAjb02hrYqeaoWYZMJToAHSXsNSoMVUYwcWJMiXpkmYp4tY6A0aqc4bqs9cq9Bd7RCeLVEerdGfLlGfLlHfblHfblHfblJf7pKgLtJgLpJgLlIgLhHfrdDe7M9ea09ea09ea0/e69CfrFFg7FLibdPjbtPjbtQjr1alsNloMhyqcl7scx/uc2Ox9ib0eGe0+Cc0NyZ0dqb1N2a0tyc1d+c1d6e1+Cd1t+e1+Cd1t+d1d+f1eCf1eCe1N+e1N8AAGyPkneVmYOan6GxuMPR1N/r6O/69vD58fH67/T78/T69fT69fT69fb89/f9+vf9+vf7+fj59/f39fX39vT49vD39O/49O739efu9sjN4aSky4yIv3l6tYKIw5CS15GS2JWZ25eZ2Z6b4KSe5ami5bSu6K+23a2036uv4aqu3peeyXN9pVRfijlGcys7aSQ1Yyo7ZzhLdElcg2Z6nn6QtoebwI2kx5Cry5OwzZCyyZK1y5S2zJK1y5W3zZu+052/15e40o+vy4qsyIeuyIWtx4SwyIazy3+wy3utynqsyHSmwnCivmyg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cB9XaiFZbFWNoGykt1iRo0R4jDlnfDxkey9dbSxeaTZkcTtndEx2g1WFi2aWmW6Wm3WVnIGco4mlqp+5v6W9w6vAx7PHzbHGyLHGyLDFx7zR08jd39Dj5t/w8+b1+Of0+Onw9+zy+urw+OLn8Nrg6MPN1rvE07W71KepzZycxY+OuH9/qG9vmGFgilRWfktRd0dNc0ZMckZKcTNEZydAYSdAZCdCaSlDbDFNci5KbitGajlUeUJegkNig0RjhkpojVp3n2aErGGAqVp4pE1rmD1ZiS9OfCtMeClJdihIdSlJdiZJdytQfjFXhS1WgzFeijVvlkF7okV+pU+Ir1eQt1ePtlSOt1GNt1KQvFSPu1OPuVGPuFCQuVOVvVKUwFSWw1aYxVWXxFSWw1KVxVGVxU+WxU2WxUuXxUmXxUaTwUORv0ORv0GUvz6VwD2SwDqOvjeKvTOHti6DsSp/rip+rSyAry+CrzaItzyOwEWVykSVyD+Uw0idzEmezUmezEiczkqe00qe0kOXyjyQxDKGui2Atidyrx9jpQ9PkwVEgRFQjC1sqEOCvk+OyVua016d11mY0lqZ016c12Gc2FqW0lqW0lmV0VePy1mPy1qQzFuRzVuRzVqQyliPyFuSy1eOx0F6sS5snEuJuV2by2Si0mmm1W2o1nCr2W6q2G2p12mm0Gaiy2WeyGeeyWufymqfxXaqzoO22JDB4ZzL6aHT6KLX46rb5bXX5rTV5a3W37LY3rbd3r3i3wAAJFxvIVlsLWV4YZmsZp6xUoqdPnKGMmB1OGF3LllqMF1pOmd0QG16TXyJWo6TZ5uebJebdJecfZuif52ikK6zmLO4oLe+rMPIrMHDrcPEqb7At8zOwNXXzN/i2+zv4e/y5vP36fP37fb77/j96/T55/H10Nzdw83UvMLTqq3IpKXGl5i8hYerbW+SWFh9R0xvQktuRk9ySFF0RExvLUJgHjpWFzRSFjRVID9hNFFxOFV0QF19VnKRYX+eXYKfX4OjZYiqa42xbZC1ao+0aYy0YYSvT3GeQGWRQGeTRGuXSG6aS3KdSXOgRHKeQ3KeQnOfRnumR4SvUI25UI65UI25To63TI61S463SY24SZC9UZS/VZW+UpW9UJa+U5rCVJnFVprHVprHVpnGVprHUpvJUpzLT5zKTJvJSprHR5jFRZbEQ5TBQ5TBQZXAQJbBQJXCPJDAOYy/NYi7MoW3LYCyLH+xLH+xL4KwNYe2Ooy+QpPHRJXKQ5fJSp7QS57RSp3QSJzPSJzRR5vQQJTIOY3AL4O6KXq0JXCtHmOiD1CQBUSBDk2JLWyoRIO/TY3IWZjSX57YWpnTWpnTXZrVYJzYXZnVXZnWWpbSWI/LWY/LW5HNW5HNWY/LWI/IU4rDUonCUYfBPneuKGaWSIa2YJ7OaKbWcKzbe7Phfbbkfrble7Picq3YbqjRbKLNbKDLbZ/Ka6DFdqrPgrXXj8DgnMvpo9XqpNrmqNnjtNbltNTlrtfgsdjeuN7fvuThAAAkXG8gWGtCeo1mnrFXj6JGfpE2an0yYHU0XXQuVmgzXWk+andDc39Ogo5clJlpnqFrmJxzmJ57m6F4mJ2GpKmRrrOatLupwMWrv8GswcOovb+0ycu70NLF2dzW6Ord6+7l8fXm8vXm8vXn8/bo9Pfp9vjk8Ozc5ubN1N+7vtKur8ucn7+Ii6ttcJBVV3ZCSWk/S2xGUnNHU3RBTW41SGQ1TGU5UWw+WHZMZoVUcY5Zd5Nhf5twjqp2lbBqka1pkK1rkbFuk7RmjrBjjrBokbZkjLRYfqhJdJ5GdJ9IdqBKeKJNe6VNfqlNgKtHfahGfqhKhbBPiblWkMFWkMBSjL1Oi7hLjLVKjblJjbtLkcFSlsFTmMBQmL9PmcBRnsRXnslan8tZnspZnspZn8xVoc9VpNFRotBNoc1Kn8tIm8hGmcZFmMVDlsNAlcA9k748kb45jbw4i740iLsxhLgsgLMsf7Isf7Euga4zhbQ4irtAkMRFlspIms5LntJMn9NJnNBHms5EmMw/k8c6jsI1ib0ugbsneLQkb6obYJwKTYkBQHwLSoYtbKhFhMBMi8ZYl9Ffn9lcmtVZmNJbmNRgnNhemtZfm9dcmdVakc1akMxdk89cks5akMtXjsdTisNRiMFNhL0+d64pZpY/fa1gns5qqNh2r999suGAteWAtuV8suF3r9p0q9Zyp9Jwos5xoc1roMVzqcx/stSMvd2ayeaj1uql2+eo2eO01uW11eav2OGy2d643t++5OEAAB5WaSFZbFSMn2Ocr0V9kDpwgzNnejJhdS9acS1WaTVca0BreEVzf1CAjF+TmWmcoWyYnnKYn3iZoXSWm3+fpI6ssZi1uqO+w6a/wavBxKe7vrHGybjN0MHV2dHk6Nnq7d/v8+Ly9OTz9uPy9OTy9Or3+fH69e729OHo7tbZ67u+15qfu4SGo2hpiFFUczxEYzpHZUNQbkhVc1Bde1hqg2d9lHOJoniQqnyXsXuasnubsX2ds4Ggt32etXKZsm6UsG+UtHWYum6Ut2iTtGSRs1yJrlWDqkt/p0iAqUh+qEZ8p0l/qkuErk+Js06KtFGPuFSSvFCOvlSRwVKPwFGOv1CPvk2QvE2Rv02RwFGWxlGYxU+Zw0+ZxE6bxVGeyFagzVehzlehzlehzVeizlGiz1Gk0U+iz0uhzUmey0icyUicyUebyESYxUCUwTyQvTiLuzWIujaIvTSGvDCCuC1+tC5/tS1/tC6AsjKEtzeIvT6PxEKTyUSXzEeaz0eaz0KVyz6SxT2RxDmNwTOGuy+CuC1+uiZ2tCNuqxddmwZIhgA8eQlHhC9tqUWEv0uLxFiX0F+e11qa0lua01ya1V+b11yX1F6Y1F6X01qRzVuRzV6U0F6U0FuRzVWNxFSMw1SMwk+GvkN9si1smzJyoFiYxmmp2Hax33mu236z4H+y4Hqt23es2Has1nap1HKl0XKkz2uhyHKmy32u0Yq625XI5aHW66Xa6ajX5LPX5bPW5bHZ47Pa37fe377k4QAAGFBjOHCDZJyvVo6hPXSHPnCFN2l+L15zLltxMVtvOmN0RW99SXOAVYCIYpGaapujbZmhcZagdJehdZidfp+jjqyxmba7n7vAnr7BqcDFp7q/rsPJtMvQvtLXyd3i0OTp1+vw2/Dz4fT34/T35PP25/L28Pfz8Pny6vXz5e7409nvr7PNko6rcm2MWll6SE9sSVZtWmZ+aHSLe4aegperiqW2jqq7jKu7iaq6i6y+jK2/i6y+iaq8hKa5e6G5dpu1dJi3d5m9cZe6Z5S0X4+wUYapTIWpSIarSIauSoexTYm2UIy6UZK7U5W+VJa/UpS9UZO9TpK+TpG+TpK+TpK+TJC+SI+/SpDASpHAUJbFT5nITZvJTpzKUJ3MVKDPU6HPUqHPUqHPUqHPUaHPTqTRUKXSTaPQS6DNSJ3KRpvIRpvIRZvIQpjFPpLBOIy8NIa5M4W7M4S7MoO8L3+5LX23L4C5L3+4MIK5M4W8N4nAPI7FQJLJQJPKQpXMPI/GOIvDOIy/OIy9NIe8L4G4LH22KXm3I3KxH2moFFmaBEWHADt7B0SCMG6qQ4O7SYnAVZXMXJzTW5vRW5vSWZnSWpbTWZLPXZTRXZPQV43JV43JW5HNXZTQXZPOV5DEV5DEVpDDU4vASYW2NHajK22ZSou4ZqjVdLLddazXfLHcgbPefq/bea3YeK3Yd63YdarVcqfSa6TMc6TMfanPhbXXj8bkndXrptjsqdXmsdjksdjkstrks9rft97fv+ThAAAcVGdRiZximq1Lg5Y8coY4a38yZHguXXIyX3QzX3I9aXhHdIFIdYFTgophkppqmqJumqJ0maJ3maN4m6CAoaaNrLGYtbqcub6evcCov8Smub6rwMWuxcq2yc6/09jF2d7U6O3c8fTh9Pfj9Pfm9fjo9Pjs9/Dt+u7r+fHm8vXf6vbS1+u4tcyLh6FpaINnb4Z3gpeLlqqUn7Sdp7uTqriOrLaPsLqOsruMsLqKrryPs8KPs8KKrr2Eqbl9p7x7pLt3nrt8ocN1oMFjmLdWjq5Jh6lJiq1Li7BNi7NPjLZSjrtYlMJUl8FSlb9Qk75PkrxOkbxMj7xLj7xLj7xMj7xJj7xEjr1GkL5HkcBNl8VPnMpQnsxRn81UotBap9VXqNVWp9RXqNVWqNVVp9RTqNVUqdZSp9RPpNFNos9LoM1JnstHnMlEmcY+k8I4jb00iLsyhbsvgrkugLktf7gtf7cvgrovgroxg7o0hr03icA8jsVBk8pBlMs/kcg4i8Izhr0xhLkwg7csfrUpebMoeLMicrEdbKsWYKAQVZYDQ4QAOnsFQoAsaqY9fbZCgrlSkslbm9JZmdBamtBXls9Wks9UjstXjstXjcpRh8NRh8NVi8dakMxeldBclMlblMhZksZWj8NPirw7fKkqa5g7fKlfoM1wrdl0qtV6r9qEt+KEteF8r9p7r9p7r9p6rtl3rNZtps1yo8t6p8yAsNKMwuCb0+mm2Oyp1eax1+Sx2OSy2uSz2t+43+DA5eIAADFpfFqSpVSMn0iBlDpxhC9idipdcStabzRgdjVidT9tfUl4hUh3glODi2OUnGubo2+ao3WapHmcpnyfpIanrI6tspm1upy5vp69wKm/xKe6v6a8wa3DyLLGy7fL0LzQ1c7i59zx9OH09+P09+j2+uz4++v38+r58ef47uDx8Nrq8NPg6s7V4rS5yZihspWktJmtu5iruZequZqsu5Gttoqss4uvto61u4uz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0+jr2/Dw2e/sz+bj0ejk0ejk0unl0+rm0unl0ebj1ejl2+ro2unm0eng1Ovi2e7l3O3l3e3n3uzo3uzo3+7q3+7q3e3p3Ozo3Ozo3Ozo3e3p3e7q3e3p3u7q3+/r3u7r2uzm3PHp4Pfw2PHp1O7l1Ovj1evj1Obf3u7n3+/o2urj2+vk3e3m2+vk2Ojh1ubf2urj2+vk1ubf0+Pc3Ozl2+vk1ubf1+jh2/Do2+/o2u7n2u7n2vDp2vDr2vDr2vDr2vDs2PLq1/Ho1ezk0ujg1+ri1+vk2Ozl2u7n2u7n2+7o4O/r4O/r3+7q4O/r4vHt3+7q3Onl3ubj4eflAAA2ncA3nsE4n8I3nsE4oMI3osM3osM2ocI2ocI1ocI1ocE1ocI2oMI1nsE0n8Q0n8Y0n8Yzn8Uzn8Uzn8EzncUznMgznMcynMYynck1n8o4oMw6oMw2ncowm8grmcQokr4rjbsvi7YmbpktXYsrW4chYIgQWX0UXHxLjaeJwdaj1eao1uWv1eOw1OGp1+Cn2+Op3OSs3OWt3OWu3OWt2+au3Oew2+av2+at2uWv3ums2uWv2uWz2ea12uW53+O53+O43uK74OS64eO54uC75OK64+K75eO+5eXA5ejD5OfH5OjJ5urI5ejK5urP5+vS5uvS5uvM5OjN5enK4ubJ4OXR5+zT5uzS5uvO4ujR5evR5evR5erP4ujQ4+nS5uzU6O7V6O/U5+7T5u3T5u3R5OvR5OvR5OvR5OvS5ezU6O3U6OzS5+fU6unS6OXS6eXS6eXS6eXS6eXQ5+PS5+PZ6ubc6+jX5+TQ6eDV7uTY7+ba7+bb7ufd7end7ene7ure7urc7unb7unb7unb7enc7urb7enc7ene7ure7+ve7+va8OfZ8OfY7+fV7+fV7+fX7ufY7ufc7eff7+ne7efc7Obc7Obe7ufd7Obc6+bd7Ofb6uXc7Obb6+Xe7ufd7ebd7ebZ6eLf7+nd7ufd7eff7+nf7+jc7+nZ8Ora8Ova8eva8evX7+jW7uXW7OXZ7eXZ7eXY7eTY7eTZ7ubZ7+fb7+jg8Org7+rf7urf7uvf7+zc7enb6OXd5uPh5+UAADahwjahwjWgwTWgwTWhwjahwjahwjahwjagwjWiwDWkvzaiwjigwzufxjmgxzihyDihyDihyDihyDSdxDWdxDWexTWexTWexTSexzSexzSfxzWfyDafyTeeyjWdyTScyDScyDibxD+ZwkWXwkeWwUmbxTKMrBlmg1CQqIrF1pzV46zY47HY47DW4qvY46vc5qzc56zd563e6Kvc5qba5K7d6LXc6LLZ5a/a5q3a5a7b5rLb57Ta57bc5rrg5Lrg5Lje4rvg5bfg47bi47jk5bfj5Ljl5rrk5bzk5sDk58bj58rk6crl6crl6c3k6dDk6dDk6c/j6NDk6c7i59Dj6NPm7NLl7NLl7NPm7dPm7dLl7NLl7NLl7NLl7NLl7NTn7tTn7tTn7tTn7tTn7tHk69Hk69Ll7NLl7NPm7dTo7tTo7NLo6dTq6dTr59Pq5tPq5tHo5NHo5M7n4tbp5N/q597p5tbn49Lp4dfu5tjv59ry6dvv6dzr59zr59zr59zr59zr593s6N/u6uDv6+Dv6+Dv6+Dv6+Dv69/u6t/v6trx5dnx5djw59ju6dju6dfu6dnu6dzt6d7t6d7s6N3s6N3s6N7t6d7t6d/u6d/u6d/u6eDv6uDv6t/v6N/v6N7u597u59/w6d3y6t3y6t3y6t3y6tzx6dzx6dvw6Nrv5trv5tvs5dvr5Nzs5d7u597u597w493u4dzu5N/w6OLy6uDx6ODw6d7t6d7s6t3t69vr6Nro5tnm493n5gAAOaTFOaTFOKPEOKPEOaTFOaTFOaTFN6LDN6HDN6TCOKfCOaXFO6PGPaLIOaHIOKHIOKHIOKHIOKHINp/GNp/GNZ7FNZ7FNZ7GNJ7HNJ7HM53GM53GM53HMp3HMZzGMZzFMZzFNJrCPJrCRpvFSZrFSZ3GN5GxIW6MWpmxkMvdmtPip9njsNnlrtbirNjjqtvlqdrkq9zmq9zmqtvlptrkrt3otdzostnlr9rmrdrlrtvmstvntNrnttzmuuDkuuDkuN7iu+Dlt+DjtuLjuOTlt+PkuOXmuuTlvOTmwOTnxuPnyuTpyuXpyuXpzeTpz+Po0OPoz+Po0OTpzeHm0eXq0uXr0uXs0uXs0uXs0+bt0uXs0uXs0uXs0uXs0uXs1Ofu1Ofu1Ofu1Ofu1Ofu0eTr0eTr0uXs0uXs0+bs1Ont1Onr0ujo1Ovo0+rm0ejk0unl0ejk0ejk0Onj2Ovm3urn3ejl2Onk1Ovj2fDo2O/n2vHp2/Dp3u3p3u3p3u3p3u3p3u3p3+7q4O/r4O/r4O/r4O/r4O/r4O/r3+7q3+/q2O/j1+/j2O/n2O7p2O7p1+7p2e7p3O3p3u3p3uzo3ezo3ezo3u3p3u3p3e/l3e/k3e/k3e/j3e/j3u7n3u7n3e3m3u7n3u/o2u/n2u/n2u/n2u/n3PHp3PHp2e7m2O3l2O3l3O3m3e3m3e3m3Ozl3Ozl3vDj3e7i2+zi3/Do4/Ps4PHo4PDp3u3p3uzq3e3r2+vo2ujm2ebj3efmAAA4o8Q5pMU5pMU5pMU5pMU5pMU5pMU5pMU5pMU4pcM3psI5pcU7o8Y9osg5ocg4ocg3oMc2n8Y2n8Y3oMc3oMc1nsU0ncQ0ncUzncYzncYynMUynMUxncUvnsQvnsQvnsQvnsQ0oMY9n8ZCnMRAl8FAmcIyjKwkcI5hoLmUzuCb1uSi2uOr2uSs1uKs2OOs2+aq2+Ws3ees3ees3een2uSu3ei13Oiy2eWu2uWu2+aw3eiy2+e12+e12+a53+O74eW53+O63+S64uW45OW45OW34+S45ea65OW75ObB5efH5ejL5enJ5OjJ5OjN5enR5erR5erO4ufP4+jO4ufQ5OnS5uvS5ezS5ezQ4+rQ4+rQ4+rR5OvS5ezS5ezS5ezU5+7U5+7U5+7U5+7U5+7S5ezS5ezS5ezS5ezS5uvV6uvT6OjS6eXT6uXS6eTR6OTR6OTS6eXS6eXS6+bY6+be6ebc6OXX6OTW7OXZ8OjZ8Oja8unb8Ong7+vg7+vg7+vg7+vg7+vg7+vg7+vg7+vg7+vg7+vg7+vg7+vf7urf7+rZ8OTY8OTX7+bX7ejX7ejY7unZ7unc7end7ene7ene7ene7ene7ene7enc7uPc7uLc7uLc7uLc7uLd7ebd7ebe7ufe7ufc7ubY7eXa7+fb8Ojb8Oja7+fZ7ubZ7ubY7eXY7eXc7ebf7ufe7ufb6+Td7eXe8OPd7+Lb7OLf7+fj8+zg8ejg8One7ene7Ord7eva6+jZ5+Xc6Obg6ukAADijxDmkxTmkxTmkxTmkxTmkxTmkxTmkxTmkxTelwjWkwDejwzmhxDugxjmgxzihyDihyDihyDihyDegxzegxzWexTSdxDSdxDKcxTKcxTOdxjOdxjGexS6fwy6fwy6fwzChxTOiyDmgyECexkGcxUGgyCV/nyJujGinv5XP4ZvX5Z3a46fa5KzW4qzX46zb5qrb5azd56rb5azd56fa5K7d6Lbc6LLZ5a7a5a7b5rDd6LLb57Xb57Xb5rnf47vh5bnf47rf5Lri5bjk5bjk5bfj5Ljl5rrk5bvk5sHl58fl6Mvl6sjk58nl6M3l6dDk6dHl6c7i58/j6M7i59Dk6dLl69Dj6tDj6tHk69Hk69Hk69Hk69Dj69Ll7NLl7NTn7tTn7tTn7tTn7tTn7tLl7NLl7NLl7NLl7NLm69Xr6tPp5tLp5NLq4tHp49Ho5NHo5NHo5NPq5tPs5tjr597p5t3o5tnq5tfu5trx6dnw6Nry6dvw6eDv6+Dv6+Dv6+Dv6+Dv6+Dv6+Dv6+Dv6+Dv6+Dv6+Dv6+Dv69/u6t/v6tnw5Njw5Nfv5tft6Nft6Nju6dnu6dzt6d3t6d7t6d7t6d7t6d7t6d7t6dzs5tzs5dzr5dvr5dvr5dvr5Nzs5Nvr5Nvr5Nrr5Nfs49jt5drv59rv59nu5tft5Njt5Njt5djt5dvs5N7t5t7u593s5d/v5+Dy5N/w49zt49/v5+T07OHy6eHx6t/t6d7s6t3s6tnp5tjm5Nzo5uHr6QAAOaTFOaTFOKPEOKPEOKPEN6LDN6LDN6LDN6LDNqLCNaLBNqLDOKLEOaHFOKHHOKHIOKHIOaLJOaLJOaLKOaLKOKLKOKHJN6HJNJ/IM57HM57HM5/IL57FK5/DLKDELKDEMKPIMKTHMqDEOZ3CQJ3ERqLIGHKTIG+NbLHIldLhndnjntnhpNrkqNfiqdjiqtnkq9jjrNrlqtjjrdrlqtrlrdvnsdrmr9jkr9jksdrlstvntNzmtt3ltt3kuN7iuuDkud/ju+Hlu+PmuePmuePluePlu+bouuPmu+PlwuboxuToyuTpy+XqzOfs0ejt1Oft0+bs0OPpz+LpzuHnz+Lo0eTr0eTr0+bt0+bt0+bt0ubs0uXr0eXr0+ft0+ft0+bs0uXs0uXs0uXs0uXs0ubs0eTq0uXr0eXr0ebp0+vn0unl0ejj0eni0unk0unl0ejk0Ofj1Ovn0+zk1evi2uvi3Ovk3O3l2O/n2vHp2fDo2fHp3PHq3e/r3u/r4O/r4e/r4O/r4O/r3+/r4O/r4O/r4PDq3/Dq3u/p3O/p2+/p2vDo2fDo2O/o1+3o2O3o2e3p2e3p2evo2uzp2+3p2u3p2u3p2u3p2u3p2u3p2+zp3Ozp3uzp3uzp3Ovm2+vl2unk2unk2erk1erk1+vm2e3o2e3o2Ozm1+vl1+vl2Ozn2e3o2Ozl2Ovk2e3l2+/n3fHp3vPo2+/l2e3k2+/n3/Lr4fHr4vHs4fDs4O7r3Ozq2ejn2Ofl2+bl4OrqAAA5pMU5pMU4o8Q4o8Q4o8Q3osM3osM3osM3osM3osM3osQ3osQ5pMY4pMY4osc4ocg4ocg5osk5osk4oss4oss4oss4oss3oss0oMkynscynscznsgunsUpoMQsocYtoscto8gtpMYvo8M2n8FAnsJHn8QRaIold5RyvNCV1uGg2eKh2OGk2uSl2OKo2eOq2OOs1uKu2OSt2OOv2eWs2uas2eas2OWt1+Sv1uSz2eW02ua13OS13eK23uO43uK64OS53+O84ua74+a64+a54uW64+a95um64+a74+XC5ujG4+fK5OjL5evM5uzR6O7U5+7S5ezR5OvP4unO4ejP4unR5OvT5u3V6O/U5+7U5+7U5+3T5+zU6O3U6O3U6O3S5uzS5ezS5ezS5ezS5ezS5uvQ5OnP5OjR5erS5+nS6eXS6eXR6OTR6OTS6eXS6eXS6eXQ5+PT6ufT7OHT693X7ODa7eLc7uPY7+bZ8OjY7+fZ8ejc8uvb7+rc7+rg7+vh7+vg7urg7+vf7urg7+vg7+vg8Onf8Onc7+jZ8OjX7+ja8Ova8OvY7unX7ejX7OjY6+jY6+jX6ufY6+jY7enX7ejW7ejW7ejW7ejX7unZ7unb7und7enf7ene7end7Oja6eXb6eXa6ubV6ebX6ufZ7OnZ7OnZ6+nY6ujY6ujY6+ja7erX7ebU6+PW7ubZ8Ojb8ura8urY8OjX7+fY7+fZ7+jf7urh8Ozg7+vf7urc6+jY6OfY5uXa5uXh6+sAADmkxTmkxTijxDijxDmkxTmkxTmkxTmkxTmkxTmkxTmkxjmkxjqlxzqlxzmiyDihyDihyDmiyTmiyTeiyTeiyTiiyTijyjeiyTShxzKfxjKfxTOfxi6fxSuhxi2ixy+kyS2ixyuhwzGkxTefwj6dwT6XvApggi9/nH3D2JnX46HZ4qHY4aTa5KbZ46rb5ara5KvZ5Kza5azZ5K3b5qzb5qzZ5q3Y5a3X5K/W5LPZ5bTb5rPa47Pb4Lfe47je4rrg5Lnf47vh5bvj5rrj5rni5brj5r3m6brj5rvj5cLm6Mbj58rk6Mvl68zm7NHo7tTn7tLl7NHk68/i6dDj6tHk69Ll7NPm7dXn7tTn7tTn7tXo7tXp7tXp7tTo7dTo7dPm7dPm7dPm7dPm7dPm7dLm69Dk6dHl6tHl6tHm6NLp5dLp5dHo5NHo5NLp5dLp5dLp5dDn49Pq59Ps4dPr3tfs4Nrt4tzu49jv5tnw6Njv59nx6Nzy69vv6tzv6uDv6+Hv6+Du6uDv69/u6uDv6+Dv6+Dw6d/w6dzv6Nnw6Njv6Nrw69rw69ju6dft6Nfs6Nfq59fq59fq59jr6Njt6dft6Nft6Nft6Nft6Nbu6dfu6dnu6dvu6d3t6d/u6t7t6drp5drp5drq5tXp5tfq59ns6dns6dns6dns6dns6djr6Nrt6tju59bt5dfu5tnw6Nvy6trx6dvy6trx6djv59ju5t7u6N/v6N7u59zs5tnq5Nfo4tjn4tzp5OLt6QAAOaTFOaTFOKPEOaTFOqXGOaTFO6bHO6bHO6bHOqXHOqXHO6fJO6bIOaTGOaLIOaLJOaLJOaLJOaLJOKTHOKTHN6PGOKTHNKHEM6HEM6HEMqHDM6HDL6DEK6DFLqPJLqPILaLHK6HDMKPEN6DCQqDENo2zB1p8OYakhcnenNfjotjhotnipNrjp9rkq9vlqtvlqdnjqdnjqdnjrNvmrNznq9jmr9rnrtjlsNfltNrmt93otNvjtNzht9/kuN7iuuDkuuDkuuDkuuHlueLlueLlueLlvebpu+Tmu+TmwOTmx+TozObqyuTqy+Xrz+bs0uXs0uXs0eTr0OPq0OPq0uXs0+bt0uXs0uXs1Ofu1Ofu1Ojt1Ojt1Ojt1Ojt1Ojt0+bt0+bt0+bt0+bt0+bt0ubr0OTp0eXq0eXq0ebo0+rl0+rm0ejk0ejk0unl0unl0ejk0ejk1Ovn0+zh1e3g2O7h2u3h3O7j2O/m2PDo2vHp2vHp2/Hq2+/q3O/q4O/r4e/r4O/r4O/r4O/r4O/r4O/r4PDp3/Dp3fDp2vHp2fHp2vDr2vDr2O7p1+3o1+zo1+rn1+rn2ezp2ezp1+vn1+3o2O7p2O3o2e/q1e/p1e/p1+7p2u/q2+7q3u3p3u3p3ezo2+rm2enm2Ovo2Ovo2ezp2ezp2ezp2ezp2ezp2Ovo2ezp2O7n1+7m1+7m1+7m2fDo2/Lq2/Lq2fDo2O/n2e/m3u7k3O3j2+zi2uvh2Ovg2ezh3O7i3u3i4e/kAAA2ocI2ocI3osM5pMU6pcY5pMU7psc7psc7psc7psc8p8k9qMo7psg5pMY5osg5osk5osk5osk5osk4pMY4pMY3o8U4pMY0ocMzocMzocM0osQ0osQxosUroMYtocctoscuo8gtpMUtoME2n8JGpMgshKoJWn5GkbCMzuOe1+Sk2eOj2uOl2+Wo2+Ws3eer3eep3Oap3Oan2uSo2+Wp2uWq1+St2eau2OWw1+W02ua33ei02+O03OG33+S43uK64OS53+O53+O64eS54uW54uW54uW95um75Oa75ObA5ObH5OjM5urK5OrL5evP5uzS5ezS5ezR5OvS5ezS5ezT5u3T5u3S5ezS5ezU5+7U5+7U6O3U6O3U6O3U6O3U6O3S5uzS5ezS5ezS5ezS5ezS5uvQ5OnR5erR5erR5ujT6uXT6ubR6OTR6OTS6eXS6eXR6OTR6OTU6+fT7OHV7eDY7uHa7eHc7uPY7+bY8Oja8ena8enb8erb7+rc7+rg7+vh7+vg7+vg7+vg7+vg7+vg7+vg8Onf8Ond8Ona8enZ8ena8Ova8OvY7unX7ejX7OjX6ufX6ufX6ufX6ufW6+fX7ejY7unY7ejZ7+rT8OnS8OnV7+nX7unY7une7ene7ene7end6+fa6ufY6+jY6+jZ7OnZ7OnZ7OnZ7OnZ7OnZ7Ona7era7+nX7ubV7OTW7eXX7ubY7+fY7+fX7ubW7eXX7eTc7eLa6+DZ6t/a6+Da7eDb7+Dd8OHe7uDh8OIAADijxDijxDmkxTmkxTmkxTqlxjqlxjqlxjqlxjumyDynyTumyDqlxzqlxzulyDqkyDmkxzijxjijxjikxjikxjikxjejxTShwzKgwjKgwjSixDWjxTOixS+hxTChxTGixjGixy6iwy2gvzykxUmnyiN6ngZWd1GctI/Q4aDW46ja56Pd5qXc56ja5a/c6K3c56rc5qnc5qfc5aXb5ara5azX467Z5a/Z5bDZ5bPZ5bXb57Tb47Tc4bff47nf47zi5rnf47rf5Lni5bjk5bvm57nk5rvn6Lrj5bzk5sDk58bj58vl6c/l7NDl7NHl7NLl7NLl7NPn7dTo7dTo7dTo7dPn7dHk69Hk69Pm7dPm7dLl7NPm7NPn7dTn7tTn7tLl7NHk69Hk69Hk69Hk69Ln6tDl6NHm6dHm6dHn59Pq5tPq5tHo5NHo5NLp5dLp5dLp5dDn49Pq5tXu49bu4tnu4trt4dzu49jv59nw6Nnw6Nnw6Nvv6N7u6N7u6N7t59/t59zu6Nrv6Nrv6Nzx6tzx6tvy6Nvy59rx6Nnw6tjw6tjv6Njv6Nfv6Nbu59bs59br6Nbr6NXq59br6Nfs6dfs6dfs6dfs6dft6dfu6dbv6dfu6dfu6dju6dru6dvu6dzt6d7t6d3t6dns6dns6dns6dns6dns6dns6dns6djr6Nrt6tnv6Nfu5tbt5dfu5tfu5tjv59nw6Njv59fu5tju5Nzv39zv39rt3dvu3t3v39/w3+Dx4N/v3t/v3wAAOqXGOqXGOqXGOqXGOqXGO6bHO6bHO6bHO6bHPKfIPKfJOqXHOqXHOqXHO6bIOqXHOaTGOaTGOaTGOabGOabGOabGOKXFNqTENaTENaTENqXFNqXFNaTFM6PGM6PGMqLEMqLELqHBLqC/PKTFSKXIHXOXCFh5WKS6jdDentXip9noot3npdznp9nlr9vortznq9zmqdzmptzlpNzlqdzlq9jjrtrlr9nlsdnls9nltNrmtNvjtNzht9/jud/jvOLmud/jut/kueLluOTlu+foueXmuufouePlvOTmwOTnxuPnyuTp0eXs0uXs0uXs0uXs0uXs1Ojt1Ojt1Ojt1Ojt1Oft0+bt0+bt0uXs0uXs0eTr0uXs0+bt1Ofu1Ofu0uXs0uXs0uXs0uXs0uXs0ufp0OXn0ebo0ebo0efn0+rm0+rm0ejk0ejk0unl0unl0unl0Ofj0+rm1e7j1u7i2e7i2u3h3O7j2O/n2fDo2O/n2O/n2vDo3fHq3fHq3PHp3PHp2/Hp2vHp2vHp2vHp2vHp2fPn2fPm2PHn1+7p1+7p1+/n1+/n1+/n1u7m1ezm1uvo1uvo1ern1uvo1+zp1uvo1uvo1uvo1uvo2O3p2O7p2O7p2O7p2O7p1+7p2O7p2u7p3e3p3e3p2ezp2ezp2ezp2ezp2ezp2ezp2ezp2Ovo2u3q2e/o2O/n2O/n2O/n2O/n2fDo2vHp2vHp2O/o2e/l3fDg3fDg2u3d2u7e3e/f4O/g4fDh4O/g4O/gAAA8p8g8p8g8p8g8p8g8p8g8p8g8p8g8p8g8p8g8p8k8p8k7psg6pcc6pcc7psg6pcc5pMY6pcc6pcc6qMU6qMU6p8U5p8U4psQ3p8Q3p8Q3p8Q3p8Q1psQ0pcU0pcU0pcU1pcUvo8IvocA7osRDoMMVa48LXX1dq8GM0d+a0+Cj1+ah3Oal3Oen2eWt2eat2+ar3Oap3Oam3OWl3OWm3eam2uSs2uWv2eWy2eWz2eW12+e02+O03OG33+O53+O74eW53+O53+O54uS45OW65ue55ea65+i54+W75ObA5OfG4+fL5enR5ezT5u3S5ezS5ezS5ezU6O3U6O3U6O3U6O3U5+3T5u3T5u3T5u3T5u3S5ezT5u3T5u3U5+7U5+7S5ezS5ezS5ezS5ezS5ezS5+nQ5efR5ujR5ujR5+fT6ubT6ubR6OTR6OTS6eXS6eXS6eXQ5+PT6ubV7uPW7uLZ7uLb7uLc7uPY7+fZ8OjY7+fY7+fY8OjX8OjX8OjY8enY8enZ8ena8ena8ena8ena8enZ8ubZ8+bX8OfX7unW7ejX7+fX7+fX7+fW7ubV7ObW6+jW6+jV6ufW6+jW6+jV6ufV6ufV6ufV6ufX7OjY7unY7unX7ejY7unW7unX7unZ7unb7unb7enZ7OnZ7OnZ7OnZ7OnZ7OnZ7OnZ7OnZ7Ona7erZ7+nZ8Oja8enZ8OjZ8Oja8enb8urb8ura8enZ7+bd7+Ld7+La7N7a7eDd7uHg7uLh7+Pi8OPi8OQAAD2oyT2oyT2oyT2oyT2oyT2oyT2oyTumxzumxz2oyT2oyj2oyjumyDumyDqlxzqlxzqlxzqlxzqlxzqoxDqoxDqoxDyqxjqpxDaowjaowjanwjanwjWmwjOlwzOlwzSmxDSmxDCkwzGjwz2lxkShxBNpjQ1iglytw47W45jT36DW5J/b5abd6Krb56zY5aza5avc5qrc5qfc5qbd5qPe5qPd5qnb5a3Y5LTY5bTa5rbd6LTb47Tc4bff5Lje4rrg5Lje4rje4rjh47fk5bjk5bjk5bvn6Lnj5brj5cDj5sbk58zm6tLm7dXo79Ll7NLl7NPm7dTo7dTo7dPn7NTo7dTo7dTn7tTn7tTn7tTn7tTn7tTn7tTn7tPm7dPm7dLl7NLl7NLl7NLl7NLl7NLn6dDl59Hm6NHm6NHn59Pq5tPq5tHo5NHo5NLp5dLp5dLp5dDn49Pq5tbv5Nbu4tnu4tzv49zu49ju5tnw6Njv59jv59fu5tbs5dbs5dbs5dbs5dfu5tjv59jv59nw6Nvy6tjx5djy5dbv5tjv6tfu6dfv59fv59bu5tbu5tbt59br6Nbr6NXq59Xq59Xq59Xq59Xq59br6Nbr6NXr5tbs59ft6Nfs59ju6dPv6dXv6dfu6dnu6drt6djr6Njr6Nns6dns6drt6tns6djr6Nns6dvu69nv6Nnx6Nvy6trx6djv59nw6Nvy6trx6dvy6tnv5t3u493u49rr4Nvt4t3t49/t4uDu4+Lv5ePx5gAAPajJPajJPajJPajJPajJPajJPajJO6bHO6bHPajJPajKPajKPKfJPKfJO6bIOqXHOqXHOqXHOqXHOqnDOqnDOqnDO6rEOanDOKnDOKnDNqfBNqfBNafBM6bBM6bBNKfCNKfCL6TCM6XFQKfIRqPGEmiMEGeGW67Ek9zpl9XhntbjoNvlqeDrrt/rr9vorNrmq9zmqtzmp9zmpt3moN3lod/nptvkrdjktdjltNrmtt3otNvjtNzht9/kuN7iuuDkuN7iuN7iuOHjt+TluOTluOTlu+fouePluuPlwOPmxuTnzObq0ubt1ejv0uXs0uXs0+bt1Ojt1Ojt0+fs1Ojt1Ojt1Ofu1Ofu1Ofu1Ofu1Ofu1Ofu0+bt0eTr0eTr0uXs0uXs0uXs0uXs0uXs0ufp0OXn0ebo0ebo0efn0+rm0+rm0ejk0ejk0unl0unl0unl0Ofj0+rm1u/k1u7i2e7i3O/j3O7j2O7m2fDo2O/n2O/n2u/n3u7n3u7n3u7n3+7n2+/n2O/n2O/n2fDo2/Lq2PHl2PLl1u/m2O/q1+7p1+/n1+/n1u7m1u7m1u3n1uvo1uvo1ern1ern1ern1ern1ern0+jl0+jl1Onl1evm1uzn1+3o1+7p0fDp0+/p1e/p1+7p2e7p2u3q2u3q2ezp2ezp2ezp2ezp2ezp2u3q2+7r2e/o2fHo2/Lq2vHp2O/n1+7m2fDo2vHp2/Lq2e/m3e7l3e7l3e7l3e7l3ezk3eri3uvj4O3l4e7mAAAAAAAAVAN9AdkbPTCbzg=="

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);