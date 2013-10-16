;(function (window, $, App) {

	var localVersion = localStorage['version'],
		head = document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	if (!localVersion || localVersion !== App.version) {
		
		$.get(App.stylesLink).then(function (css, data, xhr) {
			style.innerHTML = css;
			localStorage['css'] = css;
		});

		$.ajax(App.dataLink, {
			async: false,
			complete: function (xhr, status) {
				App.data = $.parseJSON(xhr.responseText);
				localStorage['app.data'] = xhr.responseText;
			}
		});

	} else {
		style.innerHTML = localStorage['css'];
		App.data = $.parseJSON(localStorage['app.data']);
	}

	head.appendChild(style);

	localStorage['version'] = App.version;

})(this, jQuery, App = window.App || {}, undefined);