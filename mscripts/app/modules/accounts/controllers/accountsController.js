(function(angularRef){

   var accountsModuleRef= angularRef.module("accountsModule");
   accountsModuleRef.controller(
       "AccountsController",
       ['$scope','consoleLoggerService','mshttp',
   function($scope,consoleLoggerService,mshttp){

        $scope.login=function(){
            var url='server/users.json';
           var promiseObj= mshttp.get(url);
           promiseObj.then(function(result){

            console.log(result);
           });
           promiseObj.catch(function(err){
               console.log(err);
           });
            

        };
        $scope.logout=function(){

            consoleLoggerService.write("Logout Invoked");
        };
        $scope.signup=function(){
            consoleLoggerService.write("Signup Invoked");
        };
            
        

   }]);
})(window.angular);