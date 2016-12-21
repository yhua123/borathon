(function() {
  
  'use strict';
  
  angular
    .module('services.find.one')
    .service('GetLocationService', GetLocationService);
    
  GetLocationService.$inject = ['$http'];
  
  function GetLocationService($http) {
    this.getLocation = getLocation;
    
    function getLocation() {
      return $http.get('/location');
    }
  }
  
})();