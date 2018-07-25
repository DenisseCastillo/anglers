app.controller('Pregunta2Controller', function($scope, $rootScope, $state, $stateParams){
    $scope.savep2=function(value){
        console.log("p2");
        $rootScope.encuesta.p2=value;
        $state.go('pregunta3');
    }    
});