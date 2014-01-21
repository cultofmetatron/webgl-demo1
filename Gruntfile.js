module.exports = function(grunt) {

  var conf = {};
  conf.pkg = grunt.file.readJSON('package.json');

  conf.browserify = {
    files: {
      'public/javascripts/build.js': [
        //files to be added for browserify
        'assets/scripts/*.js',
        'assets/scripts/**/*.js'
      ]
    }
  };
  conf.concat = {
    options: {
      separator: ';',
    },
    dist: {
      src: [
        
      ],
      dest: 'public/javascripts/dependencies.js',
    },
  };


  grunt.initConfig(conf);

  


  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'browserify' ]);


};
