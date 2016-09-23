module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                options: {
                    sourceMap: true
//                    , drop_console: true //for deployment: discard calls to console.* functions
                },
                files: {
                    '../assets/js/main.min.js':
                    [
                        'assets/js/functions.js',
                        'assets/js/ready.js'
                    ]
                }
            }
        },
        jshint: {
            // define the files to lint
            files: ['js/**/*.js'],
            options: {
				ignores: ['../assets/js/main.min.js'],
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        sass: {
            options: {
                outputStyle: 'compressed',
                sourceMap: true
            },
            dist: {
                files: {
                    '../assets/css/main.min.css': 'assets/sass/main.scss' //target: source
                }
            }
        },
        watch: {
            css: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['<%= jshint.files %>', '!../assets/js/main.min.js'],
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                // We use this target to watch files that will trigger the livereload
                files: [
                    // Anytime css is edited or compiled by sass, trigger the livereload on those files
                    '../assets/css/*.css',
                    // Or a js file
                    '../assets/js/*.js'
                ],
                options: { livereload: true }
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['jshint', 'uglify', 'sass']);
};