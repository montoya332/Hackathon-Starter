angular.module("hackathon-starter").controller("TwilloTextingCtrl", ['$scope', '$meteor', '$stateParams', '$collection', '$location', '$http','$modal','limitToFilter',
	function($scope, $meteor, $stateParams, $collection, $location, $http,$modal,limitToFilter){

		document.title = "Twillo Page";
		console.log("hi Twillo");
		$scope.message ="";
		var me = this;

		$scope.sendMessage = function(){
			var sendTo = '+16508888887';
			if ($scope.message.length > 5){
				$meteor.call('sendTwilioMessage', sendTo , $scope.message).then(
					function(data){
				      // Handle success
				      $scope.message ="";
				  },
				  function(err){
				        // Handle error
				        //me.modalInfo("Header",data.err)
				        console.log('failed', err);
				    });
			}
			else {me.modalInfo("Error","message is to short")}
		};


		me.modalInfo = function(header,body){
			$scope.modalInfo = {modalHeader:header,modalBody:body};
			var modalInstance = $modal.open({
				templateUrl: 'infoModalContent.html',
				controller: 'InfoModalInstanceCtrl',
				size: 'lg',
				resolve: {
					modalInfo: function () {
						return $scope.modalInfo;
					}
				}
			});

			modalInstance.result.then(function (step2) {
          //TODO: Do something when OK button is pressed
          
      }, function () {
      	console.log('Modal dismissed at: ' , new Date());
      });

		}

	}]).controller('InfoModalInstanceCtrl',['$scope', '$modalInstance', 'modalInfo',function ($scope, $modalInstance ,modalInfo) {
		console.log('Params: ',modalInfo);
		$scope.modalHeader = modalInfo.modalHeader;
		$scope.modalBody = modalInfo.modalBody;

		$scope.ok = function () {
			$modalInstance.close(true);
		};
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	}]);;