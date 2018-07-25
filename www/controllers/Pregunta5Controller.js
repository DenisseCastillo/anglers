app.controller('Pregunta5Controller', function($scope, $rootScope, $state, $stateParams){
    $scope.savep5=function(value){
        $rootScope.encuesta.p5=value;
        $state.go('pregunta6');
    }    
});