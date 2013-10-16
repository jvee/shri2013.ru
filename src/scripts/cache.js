;(function (window, $, App) {

	var localVersion = localStorage['version'],
		head = document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	if (!localVersion || localVersion !== App.version) {
		
		localStorage.clear();

		$.get(App.stylesLink).then(function (css, data, xhr) {
			style.innerHTML = css;
			localStorage['css'] = css;
		});

	} else {
		style.innerHTML = localStorage['css'];
	}

	head.appendChild(style);

	localStorage['version'] = App.version;

})(this, jQuery, App = window.App || {}, undefined);