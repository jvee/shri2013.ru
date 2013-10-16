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
					middleware: function(connect, options) {
						var index = '';
						try {
							index = require('fs').readFileSync(options.base + '/index.html');
						} catch (e) {}
						return [
							connect.static(options.base),
							function(req, res, next) {
								res.end(index);
							}
						];
					},
					livereload: true
				}
			},
			testServer: {
				options: {
					port: 8001,
					hostname: '0.0.0.0',
					base: 'deploy',
					keepalive: true,
					open: true,
					debug: true,
					middleware: function(connect, options) {
						var index = '';
						try {
							index = require('fs').readFileSync(options.base + '/index.html');
						} catch (e) {}
						return [
							connect.static(options.base),
							function(req, res, next) {
								res.end(index);
							}
						];
					},
					livereload: false
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

			// tests: {
			// 	files: ['src/scripts/**/*.js', 'test/**/spec.js'],
			// 	tasks: ['mocha'],
			// 	options: {
			// 		atBegin: false
			// 	}
			// },

			pages: {
				files: ['src/pages/**/*.jade'],
				tasks: ['jade:dev']
			},

			templates: {
				files: ['src/templates/**/*.dot'],
				tasks: ['dot']
			},

			styles: {
				files: ['src/styles/**/*.styl'],
				tasks: ['stylus:dev']
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
			},

			dep: {
				options: {
					data: {
						deploy: true,
						version: '<%= pkg.version %>',
						rootDir: '/<%= pkg.name %>'
					}
				},
				files: [{
					expand: true,
					cwd: 'src/pages/',
					src: '**/*.jade',
					dest: 'deploy/',
					ext: '.html',
					filter: 'isFile'
				}]
			},

			test: {
				options: {
					data: {
						deploy: true,
						version: '<%= pkg.version %>',
						rootDir: ''
					}
				},
				files: [{
					expand: true,
					cwd: 'src/pages/',
					src: '**/*.jade',
					dest: 'deploy/',
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
			},

			dep: {
				options: {
					paths: ['src/styles/blocks', 'src/styles/utils'],
					compress: false
				},
				files: [{
					expand: true,
					cwd: 'src/styles/',
					src: ['**/*.styl', '!blocks/**', '!utils/**'],
					dest: 'deploy/css/tmp/',
					ext: '.css',
					filter: 'isFile'
				}]
			}
		},

		dot: {
			dev: {
				options: {
					variable: 'App.templates',
				},
				src: ['src/templates/**/*.dot'],
				dest: 'site/js/templates.js'
			},

			test: {
				options: {
					variable: 'App.templates',
				},
				src: ['src/templates/**/*.dot'],
				dest: 'test/fixtures/templates.js'
			},

			dep: {
				options: {
					variable: 'App.templates',
				},
				src: ['src/templates/**/*.dot'],
				dest: 'deploy/js/tmp/templates.js'
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
			},

			images: {
				expand: true,
				cwd: 'src/images/',
				src: ['**/*.png'],
				dest: 'site/img/',
				filter: 'isFile'
			},

			imagesDep: {
				expand: true,
				cwd: 'src/images/',
				src: ['**/*.png'],
				dest: 'deploy/img/',
				filter: 'isFile'
			},

			scriptsDep: {
				expand: true,
				cwd: 'src/scripts',
				src: ['**/*.js', '!data.js'],
				dest: 'deploy/js/tmp',
				filter: 'isFile'
			},

			bowerDep: {
				expand: true,
				cwd: 'components/',
				src: ['*/*.js', '!chai/**', '!sinonjs/**', '!mocha/**', '!**/index.js', '!*/*min.js', '!jquery/**', '!doT/**'],
				dest: 'deploy/js/tmp/lib/',
				flatten: true,
				filter: 'isFile'
			},
			jqueryDep: {
				files: {
					'deploy/js/jquery.min.js': ['components/jquery/jquery.min.js']
				}
			},

			index404: {
				files: {
					'deploy/404.html': ['deploy/index.html']
				}
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
				src: ['test/spec-runner.html'],
				options: {
					bail: true,
					log: true,
					reporter: 'Spec',
					run: true
				}
			}
		},

		csso: {
			dep: {
				options: {
					report: 'gzip'
				},
				files: {
					'deploy/css/style.css': ['deploy/css/tmp/style.css']
				}
			}
		},

		concat: {
			dist: {
				src: [
					'deploy/js/tmp/lib/underscore.js',
					'deploy/js/tmp/lib/backbone.js',
					'deploy/js/tmp/Models/*.js',
					'deploy/js/tmp/Collections/*.js',
					'deploy/js/tmp/templates.js',
					'deploy/js/tmp/Views/*.js',
					'deploy/js/tmp/router.js',
					'deploy/js/tmp/app.js'
				],
				dest: 'deploy/js/tmp/built.js',
			}
		},

		uglify: {
			dep: {
				options: {
					report: 'min'
				},
				files: {
					'deploy/js/app.min.js': ['deploy/js/tmp/built.js'],
					'deploy/js/data.min.js': ['src/scripts/data.js']
				}
			}
		},

		clean: {
			dep: ["deploy/js/tmp", "deploy/css/tmp"],
		},

		'gh-pages': {
			options: {
				base: 'deploy/'
			},
			src: ['**']
		}

	});

	// grunt.event.on('watch', function(action, filepath, type) {
	// 	// if type ===
	// 	grunt.config.set('copy.scripts.src', filepath.replace('src/scripts/', ''));
	// });




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
	// https://github.com/t32k/grunt-csso
	grunt.loadNpmTasks('grunt-csso');
	// https://github.com/gruntjs/grunt-contrib-concat
	grunt.loadNpmTasks('grunt-contrib-concat');
	// https://github.com/gruntjs/grunt-contrib-uglify
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// https://github.com/gruntjs/grunt-contrib-clean
	grunt.loadNpmTasks('grunt-contrib-clean');
	// https://github.com/tschaub/grunt-gh-pages
	grunt.loadNpmTasks('grunt-gh-pages');



	grunt.registerTask('default', ['copy:bower', 'concurrent:dev']);
	grunt.registerTask('devserver', ['connect:server']);
	grunt.registerTask('test', ['mocha']);
	grunt.registerTask('build', [
		'jade:dep',
		'dot:dep',
		'stylus:dep',
		'csso',
		'copy:scriptsDep',
		'copy:imagesDep',
		'copy:bowerDep',
		'copy:jqueryDep',
		'copy:index404',
		'concat',
		'uglify',
		'clean'
	]);
	grunt.registerTask('testserver', ['jade:test', 'connect:testServer']);
	grunt.registerTask('deploy', ['jade:dep', 'gh-pages']);


	


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