app.controller('AgradecimientoController', function($scope, $rootScope, $state, $stateParams, $timeout){
   $rootScope.finish=function(){
       $state.go('inicio');
   }
});