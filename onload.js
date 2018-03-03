var onLoad = (function() {
	var domLoaded = false

	document.addEventListener("DOMContentLoaded", function() {
		domLoaded = true
	})

	return function onLoad(f) {
		if (domLoaded) {
			setTimeout(f)
		} else {
			document.addEventListener("DOMContentLoaded", f)
		}
	}
})()

// ========================================================================