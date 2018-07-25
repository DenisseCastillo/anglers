app.controller('Pregunta3Controller', function($scope, $rootScope, $state, $stateParams){
    $scope.savep3=function(value){
        $rootScope.encuesta.p3=value;
        $state.go('pregunta4');
    }    
});