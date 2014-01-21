module.exports = function(grunt) {
  var path = require('path');
  var BOWER_PATH = path.join(__dirname, 'public', 'bowerfiles');

  var conf = {};
  conf.pkg = grunt.file.readJSON('package.json');

  conf.browserify = {
    dist: {
      files: {
        'public/javascripts/build.js': [
          //files to be added for browserify
          'assets/scripts/*.js',
          'assets/scripts/**/*.js'
        ]
      },
      options: {
        debug: true
      }
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
  conf.stylus = {
    compile: {
      files: {
        'public/stylesheets/bootstrap.css':path.join(BOWER_PATH, 'bootstrap-stylus', 'stylus', 'bootstrap.styl')
      }
    }
  };


  grunt.initConfig(conf);

  

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'browserify' ]);


};
