var glTools = require('../shared/gltools.js');

glTools.getShaders('vshader', 'fshader')
  .spread(function(vshaderS, fshaderS) {
    return {
      vshader: vshaderS,
      fshader: fshaderS
    };
  }).then(draw);


function draw(options) {
  var gl = glTools.initWebGL($('canvas#canvasable')[0]);
  if (!glTools.initShaders(gl, options.vshader, options.fshader)) {
    console.error('failed to iitialize shader');
    return null;
  }
  
  gl.clearColor(0.5, 0.8, 0.2, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  //draw a point
  gl.drawArrays(gl.POINTS, 0, 1);
  //gl.drawArrays(gl.POINTS, 1, 0);

}

