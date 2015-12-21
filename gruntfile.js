module.exports = function(grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ['src/sass/app.scss','src/sass/**/*.scss'],
				tasks: ['sass:dist']
			},
			livereload: {
				files: ['dist/*.html', 'src/js/*.js', 'dist/css/*.css','dist/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			},
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			images:{
				files: ['src/img/**/*.{png,jpg,gif}'],
				tasks:['newer:imagemin'],
				options: {
					spawn: false,
				},
			},
		},
		sass: {
			options: {
				sourceMap: false,
				//outputStyle: 'compressed'
				outputStyle: 'compact'
			},
			dist: {
				files: {
					'dist/css/app.css': 'src/sass/app.scss'
				}
			}
		},
		concat: {
			dist: {
				src: [
					'src/js/plugins.js',
					'src/js/main.js'
				],
				dest: 'dist/js/app.js',
			}
		},
		uglify: {
			build: {
				src: 'dist/js/app.js',
				dest: 'dist/js/app.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/img/'
				}]
			}
		},
		concurrent: {
			target1: ['newer:sass:dist', 'newer:concat'],
			target2: ['newer:uglify', 'newer:imagemin']
		}
	});
	grunt.registerTask('default', ['concurrent:target1', 'concurrent:target2', 'watch']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
};
