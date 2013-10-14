var fixtures = window.fixtures || {};

fixtures.person1 = {
	name: 'Ivan',
	photo: 'http://url.ru/me.jpg',
	about: 'Some words',
	profiles: [
		{
			name: 'github',
			link: 'https://github.com/ivan'
		},
		{
			name: 'vkontakte',
			link: 'http://vk.com/ivan'
		},
		{
			name: 'facebook',
			link: 'http://facebook.com/ivan'
		}
	]
};

fixtures.person2 = {
	name: 'James',
	photo: 'http://url.ru/me.jpg',
	about: 'Some words',
	profiles: [
		{
			name: 'github',
			link: 'https://github.com/james'
		},
		{
			name: 'vkontakte',
			link: 'http://vk.com/james'
		},
		{
			name: 'facebook',
			link: 'http://facebook.com/james'
		}
	]
};

fixtures.person3 = {
	name: 'Fedor',
	photo: 'http://url.ru/me.jpg',
	about: 'Some words',
	profiles: [
		{
			name: 'github',
			link: 'https://github.com/fedor'
		},
		{
			name: 'vkontakte',
			link: 'http://vk.com/fedor'
		},
		{
			name: 'facebook',
			link: 'http://facebook.com/fedor'
		}
	]
};

fixtures.persons = [fixtures.person1, fixtures.person2, fixtures.person3];

fixtures.lecture1 = {
	title : 'Регулярные выражения',
	lecturer: 'Алексей Бережной',
	description: 'Чем могут быть полезны регулярные выражения для разработчика интерфейсов? О каких возможностях следует знать больше? Где находятся «подводные камни» и как обойти их в различных реализациях? И, наконец, что делать, если возможностей встроенной реализации регулярных выражений недостаточно',
	presentationUrl: 'http://yadi.sk/d/5uaBj1Kh9pYRV',
	videoUrl: 'http://yadi.sk/d/AU6yRkm89oATJ'
};

fixtures.lecture2 = {
	title : 'Языки программирования',
	lecturer: 'Денис Бугарчев',
	description: 'Существует значительно больше, чем один язык программирования, и даже больше, чем два. А есть ещё и такие языки, которые и языками с трудом можно назвать. Лекция посвящена тому, как не запутаться в существующем изобилии и зачем вообще смотреть на какие-то языки, кроме своего любимого.',		
	presentationUrl: 'http://yadi.sk/d/my2Yax_s9pX7Y',
	videoUrl: 'http://yadi.sk/d/m1QrFolf9o43i'
};

fixtures.lecture3 = {
	title : 'Безопасность веб-приложений',
	lecturer: 'Тарас Иващенко',
	description: 'Подробный разбор самых популярных угроз и методов защиты безопасности веб-приложений (OWASP Top 10).',
	presentationUrl: 'http://yadi.sk/d/IvhR9B0d9pW9b',
	videoUrl: 'http://yadi.sk/d/Py0p5T629mVC4'
};

fixtures.lectures = [fixtures.lecture1, fixtures.lecture2, fixtures.lecture3];

fixtures.menuItem1 = {
	index : 0,
	title: 'О ШРИ',
	url: '/',
	type: 'StaticView',
	active: true
};

fixtures.menuItem2 = {
	index : 1,
	title: 'Студенты',
	url: '/students',
	type: 'PersonListView',
	active: false
};

fixtures.menuItem3 = {
	index : 2,
	title: 'Лекции',
	url: '/lectures',
	type: 'LectureListView',
	active: false
};

fixtures.menu = [fixtures.menuItem1, fixtures.menuItem2, fixtures.menuItem3];


