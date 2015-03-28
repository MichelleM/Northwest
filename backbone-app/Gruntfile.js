/*globals module:false*/
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        compass: {
            deploy: {
                options: {
                    quiet: true,
                    cssDir: './src/css',
                    config: './config.rb'
                }
            },
            dev: {
                options: {
                    cssDir: './src/css',
                    config: './config.rb',
                    outputStyle: 'expanded',
                    debugInfo: true,
                    noLineComments: true
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'src/js/**/*.js',
                'src/tests/**/*.js',
                'Gruntfile.js'
            ]
        },

        watch: {
            scripts: {
                files: ['./src/js/**/*.js', './src/tests/**/*.js'],
                tasks: ['jshint']
            },
            compass: {
                files: ['./src/sass/**/*.scss'],
                tasks: ['compass:dev']
            }
        },

        requirejs: {
            deploy: {
                options: {
                    appDir: './src',
                    mainConfigFile: './src/js/main.js',
                    dir: './public',
                    fileExclusionRegExp: /(^\.)|(^sass$)|(^tests$)/,
                    optimize: 'uglify2',
                    removeCombined: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('dev', ['jshint', 'compass:dev']);
    grunt.registerTask('deploy', ['jshint', 'compass:deploy', 'requirejs:deploy']);

    grunt.registerTask('default', ['dev']);
};
