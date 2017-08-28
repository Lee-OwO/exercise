function Elem(id) {
	this.elem = document.getElementById(id)
}

Elem.prototype.html = function (val) {
	var elem = this.elem
	if (val) {
		elem.innerHTMl = val
		return this
	} else {
		return elem.innerHTMl
	}
}

Elem.prototype.on = function (type, fn) {
	var elem = this.elem
	elem.addEventListener(type, fn)
}