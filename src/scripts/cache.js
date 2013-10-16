;(function (window, $, App) {

	var localVersion = localStorage['version'],
		head = document.getElementsByTagName('head')[0],
		style = document.createElement('style'),
		localData, x;

	if (!localVersion || localVersion !== App.version) {
		
		$.get(App.stylesLink).then(function (css, data, xhr) {
			style.innerHTML = css;
			localStorage['css'] = css;
		});

		$.ajax(App.dataLink, {
			async: false,
			complete: function (xhr, status) {
				App.data = $.parseJSON(xhr.responseText);
				localData = $.extend(true, {}, App.data);

				for (x = 0; x < localData.pages.length; x++) {
					localData.pages[x].data = undefined;
				}

				localStorage['app.data'] = JSON.stringify(localData);
			}
		});

	} else {
		style.innerHTML = localStorage['css'];
		App.data = $.parseJSON(localStorage['app.data']);
	}

	head.appendChild(style);

	localStorage['version'] = App.version;

})(this, jQuery, App = window.App || {}, undefined);