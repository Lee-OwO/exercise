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
	}









}
console.log(`  
                           .;$$                     
                ....:;$$$$$$$   $                     
            ..;;;$$$            $:..                  
         .:$$$$$$               $$$$$:.               
       .;$$$$$$$3             $$$$$$$$$;.             
     .;$$$$$$$$$$      $$$$$$$;$$$$$$$$$$;.           
    ;$$$$$$$$$$$$$    $$;$$$$$$$$$$$$$$$$$$;          
   ;$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$$$$$$$$$         
  $$$$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$$$$$$$$$        
 :$$$$$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$$$$$$$$;       
.$$$$$$$$$$$$$$$$$$$$$$$   $$$$$$$$$$$$$$$$$$$$.      
:$$$$$$$$$$$$$$$$$$$$$$$$   $$$$$$$$$$$$$$$$$$$:      
;$$$$$$$$$$$$$$$$$$$$$$$$$$  $$$$$$$$$$$$$$$$$$;      
;$$$$$$$$$$$$$$$$$$$$$$$$$$$   $$$$$$$$$$$$$$$$;      
:$$$$$$$$$$$$$$$$$$             $$$$$$$$$$$$$$$:      
.$$$$$$$$$$$$$$$                 $$$$$$$$$$$$$$.      
 ;$$$$$$$$$$$$$                   $$$$$$$$$$$$;       
  $$$$$$$$$$$$                     $$$$$$$$$$$        
   $$$$$$$$$$                      $$$$$$$$$$         
    ;$$$$$$$$                     $$$$$$$$$;          
     .$$$$$$$$                   $$$$$$$$$.           
       .$$$$$$$$               $$$$$$$$$:             
         .;$$$$$$$$          $$$$$$$$;.               
            .:$$$$$$$$$$$$$$$$$$$$:.                  
                ...:;;;;;;;;:...`)