app.controller('Pregunta7Controller', function($scope, $rootScope, $state, $stateParams){
    $scope.savep7=function(value){
        $rootScope.encuesta.p7=value;
        $state.go('pregunta8');
    }    
});