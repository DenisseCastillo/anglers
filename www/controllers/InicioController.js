app.controller('InicioController', function($scope, $rootScope, $state, $stateParams){
    $scope.IrP1= function(){
        $state.go('pregunta1');
    }
});