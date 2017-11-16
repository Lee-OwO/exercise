function fib(n) {
    var fib_n = function(curr, next, n) {
        if (n == 0) {
            return curr;
        }
        else {
        	console.log(curr);
            return fib_n(next, curr+next, n-1);
        }
    }
    return fib_n(0, 1, n);
}
fib(100)