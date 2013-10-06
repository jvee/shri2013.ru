module.exports = function (grunt) {

	// Configs
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '0.0.0.0',
					base: 'site',
					keepalive: true,
					// open: true,
					debug: true,
					livereload: true
				}
			}
		},

		watch: {

			options: {
				atBegin: true,
				spawn: false
			},

			scripts: {
				files: ['src/scripts/**/*.js'],
				tasks: ['copy:scripts']
			},

			tests: {
				files: ['src/scripts/**/*.js', 'test/**/spec.js'],
				tasks: ['mocha'],
				options: {
					atBegin: false
				}
			},

			pages: {
				files: ['src/pages/**/*.jade'],
				tasks: ['jade']
			},

			templates: {
				files: ['src/templates/**/*.dot'],
				tasks: ['dot']
			},

			styles: {
				files: ['src/styles/**/*.styl'],
				tasks: ['stylus']
			}

		},

		jade: {
			dev: {
				options: {
					data: { deploy: false }
				},
				files: [{
					expand: true,
					cwd: 'src/pages/',
					src: '**/*.jade',
					dest: 'site/',
					ext: '.html',
					filter: 'isFile'
				}]
			}
		},

		stylus: {
			dev: {
				options: {
					paths: ['src/styles/blocks', 'src/styles/utils'],
					// linenos: false,
					compress: false
					// urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding,
					// define: {} // Allows you to define global variables in Gruntfile that will be accessible in Stylus files.
				},
				files: [{
					expand: true,
					cwd: 'src/styles/',
					src: ['**/*.styl', '!blocks/**', '!utils/**'],
					dest: 'site/css/',
					ext: '.css',
					filter: 'isFile'
				}]
			}
		},

		dot: {
			dev: {
				options: {
					variable: 'tmpl', // namespace
				},
				src: ['src/templates/**/*.dot'],
				dest: 'site/js/templates.js'
			}
		},

		copy: {
			scripts: {
				expand: true,
				cwd: 'src/scripts/',
				src: '**/*.js',
				dest: 'site/js/',
				// flatten: true,
				filter: 'isFile'
			},

			bower: {
				expand: true,
				cwd: 'components/',
				src: ['*/*.js', '!chai/**', '!sinon/**', '!mocha/**', '!**/index.js', '!*/*min.js'],
				dest: 'site/js/lib/',
				flatten: true,
				filter: 'isFile'
			}
		},

		concurrent: {
			dev: ['livereload', 'watch', 'devserver'],
			options: {
				logConcurrentOutput: true
			}
		},

		mocha: {
			test: {
				src: ['test/**/*.html'],
				options: {
					bail: true,
					log: true,
					reporter: 'Spec',
					run: true
				}
			}
		}

	});

	grunt.event.on('watch', function(action, filepath, type) {
		// if type ===
		grunt.config.set('copy.scripts.src', filepath.replace('src/scripts/', ''));
	});




	// https://github.com/gruntjs/grunt-contrib-connect
	grunt.loadNpmTasks('grunt-contrib-connect');
	// https://github.com/gruntjs/grunt-contrib-watch
	grunt.loadNpmTasks('grunt-contrib-watch');
	// https://github.com/gruntjs/grunt-contrib-copy
	grunt.loadNpmTasks('grunt-contrib-copy');
	// https://github.com/gruntjs/grunt-contrib-jade
	grunt.loadNpmTasks('grunt-contrib-jade');
	// https://github.com/sindresorhus/grunt-concurrent
	grunt.loadNpmTasks('grunt-concurrent');
	// https://github.com/tinganho/grunt-dot-compiler
	grunt.loadNpmTasks('grunt-dot-compiler');
	// https://github.com/gruntjs/grunt-contrib-stylus
	grunt.loadNpmTasks('grunt-contrib-stylus');
	// https://github.com/kmiyashiro/grunt-mocha
	grunt.loadNpmTasks('grunt-mocha');



	grunt.registerTask('default', ['copy:bower', 'concurrent:dev']);
	grunt.registerTask('devserver', ['connect:server']);
	grunt.registerTask('test', ['mocha']);

	// speccial task for dev site
	// special task for deploy site

	


	// comment it
	grunt.registerTask('livereload', '', function () {

		var liveReloadTask = {};

		liveReloadTask.livereload =	{};
		liveReloadTask.livereload.files = ['{site,deploy}/**/*.{css,js,html}'];
		liveReloadTask.livereload.options = { livereload: true };

		grunt.config.set('watch', liveReloadTask);
		grunt.task.run('watch:livereload');

	});

};