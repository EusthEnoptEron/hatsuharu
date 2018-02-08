(function() {
	var currentBookmark = localStorage.getItem("bookmark");
	Array.prototype.slice.call(document.querySelectorAll('.wrapper p')).forEach(function(el, i) {
		el.addEventListener("dblclick", function(e) {
			localStorage.setItem("bookmark", i);
			setBookmark(el);
		}, false);

		if(i == currentBookmark) {
			setBookmark(el);
			el.scrollIntoView(true);
		}
	});


	function setBookmark(el) {
		Array.prototype.slice.call(document.querySelectorAll(".bookmark")).forEach(function(oldBookmark) {
			oldBookmark.className = oldBookmark.className.replace(/bookmark/g, "").trim();
		});

		if(el) {
			el.className = (el.className + " bookmark").trim();
		}

	}
})();