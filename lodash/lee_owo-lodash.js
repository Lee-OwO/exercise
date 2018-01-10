var lee_owo = {
	/**
	 * [分割数组]
	 * @param  {Array} array  [原始的数组]
	 * @param  {Number} size  [要分割的大小]
	 * @return {Array}        [用新数组包含的原数组分割块]
	 */
	chunk: function(array, size = 1) {
		var result = [];
		for (var i = 0; i < array.length; i += size) {
			result.push(array.slice(i, size + i));
		}
		return result;
	},
	/**
	 * [压缩数组，把所有逻辑为false的值删掉]
	 * @param  {Array} array [原始数组]
	 * @return {Array}       [过滤之后的数组]
	 */
	compact: function(array) {
		var result = [];
		for (var i = 0; i < array.length; i++) {
			if(array[i]) {
				result.push(array[i]);
			}
		}
		return result;
	},
	/**
	 * [筛选数组，把数组的所有符合条件的值删除]
	 * @param  {Array} arr   [原数组]
	 * @param  {Array}  arr2 [要删除的东西]
	 * @return {Array}       [返回过滤之后的数组]
	 */
	difference: function(arr, ...filter) {
		var filter = [].concat(...filter);
		for (var i = 0; i < arr.length; i++) {
			if(filter.indexOf(arr[i]) >= 0) {
				arr.splice(i, 1);
				i--;
			}
		}
		return arr;
	},
	/**
	 * [用给出的值填充数组，如果原数组有值则替换掉]
	 * @param  {Array} arr    [原数组]
	 * @param  {[type]} val   [要填进数组的东西]
	 * @param  {Number} start [开始的位置]
	 * @param  {Number} end   [结束的位置]
	 * @return {Number}       [返回填充之后的数组]
	 */
	fill: function(arr, val, start = 0, end = arr.length) {
		for (var i = start; i < end; i++) {
			arr[i] = val;
		}
		return arr;
	},
	/**
	 * 筛选数组
	 * @param  {Array} arr     用来筛选的原数组
	 * @param  {[type]} val    踢出去的值
	 * @param  {*} 			   method 调用的方法
	 * @return {Array}        返回的新数组
	 */
	differenceBy: function(arr, ...args) {
		var action = args.pop();
		action = this._iteratee(action);
		var filter = [].concat(...args).reduce((ary, item) => (ary.push(action(item)), ary), []);
		var arrF = arr.reduce((ary, item) => (ary.push(action(item)), ary), []);
		for (var i = 0; i < arrF.length; i++) {
			if(filter.indexOf(arrF[i]) >= 0) {
				arr.splice(i, 1);
				arrF.splice(i, 1);
				i--;
			}
		}
		return arr;
	},
	/**
	 * [This method like diggerence except that it accepts comparator which is invoked
	 *  to compare elements of array to values]
	 * @param  {Array}     arr  			[The array to inspect]
	 * @param  {...[type]} ...args  		[The value to exclude]
	 * @param  {Function}  the last of args [The comparator invoked per element]
	 * @return {Array}         			    [Return the new array of filtered values]
	 */
	differenceWith: function(arr, ...args) {
		let nArr = arr.slice();
		let comparator = args.pop();
		let fliter = [].concat(...args);
		for (let i = 0; i < nArr.length; i++) {
			for (let j = 0; j < fliter.length; j++) {
				if (comparator(nArr[i], fliter[j])) {
					nArr.splice(i, 1);
					i--;
					break;
				}
			}
		}
		return nArr;
	},
	/**
	 * [去除数组左边任意个元素]
	 * @param  {Array} arr   [要改变的原数组]
	 * @param  {Number} size [去除的个数]
	 * @return {Array}       [剪切过的新数组]
	 */
	drop: function(arr, size = 1) {
		arr.splice(0, size);
		return arr;
	},
	/**
	 * [去除数组右边任意个元素]
	 * @param  {Array} arr   [要改变的原数组]
	 * @param  {Number} size [去除的个数]
	 * @return {Array}       [剪切过的新数组]
	 */
	dropRight: function(arr, size = 1) {
		var len = (arr.length - size) > 0 ? (arr.length - size) : 0;
		arr.splice(len, size);
		return arr;
	},
	dropRightWhile: function(arr, action) {
		let length = arr.length;
		let fn = this._predicate(action);
		for (let i = arr.length - 1; i >= 0; i--) {
			if (!fn(arr[i])) {
				break;
			}
			length--;
		}
		return arr.slice(0, length);
	},
	dropWhile: function(arr, action) {
		let fn = this._predicate(action);
		for (var i = 0; i < arr.length; i++) {
			if (!fn(arr[i])) {
				break;
			}
		}
		return arr.slice(i);
	},
	/**
	 * [Flattens array a single level deep]
	 * @param  {Array} arr [The array to flatten]
	 * @return {Array}     [Returns the new flattened array]
	 */
	flatten: function(arr) {
		return [].concat(...arr);
	},
	/**
	 * flattens array
	 * @param  {Array} arr [The array to flatten]
	 * @return {Array}     [Returns the new flattened array]
	 */
	flattenDeep: function(arr) {
		while (arr.some((elem) => Array.isArray(elem))) {
			arr = [].concat(...arr);
		}
		return arr;
	},
	/**
	 * flattens array
	 * @param  {Array} arr   [The array to flatten]
	 * @param  {Number} depth [The maximum count to flatten]
	 * @return {Array}       [Returns the new flattrned array]
	 */
	flattenDepth: function(arr, depth = 1) {
		for (var i = 0; i < depth; i++) {
			if (arr.some((elem) => Array.isArray(elem))) {
				arr = [].concat(...arr);
			} else {
				return arr;
			}
		}
		return arr;
	},
	/**
	 * Return an object composed from key-value pairs
	 * @param  {Array} pairs [the key-value pairs]
	 * @return {Object}       [Returns the new object]
	 */
	fromPairs: function(pairs) {
		var result = {};
		for (var i = 0; i < pairs.length; i++) {
			result[pairs[i][0]] = pairs[i][1];
		}
		return result;
	},
	/**
	 * Gets the first element of array
	 * @param  {Array} arr [The array to query]
	 * @return {any}     [Return the first element of array]
	 */
	head: function(arr) {
		return arr[0];
	},
	/**
	 * Gets the index
	 * @param  {Array} arr   [The array to inspect]
	 * @param  {any} val   [The value to search for]
	 * @param  {Number} start [The index to search from]
	 * @return {Number}       [Returns the index of the matchd value,else -1]
	 */
	indexOf: function(arr, val, start = 0) {
		if (start < 0) {
			if (-start >= arr.length) {
				narr = arr;
				return narr.indexOf(val);
			} else {
				narr = arr.slice(arr.length + start);
			}
			return narr.indexOf(val) + start + arr.length;
		} else {
			narr = arr.slice(start);
			return narr.indexOf(val) + start;
		}
	},
	/**
	 * Gets all but the last element of array
	 * @param  {Array} arr [The array to query]
	 * @return {Array}     [Returns the slice of array]
	 */
	initial: function(arr) {
		return arr.slice(0, arr.length - 1);
	},
	/**
	 * Create an array included the common values which in all given arrays
	 * @param  {...[Array]} arr [The arrays to inspect]
	 * @return {Array}          [Returns the new array of intersection]
	 */
	intersection: function(...arr) {
		var result = [];
		for (var i = 0; i < arr[0].length; i++) {
			for (var j = 1; j < arr.length; j++) {
				if (arr[j].indexOf(arr[0][i]) < 0) {
					break;
				}
			}
			if (j === arr.length) {
				result.push(arr[0][i]);
			}
		}
		return result;
	},
	/**
	 * Converts all elements in array into a string separated by separator
	 * @param  {Array} arr        [The array to convert]
	 * @param  {String} separator [The separator]
	 * @return {String}           [Return the converted string]
	 */
	join: function(arr, separator = ',') {
		return arr.join(separator);
	},
	/**
	 * Gets the last element of array
	 * @param  {Array} arr [The array to query]
	 * @return {*}         [Returns the last element of array]
	 */
	last: function(arr) {
		return arr[arr.length - 1];
	},
	/**
	 * This method returns the first argument it receives
	 * @param  {*} arg    [Any value]
	 * @return {*}        Return the first argument
	 */		
	identity: function(...arg) {
		return arg[0];
	},
	/**
	 * Creates a function, return a new function according to the
	 * argument of this function. If argument is a property name,
	 * the new function returns the property value for a given element.
	 * If argument is an array or object, the new function returns true
	 * for elements that contain the equivalent source properties,
	 * other it returns false.
	 * @param  {*} action  		 [description]
	 * @return {Function}        [description]
	 */
	_iteratee: function(action) {
		var type = this._typeJudeg(action);
		if (type === 'Function') {
			return action;
		}
		if (type === 'String') {
			return item => item[action];
		}
	},
	_predicate: function(action) {
		var type = this._typeJudeg(action);
		if (type === 'Function') {
			return action;
		}
		if (type === 'Array') {
			return function(value, index, array) {
				return value[action[0]] === action[1];
			};
		}
		if (type === 'Object') {
			var that = this;
			return function(value, index, array) {
				return that.isMatch(value, action);
			};
		}
		if (type === 'String') {
			return function(value, index, array) {
				return value[action];
			};
		}
	},
	/**
	 * Judeg type of the argument
	 * @param  {*} 	a 	  The argument that need to judeged
	 * @return {String}   Return the type of argument
	 */
	_typeJudeg: function(a) {
		var type = Object.prototype.toString.call(a);
		if (type === "[object Number]") {
			return 'Number';
		} else if (type === "[object String]") {
			return 'String';
		} else if (type === "[object Function]") {
			return 'Function';
		} else if (type === "[object Object]") {
			return 'Object';
		} else if (type === "[object Boolean]") {
			return 'Boolean';
		} else if (type === "[object Array]") {
			return 'Array';
		}
	},
	/**
	 * This method find the index of element from right to left
	 * @param  {Array} ary    [The array to inspect]
	 * @param  {*} val   	  [The value to search for]
	 * @param  {Number} start [The index to search from]
	 * @return {Number}}      [Returns the index of the matched value, else -1]
	 */
	lastIndexOf: function(ary, val, start = ary.length - 1) {
		let nAry = ary.slice();
		nAry.splice(start + 1);
		return nAry.lastIndexOf(val);
	},
	/**
	 * Gets the element at index n of array.If n is a negative,
	 * the nth element from the end id returned
	 * @param  {Array} ary  [The array to query]
	 * @param  {Number} n   [The index of the element to return]
	 * @return {*}      	[Returns the nth element of array]
	 */
	nth: function(ary, n = 0) {
		let index = n < 0 ? ary.length + n : n;
		return ary[index];
	},
	/**
	 * Removes all given values from array
	 * @param  {Array}    arr  [The array to modify]
	 * @param  {...[type]} val [The values to remove]
	 * @return {Array}         [Returns array]
	 */
	pull: function(arr, ...val) {
		for (let i = 0; i < arr.length; i++) {
			if (val.indexOf(arr[i]) > -1) {
				arr.splice(i,1);
				i--;
			}
		}
		return arr;
	},
	/**
	 * Removes all values of val from array
	 * @param  {Array} arr [The array to modify]
	 * @param  {Array} val [the  values to remove]
	 * @return {Array}     [Returns array]
	 */
	pullAll: function(arr, val) {
		for (let i = 0; i < arr.length; i++) {
			if (val.indexOf(arr[i]) > -1) {
				arr.splice(i,1);
				i--;
			}
		}
		return arr;
	},
	/**
	 * This method is like pullAll except that it accepts iteratee
	 * ehich is invoked for each element of array. 
	 * @param  {Array} arr    [The array to modify]
	 * @param  {Array} val    [The values to remove]
	 * @param  {*}     action [The iteratee invoked per element]
	 * @return {Array}        [Returns array]
	 */
	pullAllBy: function(arr, val, action) {
		action = this._iteratee(action);
		let nArr = arr.reduce((ary, item) => (ary.push(action(item)), ary), []);
		let nVal = val.reduce((ary, item) => (ary.push(action(item)), ary), []);
		for (let i = 0; i < arr.length; i++) {
			if (nVal.indexOf(nArr[i]) > -1) {
				arr.splice(i, 1);
				nArr.splice(i, 1);
				i--;
			}
		}
		return arr;
	},
	/**
	 * This method is like pullAll except that it accepts 
	 * which is invoked to compare elements of array to values
	 * @param  {Array} ary         [The array to modify]
	 * @param  {Array} val         [The values to remove]
	 * @param  {*} 	 	comparator [The comparator invoked per element]
	 * @return {Array}             [Returns array]
	 */
	pullAllWith: function(ary , val, comparator) {
		for (let i = 0; i < ary.length; i++) {
			for (let j = 0; j < val.length; j++) {
				if (comparator(ary[i], val[j])) {
					ary.splice(i, 1);
					i--;
					break;
				}
			}
		}
		return ary;
	},
	/**
	 * Reverses array so that the first element becomes the last,
	 * the second element becomes the second to last, and so on.
	 * @param  {Array} arr [The array to modify]
	 * @return {Array}     [Returns array]
	 */
	reverse: function(arr) {
		let carrier;
		let helf = arr.length / 2 | 0;
		for (let i = 0; i < helf; i++) {
			carrier = arr[i];
			arr[i] = arr[arr.length - 1 - i];
			arr[arr.length - 1 - i] = carrier;
		}
		return arr;
	},
	/**
	 * Performs a deep comparison between two values to
	 * determine if they are equivalent
	 * @param  {*}  value 		[The value to compare]
	 * @param  {*}  other 		[The other value compare]
	 * @return {Boolean}        [Returns true if the values are
	 *                           equivalent, else false]
	 */
	isEqual: function(value, other) {
		var that = this;
		// if (that.isNaN(value) && that.isNaN(other)) return true;
		let type1 = that._typeJudeg(value);
		let type2 = that._typeJudeg(other);
		if (type1 !== type2) return false;
		if (type1 === 'Number' || type1 === 'String' || type1 === 'Boolean') {
			if (value === other) {
				return true;
			} else {
				return false;
			}
		}
		// Object and Array
		let key1 = Object.keys(value);
		let key2 = Object.keys(other);
		if (key1.length !== key2.length) return false;
		for (let i = 0; i < key1.length; i++) {
			if (typeof value[key1[i]] === 'object') {
				if (!that.isEqual(value[key1[i]], other[key1[i]])) return false
			} else {
				if (value[key1[i]] !== other[key1[i]]) return false;
			}
		}
		return true;
	},
	/**
	 * Checks if value is NaN
	 * @param  {*}  val 	 [The value to check]
	 * @return {Boolean}     [Returns true if value is NaN]
	 */
	isNaN: function(val) {
		if (typeof val === "object") {
			val = val.valueOf();
		}
		if (val !== val) {
			return true;
		}
		return false;
	},
	isMatch: function(object, source) {
		let key = Object.keys(source);
		for (let i = 0; i < key.length; i++) {
			if (!this.isEqual(source[key[i]], object[key[i]])) {
				return false;
			}
		}
		return true;
	},
	/**
	 * This method is like find except that it returns the index
	 * of the first element predicate returns truthy for instead
	 * of the element itself
	 * @param  {Array} arr     [The array to inspect]
	 * @param  {*} action 	   [The function invoked per iteration]
	 * @param  {Number} action [The index to search from]
	 * 
	 * @return {Number}        [Returns the index of the found element,else -1]
	 */
	findIndex: function(arr, action, fromIndex = 0) {
		let fn = this._predicate(action);
		let result = -1;
		for (let i = fromIndex; i < arr.length; i++) {
			if (fn(arr[i])) {
				result = i;
				break;
			}
		}
		return result;
	},
	findLastIndex: function(arr, action, fromIndex = arr.length - 1) {
		let fn = this._predicate(action);
		let result = -1;
		for (let i = fromIndex; i >= 0; i--) {
			if (fn(arr[i])) {
				result = i;
				break;
			}
		}
		return result;
	},
	/**
	 * This method is like intersection except that it accepts iteratee which
	 * is invoked for each element of each arrays to generate the criterion by
	 * which they're compared.
	 * @param  {Array} arg [description]
	 * @param  {*} [varname] [description]
	 * @return {Array}        [description]
	 */
	intersectionBy: function(...arg) {
		let action = arg.pop();
		let fn = this._iteratee(action);
		let nArg = [];
		let result = [];
		for (let i = 0; i < arg.length; i++) {
			let arr = arg[i].map(fn);
			nArg.push(arr);
		}
		for (var i = 0; i < arg[0].length; i++) {
			for (var j = 1; j < arg.length; j++) {
				if (nArg[j].indexOf(nArg[0][i]) < 0) {
					break;
				}
			}
			if (j === arg.length) {
				result.push(arg[0][i]);
			}
		}
		return result;
	},
	/**
	 * This method is like intersection except that it accepts
	 * comparator which is invoked to compare element of arrays.
	 * @param  {Array} arg    			[The array to inspect]
	 * @param  {Function} last of arg   [The comparator invoked per element]
	 * @return {Array}         			[Returns the new array of intersection values]
	 */
	intersectionWith: function(...arg) {
		let comparator = arg.pop();
		let result = [];
		for (let i = 0; i < arg[0].length; i++) {
			var fn = comparator.bind(this, arg[0][i]);
			for (var j = 1; j < arg.length; j++) {
				if(!arg[j].some(fn)) {
					break;
				}
			}
			if (j === arg.length) {
				result.push(arg[0][i]);
			}
		}
		return result;
	},
	/**
	 * Uses a binary search to determine the lowest index at which
	 * value should be inserted into arrau in order to maintain its
	 * sort order
	 * @param  {Array} arr  [The sorted array to inspect]
	 * @param  {*} 	   val  [The value to evaluate]
	 * @return {Number}     [Returns the index]
	 */
	sortedIndex: function(arr, val) {
		let left = 0;
		let right = arr.length - 1;
		while (left <= right) {
			var mid = (left + right) / 2 | 0;
			if (arr[mid] < val) {
				left = mid + 1;
			} else if (arr[mid - 1] === undefined || val > arr[mid - 1]) {
				return mid;
			} else {
				right = mid - 1;
			}
		}
	},
	sortedIndexOf: function(arr, val) {
		return this.sortedIndex(arr, val);
	},
	sortedIndexBy: function(arr, val, iteratee) {
		iteratee = this._iteratee(iteratee);
		arr = arr.map(iteratee);
		val = iteratee(val);
		return this.sortedIndex(arr, val);
	},
	/**
	 * This method is like sortedIndex except that it returns the index at
	 * which value should be inserted into array in order to maintain its 
	 * sort order
	 * @param  {Array}  arr [The sorted array to inspect]
	 * @param  {*} 		val [The value to evaluate]
	 * @return {Number}     [Returns the index at which value should be inderted into array]
	 */
	sortedLastIndex: function(arr, val) {
		let left = 0;
		let right = arr.length - 1;
		while (left <= right) {
			var mid = (left + right) / 2 | 0;
			if (arr[mid] > val) {
				right = mid - 1;
			} else if (arr[mid + 1] === undefined || val < arr[mid + 1]) {
				return mid + 1;
			} else {
				left = mid + 1;
			}
		}
	},
	sortedLastIndexBy: function(arr, val, iteratee) {
		iteratee = this._iteratee(iteratee);
		arr = arr.map(iteratee);
		val = iteratee(val);
		return this.sortedLastIndex(arr, val);
	},
	sortedLastIndexOf: function(arr, val) {
		return this.sortedLastIndex(arr, val) - 1;
	},
	/**
	 * This method is like uniq except that it's designed and
	 * optimized for sorted arrays
	 * @param  {Array} arr [The array to inspect]
	 * @return {Array}     [Returns the new duplicate free array]
	 */
	sortedUniq: function(arr) {
		let result = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== arr[i - 1]) {
				result.push(arr[i]);
			}
		}
		return result;
	},
	/**
	 * This method is like uniqBy except that it's designed and optimized
	 * for sorted arrays
	 * @param  {Array}  arr    [The array to inspect]
	 * @param  {*} 		action [The iteratee invoked per element]
	 * @return {Array}         [Returns the new duplicate free array]
	 */
	sortedUniqBy: function(arr, action) {
		let result = [];
		let fn = this._iteratee(action);
		let map = arr.map(fn);
		for (let i = 0; i < map.length; i++) {
			if (map[i] !== map[i - 1]) {
				result.push(arr[i]);
			}
		}
		return result;
	},
	/**
	 * Gets all but the first element of array
	 * @param  {Array} arr [The array to query]
	 * @return {Array}     [Returns the slice of array]
	 */
	tail: function(arr) {
		return arr.slice(1);
	},
	/**
	 * Creates a slice of array with n elements taken from the beginning
	 * @param  {Array}  arr [The array to query]
	 * @param  {Number} n   [The number of elements to take]
	 * @return {Array}      [Returns the slice of array]
	 */
	take: function(arr, n = 1) {
		return arr.slice(0, n);
	},
	/**
	 * Creates a slice of array with n elements taken from the end
	 * @param  {Array}  arr [The array to query]
	 * @param  {Number} n   [The number of elements to take]
	 * @return {Array}      [Returns the slice of array]
	 */
	takeRight: function(arr, n = 1) {
		if (n === 0) return [];
		return arr.slice(-n);
	},
	/**
	 * Creates a slice of array with elements taken from the end.Elements art 
	 * taken until predicate returns falsey
	 * @param  {Array} arr    [The array to query]
	 * @param  {*}	   action [The function invoked per iteration]
	 * @return {Array}        [Returns the slice of array]
	 */
	takeRightWhile: function(arr, action) {
		let fn = this._predicate(action);
		for (var i = arr.length - 1; i >= 0; i--) {
			if (!fn(arr[i])) {
				break;
			}
		}
		return arr.slice(i + 1);
	},
	/**
	 * Creates a slice array with elements taken from the beginning.Elements 
	 * are taken until predicate returns falsey.
	 * @param  {Array}  arr    [The array to query]
	 * @param  {*} 		action [The function invoked per iteration]
	 * @return {Array}         [Returns the slice of array]
	 */
	takeWhile: function(arr, action) {
		let fn = this._predicate(action);
		for (var i = 0; i <arr.length; i++) {
			if (!fn(arr[i])) {
				break;
			}
		}
		return arr.slice(0, i);
	},
	/**
	 * Creates an array of unique values,in order,from all
	 * given arrays.
	 * @param  {Array} arr    [The Arrays to inspect]
	 * @return {Array}        [Returns the new array of combined values]
	 */
	union: (...arr) => Array.from(new Set([].concat(...arr))),
	/**
	 * This method is like union except that it accpets iteratee
	 * @param  {...[type]} arr [The arrays to inspect]
	 * @return {Array}         [Returns the new array of combined values]
	 */
	unionBy: function(...arr) {
		var fn = this._iteratee(arr.pop());
		var nArr = arr.slice();
		var result = [];
		var map = new Set();
		for (let i = 0; i < nArr.length; i++) {
			nArr[i] = nArr[i].map(fn);
		}
		for (let i = 0; i < nArr.length; i++) {
			nArr[i].reduce(function(result, item, index) {
				if (!map.has(item)) {
					result.push(arr[i][index]);
					map.add(item);
				}
				return result;
			}, result);
		}
		return result;
	},
	/**
	 * This method is like union except that it accepts comparator
	 * @param  {...[type]} arr [The arrays to inspect]
	 * @return {Array}         [Returns the new array of combined values]
	 */
	unionWith: function(...arr) {
		var comparator = arr.pop();
		let result = [];
		for (let i = 0; i < arr.length; i++) {
			arr[i].forEach(function (item) {
				for (var i = 0; i < result.length; i++) {
					if (comparator(result[i], item)) {
						break;
					}
				}
				if(i === result.length) {
					result.push(item);
				}
			});
		}
		return result;
	}









}
console.log(`
   ##     #####    #######    #####    #######  ######## ######## ######## ##        ######## 
 ####    ##   ##  ##     ##  ##   ##  ##     ## ##       ##       ##       ##    ##  ##       
   ##   ##     ## ##     ## ##     ## ##     ## ##       ##       ##       ##    ##  ##       
   ##   ##     ##  ######## ##     ##  ######## #######  #######  #######  ##    ##  #######  
   ##   ##     ##        ## ##     ##        ##       ##       ##       ## #########       ## 
   ##    ##   ##  ##     ##  ##   ##  ##     ## ##    ## ##    ## ##    ##       ##  ##    ## 
 ######   #####    #######    #####    #######   ######   ######   ######        ##   ###### 

	`)