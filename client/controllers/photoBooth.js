angular.module("hackathon-starter").controller("PhotoBoothCtrl", ['$scope', '$meteor', '$location', '$http','limitToFilter',
  function( $scope, $meteor, $location, $http, limitToFilter ){
    document.title = "PhotoBooth";
    console.log("hi Photo Booth");
 	$scope.party = { imageData: 'http://placehold.it/350x150' };


 	$scope.takePicture = function(){
        $meteor.getPicture().then(function(data){
          $scope.party.imageData = data;
        });
      };

  }]);