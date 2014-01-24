var initWebGL = function(canvas) {
  gl = null;
  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (e) {
    console.warn('your browser does not support webgl');
  }

  if (!gl) {
    console.error('browser doesn not support webgl dawg');
    gl = null;
  }

  return gl;
};

module.exports.initWebGL = initWebGL;


var getShader = function(shaderName) {
  return Promise.cast($.ajax(
    '/shaders/' + shaderName + '.js',
    {
    method: 'GET',
    dataType: 'text',
  }));
};
var getShaders = function() {
  var shaders = Array.prototype.slice.call(arguments);
  var shadersP = shaders.map(function(shader) {
    return getShader(shader);
  });
  return Promise.all(shadersP);
};

module.exports.getShader  = getShader;
module.exports.getShaders = getShaders;





