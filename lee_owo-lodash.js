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
				result.push(array[i])
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
	difference: function(arr, arr2 = []) {
		for (var i = 0; i < arr.length; i++) {
			if(arr2.indexOf(arr[i]) >= 0) {
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
	differenceBy: function() {

	}








}