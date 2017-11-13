// 1-----------------------------
var R, M, Y;

R = 5;
M = 5000;
Y = 4;
for (let i = 0; i < Y; i++) {
	M = M + (M * R / 100);
}
console.log(M);
// 2-----------------------------
var money = 0;
for (var i = 0; i < 12; i++) {
	var doo = prompt("输入","") * 1;
	// var money = 0;
	money = money + doo;
}
console.log(money/12);