fixtures.appData = {

	menu: [{
		index : 0,
		title: 'О ШРИ',
		url: '/',
		type: 'StaticView',
		active: false
	}, {
		index : 1,
		title: 'Студенты',
		url: '/students/',
		type: 'PersonListView',
		active: false
	}, {
		index : 2,
		title: 'Лекции',
		url: '/lectures/',
		type: 'LectureListView',
		active: true
	}],

	pages: [{
		url: '/',
		type: 'StaticModel',
		data: {
			content: '<div>Контент</div>'
		}
	}, {
		url: '/lectures/',
		type: 'LectureCollection',
		data: [{
			title : 'Регулярные выражения',
			lecturer: 'Алексей Бережной',
			description: 'Чем могут быть полезны регулярные выражения для разработчика интерфейсов? О каких возможностях следует знать больше? Где находятся «подводные камни» и как обойти их в различных реализациях? И, наконец, что делать, если возможностей встроенной реализации регулярных выражений недостаточно',
			presentationUrl: 'http://yadi.sk/d/5uaBj1Kh9pYRV',
			videoUrl: 'http://yadi.sk/d/AU6yRkm89oATJ'
		}, {
			title : 'Языки программирования',
			lecturer: 'Денис Бугарчев',
			description: 'Существует значительно больше, чем один язык программирования, и даже больше, чем два. А есть ещё и такие языки, которые и языками с трудом можно назвать. Лекция посвящена тому, как не запутаться в существующем изобилии и зачем вообще смотреть на какие-то языки, кроме своего любимого.',
			presentationUrl: 'http://yadi.sk/d/my2Yax_s9pX7Y',
			videoUrl: 'http://yadi.sk/d/m1QrFolf9o43i'
		}, {
			title : 'Безопасность веб-приложений',
			lecturer: 'Тарас Иващенко',
			description: 'Подробный разбор самых популярных угроз и методов защиты безопасности веб-приложений (OWASP Top 10).',
			presentationUrl: 'http://yadi.sk/d/IvhR9B0d9pW9b',
			videoUrl: 'http://yadi.sk/d/Py0p5T629mVC4'
		}]
	}, {
		url: '/students/',
		type: 'PersonCollection',
		data: [{
			name: 'Попов Никита',
			photo: 'http://cs408530.vk.me/v408530792/1e45/XISCuQa83W4.jpg',
			about: '<p>Привет! Меня зовут Никита.</p><p>В детстве я хотел быть пожарным. Потом хотел быть дрессировщиком в цирке. Но годам примерно к десяти определился, что хочу быть программистом, как папа. Ну как определился, по-моему мне просто не оставили выбора. В мои 12 лет мы с папой писали тетрис на FoxPro 2.0. Потом был университет, матан, C#, .NET, работа в банке.</p><p>Потом был Питер, там меня подсадили на Смолток. На нем мы писали наши вертолетные и самолетные тренажеры. Тренажер — это кабина настоящего, скажем, вертолета Ми-17. Она установлена внутри белой сферы, на которой восемью проекторами рисуется панорамный вид за окнами, в 3D. И все это стоит на платформе подвижности с пневматическими ногами.</p><p>Восемь серверов в реальном времени считают динамику полета и имитируют работу всех систем вертолета, еще восемь серверов рисуют графику. Вся логика работает на смолтоке. Меня спрашивали, жив ли смолток сейчас. Так вот, очень даже жив.</p><p>Работа была хорошая, интересная. Но я к тому моменту уже давно интересовался интерфейсами и юзабилити, а интерфейс нашего тренажера оставлял желать лучшего. И менять его было не очень нужно, потому что это не массовый продукт. Новым пользователям (обычно летным инструкторам — дядькам лет пятидесяти) выдавали инструкцию по пользованию и как бы неудобно там все ни было, делай по инструкции: будет работать.</p><p>Так что я читал книжки по дизайну, по ночам рисовал красивые картинки в фотошопе, участвовал в конференциях, у нас даже был свой образовательный проект о UX-проектировании, назвался Experiemint. Но все равно заниматься этим в свободное время было недостаточно. Поэтому в декабре прошлого года я уволился, уехал в теплые края, где тепло и дешево (в отличие от Питера) и на несколько месяцев погрузился в мир веба. С тех пор не выныривал.</p><p>Я верю, что чтобы делать современные веб-приложения, не достаточно быть только веб-дизайнером или только фронтэнд-разработчиком. Надо уметь и то, и другое. Неудобно, когда дизайнер рисует картинку в фотошопе, а потом объясняет разработчику, что при наведении сюда вот это двигается на три пикселя вот сюда, а вот это наколняется, а вот тут параллакс... Здорово, когда это делает один человек. См. например The Verge. У них дизайн нельзя отделить от программирования.</p><p>Дедушка Джобс говорил:</p><p>Most people make the mistake of thinking design is what it looks like. That’s not what we think design is. It’s not just what it looks like and feels like. Design is how it works.</p><p>Я пришел в ШРИ, чтобы научиться не рисовать дизайн, а делать его, заставлять страницу работать так, как нужно мне. Чтобы привести в порядок свои знания (я же самоучка, в голове каша) и получить новые. Чтобы общаться с людьми, которые делают то же, что и я, и учиться у них. Пока все это получается и наша школа меня очень радует. Спасибо организаторам, все клево :)</p>',
			profiles: [{
				name: 'Facebook',
				link: 'http://facebook.com/popov.nikita'
			}, {
				name: 'Vkontakte',
				link: 'http://vk.com/nikita.v.popov'
			}, {
				name: 'GitHub',
				link: 'https://github.com/losnikitos'
			}, {
				name: 'Ya.ru',
				link: 'lhttp://osnikitos123.ya.ru'
			}]
		}, {
			name: 'Орловский Роман',
			photo: 'http://cs14115.vk.me/c315820/v315820751/33bf/zID6ILpd6L0.jpg',
			about: '<p>Обо мне, обо мне, обо мне</p>',
			profiles: [{
				name: 'Vkontakte',
				link: 'http://vk.com/id3776751'
			}, {
				name: 'GitHub',
				link: 'https://github.com/Romanaldo/'
			}, {
				name: 'Ya.ru',
				link: 'http://ctuxu-r.ya.ru/'
			}]
		}, {
			name: 'Морозов Андрей',
			photo: 'http://i.imgur.com/byyMclh.jpg',
			about: '<p>Учусь на 3-ем курсе в МАТИ - РГТУ им. К.Э. Циолковского по специальности "Информатика и вычислительная техника". Впервые столкнулся с версткой на 2-ом курсе. Нам преподавали курс под названием "WEB-технологии", в рамках которого были HTML и CSS. Мне безумно понравилось верстать. И я точно решил, что моя будущая работа будет связана с вебом.</p>',
			profiles: [{
				name: 'Facebook',
				link: 'http://www.facebook.com/1uckytrue'
			}, {
				name: 'Vkontakte',
				link: 'http://vk.com/luckytrue'
			}, {
				name: 'GitHub',
				link: 'https://github.com/LuckyTrue'
			}, {
				name: 'Ya.ru',
				link: 'http://luckytrue.ya.ru/'
			}]
		}]
	}]

};