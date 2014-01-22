module.exports = function(grunt) {
  var path = require('path');
  var BOWER_PATH = path.join(__dirname, 'public', 'bowerfiles');

  var conf = {};
  conf.pkg = grunt.file.readJSON('package.json');

  var builderify = function(file) {
    return [
      //files to be added for browserify
      'assets/scripts/shared/*.js',
      'assets/scripts/shared/**/*.js',
      'assets/scripts/' + file + '/*.js',
      'assets/scripts/' + file + '/**/*.js'
    ];
  };
  conf.browserify = {
    dist: {
      files: {
        //each key can be a diffrent build file
        'public/javascripts/main.js': builderify('main')
      },
      options: {
        debug: true,
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
  conf.copy = {
    main: {
      files: [
        // copies all files from bootstrap-stylus/fonts in public
        {
          expand: true,
          cwd: path.join(BOWER_PATH, 'bootstrap-stylus', 'fonts') ,
          src: ['*'],
          //src: [ 'public/bowerfiles/bootstrap-stylus/fonts/*'],
          dest: 'public/fonts/',
        }
      ]
    }
  };


  grunt.initConfig(conf);

  

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['concat', 'browserify' ]);


};
