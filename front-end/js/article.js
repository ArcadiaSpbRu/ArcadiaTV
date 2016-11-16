function showArticle(data) {
	var d = data, link = d.link, html, node = document.createElement("div"), dc = document.getElementById("divContent");
    console.log(dc.clientWidth || dc.offsetWidth);
    console.log($('#divContent').innerWidth());
	html = "<iframe src=\"" + link +"\">";
	node.innerHTML = html;
	dc.appendChild(node);
}