module.exports = function (grunt) {
   
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-phonegap-build');
    
    grunt.initConfig({
        'phonegap-build' : {
                options: {
                    archive: 'app.zip',
                    'appId': 'someid',
                    'user': {
                        'email': 'somemail@gmail.com',
                        'password': 'somepassword$'
                    },
                    download: {
                        android: 'releases/android.apk',
                        winphone: 'releases/winphone.xap'
                    },
                },
                debug: {

                }
        },
        'compress' : {
            main: {
                options: {
                    archive: 'app.zip'
                },
                expand: true,
                cwd: 'www/',
                src: ['*.html', 'css/**/*.css', 'js/**/*.js', 'config.xml', 'img/**/*'],
            }    
        }
    });

    grunt.registerTask('build', [
        'compress',
        'phonegap-build:debug'
    ]);
};