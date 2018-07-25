app.controller('Pregunta8Controller', function($scope, $rootScope, $state, $stateParams, survey, $ionicPopup, $timeout){
    $scope.sendSurvey=function(value){
        $rootScope.encuesta.p8=value;
        console.log($rootScope.encuesta);

        $scope.final=new survey($rootScope.encuesta);

        //Enviar el objeto de la encuesta
        var promise = $scope.final.$save();

        promise.then(function(){
            console.log("Respuesta del server");
            $rootScope.encuesta={};
            $state.go('agradecimiento');
        },function(){
            $ionicPopup.alert({
                title: 'Error',
                template: 'Error sending your ansers. Try again later'
            });
        });
    }

    $rootScope.$on('$stateChangeSuccess', 
    function(event, toState, toParams, fromState, fromParams){ 
        if ($state.current.name == 'agradecimiento') {
             console.log("Si entre al final");
             $timeout(function(){
                 $state.go('inicio');
             },4000);
        }
    });
});