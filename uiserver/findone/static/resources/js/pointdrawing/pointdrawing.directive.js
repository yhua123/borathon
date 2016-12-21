(function() {
  
  'use strict';
  
  angular
    .module('point.drawing')
    .directive('drawPoint', drawPoint);
    
  DrawPointController.$inject = ['$scope', '$log'];
  
  function DrawPointController($scope, $log) {
    var vm = this;
  }
  
  drawPoint.$inject = ['$log', 'locationMapping'];
  
  function drawPoint($log, locationMapping) {
    var directive = {
      'restrict': 'E',
      'templateUrl': 'static/resources/js/pointdrawing/pointdrawing.directive.html',
      'scope': {
        'posId': '@',
        'type': '@',
        'posX': '@',
        'posY': '@',
        'showDialog': '&',
        'visible': '@'
      },
      'link': link,
      'controller': DrawPointController,
      'controllerAs': 'vm',
      'bindToController': true
    };
    return directive;
    
    function link(scope, element, attrs, ctrl) {
      scope.$watch('vm.posX', function (current) {
        if (current) {
          ctrl.myStyle.left = current + 'px';
        }
      });
      
      scope.$watch('vm.posY', function(current) {
        if (current) {
          ctrl.myStyle.top = current + 'px';
        }
      });
      
      ctrl.type = ctrl.type.toUpperCase();
      if(ctrl.type === 'SELF') {
        ctrl.myStyle = { 
          'background-image': "url('static/resources/img/pointing.gif')",
          'width': '40px',
          'height': '40px',
          'background-size' : '40px 40px',
        }; 
      }else if(ctrl.type === 'ITEM') {
        ctrl.myStyle = {
          'background-color': 'green',
          'width' : '10px',
          'height': '10px'
        };
      } 
      $log.debug('vm.myStyle=' + ctrl.myStyle);
    }
  }
  
})();