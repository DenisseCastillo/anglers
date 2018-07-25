app.controller('Pregunta4Controller', function($scope, $rootScope, $state, $stateParams){
    $scope.savep4=function(value){
        $rootScope.encuesta.p4=value;
        $state.go('pregunta5');
    }    
});