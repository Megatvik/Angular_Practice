module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        // read in the project settings from the package.json file into the pkg property
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                //src: ['app/app.module.js', 'app/Services/PhoneService.js', 'app/Controllers/PhoneController.js', 'app/Directives/mainMenu.js', 'app/Directives/mainContent.js', 'app/Directives/addNew.js'],
                src: ['app/**/*.js'],
                dest: 'app/combined/phoneCombined.js'
            }
        },
        copy: {
            main: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: ['app/combined/*.js', 'Content/*.css'],
                dest: 'public/dist/'
            }
        },
        clean: ["app/combined/"]
    });

    //Add all plugins that your project needs here
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['concat:dist', 'copy:main', 'clean']);
};

