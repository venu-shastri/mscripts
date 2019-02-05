(function(angularRef,moduleName){

   var utilModuleRef= angularRef.module(moduleName);
   utilModuleRef.service("consoleLoggerService",
   function(){
       this.write=function(msg){ console.log(msg);};
   });

})(window.angular,"utilModule");