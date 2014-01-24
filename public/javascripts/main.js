(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var glTools = require('../shared/gltools.js');

var gl = glTools.initWebGL($('canvas#canvasable')[0]);

gl.clearColor(0.5, 0.8, 0.2, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);



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

},{}]},{},[3,4,1,2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL3dlYmdsL3dlYmdsLWJhc2ljcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy93ZWJnbC93ZWJnbC1iYXNpY3MvYXNzZXRzL3NjcmlwdHMvbWFpbi9tYWluLmpzIiwiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy93ZWJnbC93ZWJnbC1iYXNpY3MvYXNzZXRzL3NjcmlwdHMvbWFpbi93ZWJnbG9iamVjdC5qcyIsIi9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvd2ViZ2wvd2ViZ2wtYmFzaWNzL2Fzc2V0cy9zY3JpcHRzL3NoYXJlZC9hcHAuanMiLCIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL3dlYmdsL3dlYmdsLWJhc2ljcy9hc3NldHMvc2NyaXB0cy9zaGFyZWQvZ2x0b29scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGdsVG9vbHMgPSByZXF1aXJlKCcuLi9zaGFyZWQvZ2x0b29scy5qcycpO1xuXG52YXIgZ2wgPSBnbFRvb2xzLmluaXRXZWJHTCgkKCdjYW52YXMjY2FudmFzYWJsZScpWzBdKTtcblxuZ2wuY2xlYXJDb2xvcigwLjUsIDAuOCwgMC4yLCAxLjApO1xuZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKTtcbn07XG4iLCJ2YXIgaW5pdFdlYkdMID0gZnVuY3Rpb24oY2FudmFzKSB7XG4gIGdsID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybigneW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgd2ViZ2wnKTtcbiAgfVxuXG4gIGlmICghZ2wpIHtcbiAgICBjb25zb2xlLmVycm9yKCdicm93c2VyIGRvZXNuIG5vdCBzdXBwb3J0IHdlYmdsIGRhd2cnKTtcbiAgICBnbCA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZ2w7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5pbml0V2ViR0wgPSBpbml0V2ViR0w7XG4iXX0=
