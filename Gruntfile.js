module.exports = function (grunt) {
   
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-phonegap-build');
    
     var yeomanConfig = {
        app: 'www',
        dist: 'dist'
    };

    var phonegapBuildConfig = {
        debug: {
            options: {
                archive: 'app.zip',
                'appId': 'XXXXXX',
                'user': {
                    'email': 'myemail@server.com',
                    'password': 'password1234'
                },
                keys: {
                    //ios: { 'password': password1234' },
                    android: { 'key_pw': 'password1234', 'keystore_pw': 'password1234' },
                    blackberry: { 'password': 'password1234'}
                },
                download: {
                    ios: 'dist/ios.ipa',
                    android: 'dist/android.apk',
                    blackberry: 'dist/blackberry.ota',
                    winphone: 'dist/winphone.xap'
                }
            }
        }};

    var compressConfig = {
        main: {
            options: {
                archive: 'app.zip'
            },
            expand: true,
            cwd: 'www/',
            src: ['*.html', 'css/**/*.css', 'js/**/*.js', 'config.xml', 'img/**/*'],
        }
    };

    grunt.initConfig({
        'phonegap-build': phonegapBuildConfig,
        compress: compressConfig
    });

    grunt.registerTask('remote_build', [
        'compress',
        'phonegap-build:debug'
    ]);
};