(function() {
  
  'use strict';
  
  angular
    .module('find.one.app')
    .controller('ReactingController', ReactingController);
    
  ReactingController.$inject = ['$scope', '$interval', '$log', 'GetItemService', 'GetLocationService', 'GetRecommendationService', 'locationMapping'];
  
  function ReactingController($scope, $interval, $log, GetItemService, GetLocationService, GetRecommendationService, locationMapping) {
    var vm = this;
    var increment = 5;
   
    vm.selfPosX = 0;
    vm.selfPosY = 0;
    vm.visible = 0;
    $interval(repeatable, 500);
   
    vm.items = [];
    vm.showInfo = showInfo;
    vm.recommend = recommend;
   
    function repeatable() {
      GetLocationService.getLocation().then(getLocationSuccess, getLocationFailed);
    }
    
    
    function recommend() {
      GetRecommendationService.getRecommendation().then(getRecommendationSuccess, getRecommendationFailed);
      vm.visible = 1;
    }
   
    function showInfo(id) {
      GetItemService.getOne(id).then(handleSuccess, handleError);
    }
    
    function getLocationSuccess(response) {
      if (response) {
        var locationId, location;
        var users = response.data['users'];
        for(var key in users) {
          locationId = response.data['users'][key][0]['location'];
          console.log('location ID:' + locationId);
          location = getLocationById(locationId);
          $log.debug('matched location:' + angular.toJson(location));
            
          if(key === 'youren') {
            vm.selfPosX = location.posX;
            vm.selfPosY = location.posY;
          } else{
            $log.debug(vm.items);
            for(var key in vm.items) {
              var prefix = vm.items[key];
              locationId = response.data['users'][prefix][0]['location'];
              location = getLocationById(locationId);
              $log.debug('prefix:' + prefix + ', location:' + angular.toJson(location));
              vm[prefix + 'PosX'] = location.posX;
              vm[prefix + 'PosY'] = location.posY;
            }
          }            
        }
      }
     
    }
    
    function getLocationById(id) {
      var mappings = locationMapping();
      for (var i in mappings) {
        var location = mappings[i];
        if (location.locationId == id) {
          return location;
        }
      }
      return false;
    }
    
    function getLocationFailed(response) {
      $log.error("Failed to get location:" + angular.toJson(response));
    }
    
    function getRecommendationSuccess(response) {
      vm.visible = 1;
      if (response) {
        vm.items = response.data;
      }
    }
    
    function getRecommendationFailed(response) {
      $log.error('Failed to get recommendation:' + angular.toJson(response));
    }
    
    function handleSuccess(response) {
      $scope.$broadcast('modalContent', response);
    }
    
    function handleError(response) {
      $log.error('Failed to get item.');
    }
    
  }
  
})();