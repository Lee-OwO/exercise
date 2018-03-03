function reduce(ary, fn, initVal) {
	for (let i = 0; i < ary.length; i++) {
		initVal = fn(initVal, ary[i], i, ary);
	}
	return initVal;
}