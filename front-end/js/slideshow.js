function showAlbum(data) {
	var d = data, t = d.showTime, arr = d.photos, html = "", node = document.createElement("div"), i = 0, n = 1, timer;

	for (i; i < arr.length; i ++) {
		html = html + "<div id=\"photo" + i + "\" class=\"album-photo\"><img src=\"" + arr[i] + "\"></div>";
	}
	
	node.innerHTML = html;
	document.getElementById("divContent").appendChild(node);

	$('#photo0').fadeIn(600).delay(t * 1000 - 1250).fadeOut(600);
	
	timer = setInterval(function () {
		$('#photo' + n).fadeIn(600).delay(t * 1000 - 1250).fadeOut(600);
		if (n < arr.length) {
			n += 1;
		}
		if (n === arr.length) {
			clearInterval(timer);
		}
	}, t * 1000);
}