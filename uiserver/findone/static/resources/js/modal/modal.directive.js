(function() {
  
  'use strict';
  
  angular
    .module('modal.showing')
    .directive('showModal', showModal);
  
  ShowModalController.$inject = ['$scope'];
  
  function ShowModalController($scope) {
    var vm = this;
  }
  
  showModal.$inject = ['$log'];
  
  function showModal($log) {
    var directive = {
      'restrict': 'E',
      'templateUrl': 'static/resources/js/modal/modal.directive.html',
      'scope': {
        'imageUrl': '@',
        'description': '@'
      },
      'link': link,
      'controller': ShowModalController,
      'controllerAs': 'vm',
      'bindToController': true
    };
    return directive;
    
    function link (scope, element, attrs, ctrl) {
      var modal = element.find('#myModal');
      
      scope.$on('modalContent', function(e, val) {
        if (val) {
          ctrl.imageUrl = val.imageUrl;
          ctrl.description = val.description;
          ctrl.price = val.price;
          modal.modal('show');
        }
      });
    }
  }
  
})();