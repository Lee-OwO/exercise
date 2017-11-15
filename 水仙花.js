
for (let i = 0; i < 10000; i++) {
	let num = i;
	const cnum = num;
	let _number = cnum;
	let digit = 1;
	let total = 0;
	for (let i = 0; i < Infinity; i++) {
		num = num / 10;
		if ( num >= 1) {
			digit += 1;
		} else {
			break;
		}
	}
	debugger
	for (let i = 0; i < digit; i++) {
		let each = _number % 10;
		_number = Math.floor(_number / 10);
		total = total + each**digit;
		// console.log(each);
	}
	if (cnum === total) {
		console.log(total);
	} 
}