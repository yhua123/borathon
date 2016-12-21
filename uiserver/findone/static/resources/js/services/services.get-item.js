(function() {
  
  'use strict';
  
  angular
    .module('services.find.one')
    .service('GetItemService', GetItemService);
    
  GetItemService.$inject = ['$q', '$timeout', 'items', '$log'];
  
  function GetItemService($q, $timeout, items, $log) {
    this.getOne = getOne;
    
    function getItemById(id) {
      var allItems = items();
      for(var i in allItems) {
        var item = allItems[i];
        if (item.id === id) {
          return item;
        }
      }
      return false;
    }
    
    function getOne(id) {
      var defered = $q.defer();
      $timeout(function() {
        if(items().length > 0) {
          defered.resolve(getItemById(id));           
        } else {
          defered.reject('Found none of item.');  
        }
      }, 50);
      return defered.promise;
    }
  }
  
})();