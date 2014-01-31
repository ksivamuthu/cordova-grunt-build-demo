module.exports = function (grunt) {
   
    /**
     * Load npm tasks to grunt
     */
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-phonegap-build');
    grunt.loadNpmTasks('grunt-testflight');

    /**
     * grunt init configs
     * @type {Object}
     */
    grunt.initConfig({
        /**
         * Phonegap builds
         */
        'phonegap-build' : {
                options: {
                    archive: 'app.zip',
                    'appId': 'someid',
                    'user': {
                        'email': 'somemail@gmail.com',
                        'password': 'somepassword$'
                    },
                    download: {
                        ios: 'releases/ios.ipa',
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
                  apiToken: 'apitoken',
                  teamToken: 'teamtoken',
                  notes: 'Testflight notes'
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
        'testflight'
    ]);
};