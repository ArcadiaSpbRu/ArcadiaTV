var time, interval;

(function getContent() {
	$("#divContent").empty();
	clearInterval(interval);
	$.getJSON('php/serv.php', function (data) {
		try {
			time = parseInt(data["showTime"]) * ((data["photoCount"]) ? parseInt(data["photoCount"]) : 1);
            eval("show" + data["type"]+"(data)");
		} catch (e){
			// если тип контента пришел не валидный, выводим сообщение пользователю
			//TODO: возвратить серверу отчет об ошибке
			alert(
				"Sorry undefined type of content : "
				+ e.message.toString()
					.substr(4)
					.replace("is not defined","")
			);
		}
		interval = setInterval(function() {
			getContent();
		}, time * 1000);
	});
}());
