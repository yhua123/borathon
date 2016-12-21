(function() {
  'use strict';
  
  angular
    .module('services.find.one')
    .service('GetRecommendationService', GetRecommendationService);
    
  GetRecommendationService.$inject = ['$http'];
  
  function GetRecommendationService($http) {
    this.getRecommendation = getRecommendation;
    
    function getRecommendation() {
      return $http.get('/recommendation');
    }
  }
  
})();