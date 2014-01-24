(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
var getShaders = function() {
  var shaders = Array.prototype.slice.call(arguments);
  var shadersP = shaders.map(function(shader) {
    return getShader(shader);
  });
  return Promise.all(shadersP);
};

module.exports.getShader  = getShader;
module.exports.getShaders = getShaders;






},{}],5:[function(require,module,exports){

},{}]},{},[3,4,1,2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL3dlYmdsL3dlYmdsLWJhc2ljcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy93ZWJnbC93ZWJnbC1iYXNpY3MvYXNzZXRzL3NjcmlwdHMvbWFpbi9tYWluLmpzIiwiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy93ZWJnbC93ZWJnbC1iYXNpY3MvYXNzZXRzL3NjcmlwdHMvbWFpbi93ZWJnbG9iamVjdC5qcyIsIi9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvd2ViZ2wvd2ViZ2wtYmFzaWNzL2Fzc2V0cy9zY3JpcHRzL3NoYXJlZC9hcHAuanMiLCIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL3dlYmdsL3dlYmdsLWJhc2ljcy9hc3NldHMvc2NyaXB0cy9zaGFyZWQvZ2x0b29scy5qcyIsIi9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvd2ViZ2wvd2ViZ2wtYmFzaWNzL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZ2xUb29scyA9IHJlcXVpcmUoJy4uL3NoYXJlZC9nbHRvb2xzLmpzJyk7XG5cbnZhciBnbCA9IGdsVG9vbHMuaW5pdFdlYkdMKCQoJ2NhbnZhcyNjYW52YXNhYmxlJylbMF0pO1xuXG5nbC5jbGVhckNvbG9yKDAuNSwgMC44LCAwLjIsIDEuMCk7XG5nbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcblxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuZ2xUb29scy5nZXRTaGFkZXJzKCd2c2hhZGVyJywgJ2ZzaGFkZXInKVxuICAuc3ByZWFkKGZ1bmN0aW9uKHZzaGFkZXJTLCBmc2hhZGVyUykge1xuICAgIGNvbnNvbGUubG9nKHZzaGFkZXJTKTtcbiAgICBjb25zb2xlLmxvZyhmc2hhZGVyUyk7XG4gIH0pO1xuXG5cbi8qXG4oJC5hamF4KFxuICAgICcvc2hhZGVycy8nICsgJ3ZzaGFkZXInICsgJy5qcycsXG4gICAge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgZGF0YVR5cGU6ICd0ZXh0JyxcbiAgfSkpLmRvbmUoZnVuY3Rpb24oKSB7IFxuICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG4gIH0pO1xuKi9cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XG59O1xuIiwidmFyIGluaXRXZWJHTCA9IGZ1bmN0aW9uKGNhbnZhcykge1xuICBnbCA9IG51bGw7XG4gIHRyeSB7XG4gICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ3lvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHdlYmdsJyk7XG4gIH1cblxuICBpZiAoIWdsKSB7XG4gICAgY29uc29sZS5lcnJvcignYnJvd3NlciBkb2VzbiBub3Qgc3VwcG9ydCB3ZWJnbCBkYXdnJyk7XG4gICAgZ2wgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGdsO1xufTtcblxubW9kdWxlLmV4cG9ydHMuaW5pdFdlYkdMID0gaW5pdFdlYkdMO1xuXG5cbnZhciBnZXRTaGFkZXIgPSBmdW5jdGlvbihzaGFkZXJOYW1lKSB7XG4gIHJldHVybiBQcm9taXNlLmNhc3QoJC5hamF4KFxuICAgICcvc2hhZGVycy8nICsgc2hhZGVyTmFtZSArICcuanMnLFxuICAgIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGRhdGFUeXBlOiAndGV4dCcsXG4gIH0pKTtcbn07XG52YXIgZ2V0U2hhZGVycyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2hhZGVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gIHZhciBzaGFkZXJzUCA9IHNoYWRlcnMubWFwKGZ1bmN0aW9uKHNoYWRlcikge1xuICAgIHJldHVybiBnZXRTaGFkZXIoc2hhZGVyKTtcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLmFsbChzaGFkZXJzUCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5nZXRTaGFkZXIgID0gZ2V0U2hhZGVyO1xubW9kdWxlLmV4cG9ydHMuZ2V0U2hhZGVycyA9IGdldFNoYWRlcnM7XG5cblxuXG5cblxuIixudWxsXX0=
