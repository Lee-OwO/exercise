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
		var filter = filter.concat(...filter);
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
	 * [differenceBy description]
	 * @param  {[type]} arr    [description]
	 * @param  {[type]} val    [description]
	 * @param  {[type]} method [description]
	 * @return {[type]}        [description]
	 */
	differenceBy: function(arr, val, interatee) {
		var former, condition;
		var result = [];
		if (typeof interatee === 'function') {
			former = arr.map(interatee);
			condition = val.map(interatee);
		} else if (typeof interatee === 'string') {
			former = arr.filter(function (each) {
				return interatee in each;
			});
			condition = val.filter(function (each) {
				return interatee in each;
			});
		}
		for (var i = 0; i < former.length; i++) {
			if (condition.indexOf(former[i]) >= 0) {
				continue;
			}
			result.push(arr[i]);
		}
		return result;
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
			return arr.lastIndexOf(val);
		}
		arr = arr.slice(start);
		return arr.indexOf(val) + start;
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
	 * @return {*}     [Returns the last element of array]
	 */
	last: function(arr) {
		return arr[arr.length - 1];
	}








}