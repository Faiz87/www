angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {
  var j = document.createElement('script');
  j.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js';
  document.getElementsByTagName("head")[0].appendChild(j);
  $scope.php = function(text){
        $.ajax({
          url: "http://localhost/tcp_client.php?"+text, //the page containing php script
          type: "POST", //request type
          success:function(result){
              alert(result);
          }
        });
  }; 
})

.controller('AutomatenCtrl', function($scope, Automaten, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $http.get('http://localhost/automaten_mysql.php?getAutomaten=1').then(function(response){
      console.log(response);
      $scope.automaten = Automaten.all(response.data);
    })
  
  $scope.remove = function(automat) {
    Automaten.remove(automat);
    //auch auf sql server löschen
  };
})

.controller('AutomatDetailCtrl', function($scope, $stateParams, Automaten, $http) {
  $scope.automat = Automaten.get($stateParams.automatId);
  $scope.new_stat = $scope.automat.status;

  if ($scope.new_stat === 'false') {
    alert("false");
  }
  else if ($scope.new_stat === 'true') {
    alert("true");
  } 
  else {
    alert ("Fehler Statuserkennung!");
  }

  $scope.sendStatus = function(){
    
    if($scope.automat.status == 'true'){
      $scope.new_stat = 'false';
    }
    else{
      $scope.new_stat = 'true';
    }
    $http.get('http://localhost/automaten_mysql.php?setStatus=1&id='+$scope.automat.id+'&status='+$scope.new_stat).then(function(response){
      console.log(response);
      alert(response.data);
      $http.get('http://localhost/automaten_mysql.php?getAutomaten=1').then(function(response){
        console.log(response);
        $scope.automaten = Automaten.all(response.data);
        $scope.new_stat = $scope.automat.status;
      })
    })
  };

  var j = document.createElement('script');
  j.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js';
  document.getElementsByTagName("head")[0].appendChild(j);
  $scope.php = function(text){
        $.ajax({
          url: "http://localhost/tcp_client.php?"+text, //the page containing php script
          type: "POST", //request type
          success:function(result){
              alert(result);
              //$scope.enable1 = true;   
          }
        });
  };
  
})

.controller('EinstellungenCtrl', function($scope) {
  var x = document.createElement('script');
  x.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js';
  document.getElementsByTagName("head")[0].appendChild(x);
  $scope.php = function(text){
        $.ajax({
          url: "http://localhost/tcp_client.php?"+text, //the page containing php script
          type: "POST", //request type
          success:function(result){
              alert(result);
          }
        });
  }; 

})
.controller('addAutomatCtrl', function($scope) {

})
.controller('TestCtrl', function($scope, $http) {

});


