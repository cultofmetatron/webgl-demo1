(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"../shared/gltools.js":4}],2:[function(require,module,exports){
module.exports = function() {


}

},{}],3:[function(require,module,exports){
module.exports = function() {
  console.log('hello world');
};

},{}],4:[function(require,module,exports){
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



},{}]},{},[3,4,1,2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL3dlYmdsL3dlYmdsLWJhc2ljcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy93ZWJnbC93ZWJnbC1iYXNpY3MvYXNzZXRzL3NjcmlwdHMvbWFpbi9tYWluLmpzIiwiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy93ZWJnbC93ZWJnbC1iYXNpY3MvYXNzZXRzL3NjcmlwdHMvbWFpbi93ZWJnbG9iamVjdC5qcyIsIi9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvd2ViZ2wvd2ViZ2wtYmFzaWNzL2Fzc2V0cy9zY3JpcHRzL3NoYXJlZC9hcHAuanMiLCIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL3dlYmdsL3dlYmdsLWJhc2ljcy9hc3NldHMvc2NyaXB0cy9zaGFyZWQvZ2x0b29scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZ2xUb29scyA9IHJlcXVpcmUoJy4uL3NoYXJlZC9nbHRvb2xzLmpzJyk7XG5cbmdsVG9vbHMuZ2V0U2hhZGVycygndnNoYWRlcicsICdmc2hhZGVyJylcbiAgLnNwcmVhZChmdW5jdGlvbih2c2hhZGVyUywgZnNoYWRlclMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdnNoYWRlcjogdnNoYWRlclMsXG4gICAgICBmc2hhZGVyOiBmc2hhZGVyU1xuICAgIH07XG4gIH0pLnRoZW4oZHJhdyk7XG5cblxuZnVuY3Rpb24gZHJhdyhvcHRpb25zKSB7XG4gIHZhciBnbCA9IGdsVG9vbHMuaW5pdFdlYkdMKCQoJ2NhbnZhcyNjYW52YXNhYmxlJylbMF0pO1xuICBpZiAoIWdsVG9vbHMuaW5pdFNoYWRlcnMoZ2wsIG9wdGlvbnMudnNoYWRlciwgb3B0aW9ucy5mc2hhZGVyKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWxlZCB0byBpaXRpYWxpemUgc2hhZGVyJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIGdsLmNsZWFyQ29sb3IoMC41LCAwLjgsIDAuMiwgMS4wKTtcbiAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cbiAgLy9kcmF3IGEgcG9pbnRcbiAgZ2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsIDAsIDEpO1xuICAvL2dsLmRyYXdBcnJheXMoZ2wuUE9JTlRTLCAxLCAwKTtcblxufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xufTtcbiIsInZhciBpbml0V2ViR0wgPSBmdW5jdGlvbihjYW52YXMpIHtcbiAgZ2wgPSBudWxsO1xuICB0cnkge1xuICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCd5b3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB3ZWJnbCcpO1xuICB9XG5cbiAgaWYgKCFnbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Jyb3dzZXIgZG9lc24gbm90IHN1cHBvcnQgd2ViZ2wgZGF3ZycpO1xuICAgIGdsID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBnbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmluaXRXZWJHTCA9IGluaXRXZWJHTDtcblxuXG52YXIgZ2V0U2hhZGVyID0gZnVuY3Rpb24oc2hhZGVyTmFtZSkge1xuICByZXR1cm4gUHJvbWlzZS5jYXN0KCQuYWpheChcbiAgICAnL3NoYWRlcnMvJyArIHNoYWRlck5hbWUgKyAnLmpzJyxcbiAgICB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBkYXRhVHlwZTogJ3RleHQnLFxuICB9KSk7XG59O1xudmFyIGdldFNoYWRlcnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNoYWRlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICB2YXIgc2hhZGVyc1AgPSBzaGFkZXJzLm1hcChmdW5jdGlvbihzaGFkZXIpIHtcbiAgICByZXR1cm4gZ2V0U2hhZGVyKHNoYWRlcik7XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5hbGwoc2hhZGVyc1ApO1xufTtcblxubW9kdWxlLmV4cG9ydHMuZ2V0U2hhZGVyICA9IGdldFNoYWRlcjtcbm1vZHVsZS5leHBvcnRzLmdldFNoYWRlcnMgPSBnZXRTaGFkZXJzO1xuXG52YXIgbG9hZFNoYWRlciA9IGZ1bmN0aW9uKGdsLCB0eXBlLCBzb3VyY2UpIHtcbiAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgaWYgKHNoYWRlciA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgc2hhZGVyJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy9zZXQgdGhlIHNoYWRlciBwcm9ncmFtXG4gIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICB2YXIgY29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XG4gIGlmICghY29tcGlsZWQpIHtcbiAgICB2YXIgZXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG4gICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGNvbXBpbGUgc2hhZGVyIDonICsgZXJyb3IpO1xuICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBzaGFkZXI7XG59O1xuXG52YXIgY3JlYXRlUHJvZ3JhbSA9IGZ1bmN0aW9uKGdsLCB2c2hhZGVyLCBmc2hhZGVyKSB7XG4gIC8vY3JlYXRlIHRoZSBzaGFkZXIgb2JqZWN0XG4gIHZhciB2ZXJ0ZXhTaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2c2hhZGVyKTtcbiAgdmFyIGZyYWdtZW50U2hhZGVyID0gbG9hZFNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmc2hhZGVyKTtcbiAgaWYgKCF2ZXJ0ZXhTaGFkZXIgfHwgIWZyYWdtZW50U2hhZGVyKSB7IHJldHVybiBudWxsOyB9XG5cbiAgLy9jcmVhdGUgYSBwcm9ncmFtIG9iamVjdFxuICB2YXIgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgaWYgKCFwcm9ncmFtKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuXG4gIC8vbGluayB0aGUgcHJvZ3JhbSBvYmplY3QgdG8gZ2xcbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgLy92ZXJpZnkgbGlua2luZ1xuICB2YXIgbGlua2VkID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gIGlmICghbGlua2VkKSB7XG4gICAgdmFyIGVycm9yID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XG4gICAgY29uc29sZS5lcnJvcignRkFpbGVkIHRvIGxpbmsgcHJvZ3JhbScgKyBlcnJvcik7XG4gICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBnbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xuICAgIGdsLmRlbGV0ZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBwcm9ncmFtO1xufTtcblxudmFyIGluaXRTaGFkZXJzID0gZnVuY3Rpb24oZ2wsIHZzaGFkZXIsIGZzaGFkZXIpIHtcbiAgdmFyIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCB2c2hhZGVyLCBmc2hhZGVyKTtcbiAgaWYgKCFwcm9ncmFtKSB7XG4gICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBjcmVhdGUgdGhlIHByb2dyYW0nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgZ2wucHJvZ3JhbSA9IHByb2dyYW07XG4gIHJldHVybiB0cnVlO1xufTtcbm1vZHVsZS5leHBvcnRzLmluaXRTaGFkZXJzID0gaW5pdFNoYWRlcnM7XG5cblxuIl19
