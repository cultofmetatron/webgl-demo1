var glTools = require('../shared/gltools.js');

var gl = glTools.initWebGL($('canvas#canvasable')[0]);

gl.clearColor(0.5, 0.8, 0.2, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

var fs = require('fs');

glTools.getShaders('vshader', 'fshader')
  .spread(function(vshaderS, fshaderS) {
    console.log(vshaderS);
    console.log(fshaderS);
  });


/*
($.ajax(
    '/shaders/' + 'vshader' + '.js',
    {
    method: 'GET',
    dataType: 'text',
  })).done(function() { 
    console.log(arguments);
  });
*/
