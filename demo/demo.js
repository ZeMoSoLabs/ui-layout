'use strict';

angular.module('x', ['ui.layout']);

angular.module('x').directive('simple', function () {
  return {
    restrict: 'EA',
    scope: {},
    link: function (scope, element) {
      element.append('...');
      scope.$on('split.resize', function() {
        console.log('I got resized');
      });
    }
  };

});

