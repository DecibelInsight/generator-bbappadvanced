module.exports = function(grunt) {

    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: {
                src: ["dist/"]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['public/*'], dest: 'dist/', filter: 'isFile'},
                ]
            },
        },
        requirejs: {
            mainJS: {
                options: {
                    baseUrl: "public/js/app",
                    almond : true,
                    wrap: true,
                    preserveLicenseComments: false,
                    optimize: "none",
                    mainConfigFile: "public/js/app/Config/<%= _.slugify(appName) %>.init.js",
                    paths : {
                        '<%= _.slugify(appName) %>' : 'Config/<%= _.slugify(appName) %>.init'
                    },
                    include: ["<%= _.slugify(appName) %>"],
                    out: "dist/js/<%= _.slugify(appName) %>.js",
                    replaceRequireScript: [
                        {
                            files: ['dist/index.html'],
                            module: '<%= _.slugify(appName) %>',
                            modulePath: 'js/<%= _.slugify(appName) %>'
                        }
                    ]
                }
            },
            // mainCSS: {
            //     options: {
            //         optimizeCss: 'standard',
            //         cssIn: './public/css/app.css',
            //         out: './public/css/app.min.css'
            //     }
            // }
        },
        jshint: {
            files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: false,
                    module: true,
                    document: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', 'requirejs');
    grunt.registerTask('default', ['test', 'clean', 'copy', 'build']);

};