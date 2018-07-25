app.controller('Pregunta6Controller', function($scope, $rootScope, $state, $stateParams){
    $scope.savep6=function(value){
        $rootScope.encuesta.p6=value;
        $state.go('pregunta7');
    }    
});