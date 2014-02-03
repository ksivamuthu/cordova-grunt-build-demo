module.exports = function (grunt) {
   
    /**
     * Load npm tasks to grunt
     */
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-phonegap-build');
    grunt.loadNpmTasks('grunt-testflight');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    /**
     * grunt init configs
     * @type {Object}
     */
    grunt.initConfig({

        clean: {
            app: [
              'www/**'
            ]
        },

        copy : {
          html: {
              files: [{
                expand: true,
                flatten: true,
                src: 'src/modules/**/html/*.html',
                dest: 'www/'
              },
              {
                  src: 'src/index.html',
                  dest: 'www/index.html'
              }
            ]
          },
          js: {
             files: [{
                expand: true,
                flatten: true,
                src: 'src/modules/**/js/*.js',
                dest: 'www/js/'
            }]
          },
          img: {
             files: [{
                expand: true,
                flatten: true,
                src: 'src/modules/**/img/**',
                dest: 'www/img/'
            }]
          },
          css: {
             files: [{
                expand: true,
                flatten: true,
                src: 'src/modules/**/css/*.css',
                dest: 'www/css/'
            }]
          },
          config: {
            files: [{
                expand: true,
                flatten: true,
                src: 'src/config.xml',
                dest: 'www/'
            }]
          }
        },

        /**
         * Phonegap builds
         */
        'phonegap-build' : {
                options: {
                    archive: 'app.zip',
                    'appId': '758938',
                    'user': {
                        'email': 'soememail@gmail.com',
                        'password': 'sdfasdf$'
                    },
                    download: {
                        android: 'releases/android.apk',
                        winphone: 'releases/winphone.xap'
                    },
                },
                debug: {

                }
        },
        /**
         * Compress for phonegap build
         */
        'compress' : {
            main: {
                options: {
                    archive: 'app.zip'
                },
                expand: true,
                cwd: 'www/',
                src: [
                    '*.html',
                    'css/**/*.css',
                    'js/**/*.js',
                    'config.xml',
                    'img/**/*'
                ],
            }    
        },

        /**
         * Test flight settings
         */
        'testflight': {
            options: {
                  apiToken: 'asdf',
                  teamToken: 'dsaf',
                  notes: 'Testflight notes before prem'
            },
            iOS: {
              options: {
                file: 'releases/ios.ipa'
              }
            },
            android: {
              options: {
                file: 'releases/android.apk'
              }
            }
        }
    });
    

    /**
     * grunt build - will compress the www folder, upload to phonegap build
     *               download app files, and upload to testflight successfully
     */
    grunt.registerTask('build', [
        'compress',
        'phonegap-build:debug',
        'testflight:android'
    ]);
};