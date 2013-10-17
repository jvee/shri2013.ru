;(function (window, $, App) {

	'use strict';

	App.PopupView = Backbone.View.extend({

		className: 'b-popup',

		template: App.templates['PopupTemplate'],

		events: {
			'click .b-popup__close' : 'close',
			'click': 'close',
			'click .b-popup__wrap': 'preventClose'
		},

		initialize: function () {
			this.render();

			this.state = 'hidden';
			this.contentEl = this.$('.b-popup__content')[0];

			if (App.vents) {
				App.vents.on('app.popup', this.show, this);
			}
		},

		render: function () {
			this.el.innerHTML = this.template();
			document.body.appendChild(this.el);
		},

		show: function (nestedView, backUrl) {
			var _this = this;

			if (!nestedView) return this;

			this.nestedView = nestedView;
			this.backUrl = backUrl;
			this.contentEl.appendChild(nestedView.render().el);

			if (this.state === 'hidden') {
				this.el.style.display = 'block';
				setTimeout(function () {
					_this.$el.addClass('is-visible');
				}, 0);
				
				this.state = 'visible';
			}

			if (App.vents) {
				App.vents.trigger('app.popup:show', this);
			}

			return this;
		},

		close: function (event) {
			var _this = this;

			if (event) event.stopPropagation();

			if (!this.nestedView || this.state === 'hidden') return this;

			this.$el.removeClass('is-visible');

			if (App.vents) {
				App.vents.trigger('app.navigate', '!' + this.backUrl);
				App.vents.trigger('app.popup:close', this);
			}

			setTimeout(function () {
				_this.nestedView.remove();
				_this.nestedView = undefined;
				_this.backUrl = undefined;
				_this.el.style.display = 'none';
				_this.state = 'hidden';
			}, 300);

			return this;
		},

		preventClose: function (event) {
			if (event) event.stopPropagation();
		}

	});

})(this, jQuery, App = window.App || {}, undefined);