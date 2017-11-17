function int(num) {
	const NUM = num;
	var digit = 1;
	var numd = NUM;
	while (numd >= 10) {
		digit++;
		numd /= 10;
	}
	//console.log(digit);
	var count = -1;
	var total = 0;
	var numa = NUM;
	while (digit > 0) {
		numa = num;
		var count = -1;
		while (numa >= 0) {debugger
			numa = numa - (1 * (10**(digit - 1)));
			count++;
		}
		//console.log(count)
		total = total + count * (10**(digit - 1));
		num = num - count * (10**(digit - 1));
		digit--;
		//console.log(total);
		//console.log(num);
		//console.log(digit);
	}
	console.log(total);

}
int(123456789123456787.123)
