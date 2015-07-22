module.exports = function(grunt) {
    var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt-tasks');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    gtx.alias('build', ['clean:dist', 'copy:theme', 'compile-css']);
    gtx.alias('compile-css', [
		
         'sass:style', 
        'autoprefix-css'
    ]);
    gtx.alias('autoprefix-css', ['autoprefixer:style' ]);

    gtx.finalise();
}