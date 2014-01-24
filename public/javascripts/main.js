(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var glTools = require('../shared/gltools.js');

var gl = glTools.initWebGL($('canvas#canvasable')[0]);

gl.clearColor(0.5, 0.8, 0.2, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

var fs = require('fs');

var vshaderP = glTools.getShader('vshader');
var fshaderP = glTools.getShader('fshader');
Promise.all([vshaderP, fshaderP]).spread(function(vshaderS, fshaderS) {
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

},{"../shared/gltools.js":4,"fs":5}],2:[function(require,module,exports){
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

module.exports.getShader = getShader;







},{}],5:[function(require,module,exports){

},{}]},{},[3,4,1,2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL3dlYmdsL3dlYmdsLWJhc2ljcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy93ZWJnbC93ZWJnbC1iYXNpY3MvYXNzZXRzL3NjcmlwdHMvbWFpbi9tYWluLmpzIiwiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy93ZWJnbC93ZWJnbC1iYXNpY3MvYXNzZXRzL3NjcmlwdHMvbWFpbi93ZWJnbG9iamVjdC5qcyIsIi9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvd2ViZ2wvd2ViZ2wtYmFzaWNzL2Fzc2V0cy9zY3JpcHRzL3NoYXJlZC9hcHAuanMiLCIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL3dlYmdsL3dlYmdsLWJhc2ljcy9hc3NldHMvc2NyaXB0cy9zaGFyZWQvZ2x0b29scy5qcyIsIi9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvd2ViZ2wvd2ViZ2wtYmFzaWNzL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBnbFRvb2xzID0gcmVxdWlyZSgnLi4vc2hhcmVkL2dsdG9vbHMuanMnKTtcblxudmFyIGdsID0gZ2xUb29scy5pbml0V2ViR0woJCgnY2FudmFzI2NhbnZhc2FibGUnKVswXSk7XG5cbmdsLmNsZWFyQ29sb3IoMC41LCAwLjgsIDAuMiwgMS4wKTtcbmdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG52YXIgdnNoYWRlclAgPSBnbFRvb2xzLmdldFNoYWRlcigndnNoYWRlcicpO1xudmFyIGZzaGFkZXJQID0gZ2xUb29scy5nZXRTaGFkZXIoJ2ZzaGFkZXInKTtcblByb21pc2UuYWxsKFt2c2hhZGVyUCwgZnNoYWRlclBdKS5zcHJlYWQoZnVuY3Rpb24odnNoYWRlclMsIGZzaGFkZXJTKSB7XG4gIGNvbnNvbGUubG9nKHZzaGFkZXJTKTtcbiAgY29uc29sZS5sb2coZnNoYWRlclMpO1xuXG59KTtcblxuXG4vKlxuKCQuYWpheChcbiAgICAnL3NoYWRlcnMvJyArICd2c2hhZGVyJyArICcuanMnLFxuICAgIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGRhdGFUeXBlOiAndGV4dCcsXG4gIH0pKS5kb25lKGZ1bmN0aW9uKCkgeyBcbiAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICB9KTtcbiovXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xufTtcbiIsInZhciBpbml0V2ViR0wgPSBmdW5jdGlvbihjYW52YXMpIHtcbiAgZ2wgPSBudWxsO1xuICB0cnkge1xuICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCd5b3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB3ZWJnbCcpO1xuICB9XG5cbiAgaWYgKCFnbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Jyb3dzZXIgZG9lc24gbm90IHN1cHBvcnQgd2ViZ2wgZGF3ZycpO1xuICAgIGdsID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBnbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmluaXRXZWJHTCA9IGluaXRXZWJHTDtcblxuXG52YXIgZ2V0U2hhZGVyID0gZnVuY3Rpb24oc2hhZGVyTmFtZSkge1xuICByZXR1cm4gUHJvbWlzZS5jYXN0KCQuYWpheChcbiAgICAnL3NoYWRlcnMvJyArIHNoYWRlck5hbWUgKyAnLmpzJyxcbiAgICB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBkYXRhVHlwZTogJ3RleHQnLFxuICB9KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5nZXRTaGFkZXIgPSBnZXRTaGFkZXI7XG5cblxuXG5cblxuXG4iLG51bGxdfQ==
