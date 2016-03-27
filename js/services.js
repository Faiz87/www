angular.module('starter.services', [])

.factory('Automaten', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var automaten = [];

  return {

    getAll: function(array) {
      return automaten;
    },
    
    all: function(array) {
      
      if (automaten)
      {
        for (var i = automaten.length-1; i >= 0; i--) {
          automaten.splice(automaten[i]);
        }
        for (var i = array.length-1; i >= 0; i--) {
        automaten.unshift(array[i]);
        }
      }
      else{
        for (var i = array.length-1; i >= 0; i--) {
        automaten.unshift(array[i]);
        }
      }
      

      return automaten;
      
    },
    remove: function(automat) {
      automaten.splice(automaten.indexOf(automat), 1);
    },
    get: function(automatId) {
      for (var i = 0; i < automaten.length; i++) {
        if (automaten[i].id == parseInt(automatId)) {
          return automaten[i];
        }
      }
      return null;
    },
    getStatus: function(automatId) {
      for (var i = 0; i < automaten.length; i++) {
        if (automaten[i].id == parseInt(automatId)) {
          if(automaten[i].status === 1){
            return true;
          }
          else {
            return false;
          }
        }
      }
      return null;
    }
  
  };
});
