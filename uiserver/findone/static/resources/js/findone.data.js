(function() {
  
  'use strict';
  
  angular
    .module('find.one.app')
    .value('locationMapping', locationMapping)
    .value('items', items);
   
  function locationMapping() {
    return [
      {
        'locationId': 1,
        'posX': 205,
        'posY': 75
      },
      {
        'locationId': 2,
        'posX': 205,
        'posY': 105
      },
      {
        'locationId': 3,
        'posX': 205,
        'posY': 135
      },
      {
        'locationId': 4,
        'posX': 205,
        'posY': 175
      },
      {
        'locationId': 5,
        'posX': 205,
        'posY': 210
      },
      {
        'locationId': 6,
        'posX': 205,
        'posY': 245
      },
      {
        'locationId': 7,
        'posX': 205,
        'posY': 295
      },
      {
        'locationId': 8,
        'posX': 205,
        'posY': 330
      },
      {
        'locationId': 9,
        'posX': 205,
        'posY': 360
      },
      {
        'locationId': 10,
        'posX': 205,
        'posY': 400
      },
      {
        'locationId': 11,
        'posX': 205,
        'posY': 430
      },
      {
        'locationId': 12,
        'posX': 170,
        'posY': 105
      },
      {
        'locationId': 13,
        'posX': 170,
        'posY': 135
      },
      {
        'locationId': 14,
        'posX': 170,
        'posY': 175
      },
      {
        'locationId': 15,
        'posX': 170,
        'posY': 210
      },
      {
        'locationId': 16,
        'posX': 170,
        'posY': 245
      },
      {
        'locationId': 17,
        'posX': 170,
        'posY': 295
      },
      {
        'locationId': 18,
        'posX': 170,
        'posY': 330
      },
      {
        'locationId': 19,
        'posX': 170,
        'posY': 360
      },
      {
        'locationId': 20,
        'posX': 170,
        'posY': 410
      },
      {
        'locationId': 21,
        'posX': 130,
        'posY': 295
      },
      {
        'locationId': 22,
        'posX': 130,
        'posY': 330
      },
      {
        'locationId': 23,
        'posX': 130,
        'posY': 360
      },
      {
        'locationId': 24,
        'posX': 130,
        'posY': 400
      },
      {
        'locationId': 32,
        'posX': 165,
        'posY': 75
      },
      {
        'locationId': 33,
        'posX': 205,
        'posY': 105
      },
      {
        'locationId': 34,
        'posX': 200,
        'posY': 60
      },
      {
        'locationId': 35,
        'posX': 235,
        'posY': 85
      }
    ];
  } 
  
  function items() {
    var PREFIX_URL = 'static/resources/img/';
    return [
      {
        'id': 1,
        'imageUrl': PREFIX_URL + 'raspberry-pi3.png',
        'description': 'Raspberry PI 3',
        'price': 289
      },
      {
        'id': 2,
        'imageUrl': PREFIX_URL + 'intel-nuc.jpg',
        'description': 'Intel NUC',
        'price': 1299
      },
      {
        'id': 3,
        'imageUrl': PREFIX_URL + 'iphone7.jpg',
        'description': 'Apple iPhone 7 32Gb',
        'price': 5288
      },
      {
        'id': 4,
        'imageUrl': PREFIX_URL + 'pixel.jpg',
        'description': 'Google Pixel 32Gb',
        'price': 4988
      }
    ];
  }
  
})();