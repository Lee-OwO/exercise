function isFirstLoad() {
	var _list = []

	return function (id) {
		if (_list.indexOf(id) >= 0) {
			return false
		} else {
			_list.push(id)
			return true
		}
	}
}

var a = isFirstLoad()
a(10) // true
a(10) // false