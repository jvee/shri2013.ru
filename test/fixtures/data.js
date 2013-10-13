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
	description: 'Алексей Бережной',
	presentationUrl: 'http://yadi.sk/d/5uaBj1Kh9pYRV',
	videoUrl: 'http://yadi.sk/d/AU6yRkm89oATJ'
};

fixtures.lecture2 = {
	title : 'Языки программирования',
	description: 'Денис Бугарчев',
	presentationUrl: 'http://yadi.sk/d/my2Yax_s9pX7Y',
	videoUrl: 'http://yadi.sk/d/m1QrFolf9o43i'
};

fixtures.lecture3 = {
	title : 'Безопасность веб-приложений',
	description: 'Тарас Иващенко',
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