app.controller('InicioController', function($scope, $rootScope, $state, $stateParams, $ionicPopup){
    $rootScope.encuesta={};

    $scope.IrP1= function(){
        if($rootScope.encuesta.name!=undefined && $rootScope.encuesta.lastName!=undefined && $rootScope.encuesta.email!=undefined){
            $state.go('pregunta1');
        } else{
            $ionicPopup.alert({
                title: 'Warning',
                template: 'Fill all the fields correctly'
            });
        }
        //$state.go('pregunta1');
    }
});