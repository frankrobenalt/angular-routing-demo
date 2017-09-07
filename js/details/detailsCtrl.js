angular.module('routing').controller('detailsCtrl', function($scope, detailsSrvc, $stateParams) {
    console.log($stateParams);
    $scope.getChar = function(charId) {
        detailsSrvc.getChar(charId).then(function(response) {
            $scope.character = response;
        });
    }
    $scope.getChar($stateParams.charId);
});
