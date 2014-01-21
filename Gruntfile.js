module.exports = function(grunt) {

  var conf = {};
  conf.pkg = grunt.file.readJSON('package.json');
  conf.browserify = {
    files: {
      'application.js': [
        
      ]
    },
    options : {}
  };


  grunt.initConfig(configs);

  


  grunt.loadNpmTasks('grunt-browserify');




};
