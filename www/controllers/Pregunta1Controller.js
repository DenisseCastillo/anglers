app.controller('Pregunta1Controller', function($scope, $rootScope, $state, $stateParams){
    $scope.savep1=function(value){
        $rootScope.encuesta.p1=value;
        $state.go('pregunta2');
    }
});