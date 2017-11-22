function plusOne(digits) {
    var len = digits.length;
    digits[len - 1] = digits[len - 1] + 1;
    for (i = digits.length - 1; i >= 0; i--) {
        if (digits[i] > 9) {
            if (i == 0) {
                digits[0] = 0;
                digits.unshift(1);
                break;
            }
            digits[i] = 0;
            digits[i - 1] += 1;
        } else {
            break;
        }  
    }
    return digits;
}
plusOne([9,9,9])
