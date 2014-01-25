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

var loadShader = function(gl, type, source) {
  var shader = gl.createShader(type);
  if (shader === null) {
    console.error('unable to create shader');
    return null;
  }
  //set the shader program
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    var error = gl.getShaderInfoLog(shader);
    console.error('failed to compile shader :' + error);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

var createProgram = function(gl, vshader, fshader) {
  //create the shader object
  var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
  if (!vertexShader || !fragmentShader) { return null; }

  //create a program object
  var program = gl.createProgram();
  if (!program) {
    return null;
  }
  
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  //link the program object to gl
  gl.linkProgram(program);

  //verify linking
  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    var error = gl.getProgramInfoLog(program);
    console.error('FAiled to link program' + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
  }
  return program;
};

var initShaders = function(gl, vshader, fshader) {
  var program = createProgram(gl, vshader, fshader);
  if (!program) {
    console.log('failed to create the program');
    return false;
  }
  gl.useProgram(program);
  gl.program = program;
  return true;
};
module.exports.initShaders = initShaders;


