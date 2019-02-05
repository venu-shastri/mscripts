(function(angularRef){

    var utilModuleRef=angularRef.module("utilModule");
    utilModuleRef.service("mshttp",function(){

        this.get=function(url){

            return new Promise(function(res,rej){

                var ajaxReq=new XMLHttpRequest();
                //listen for request status change
                ajaxReq.onreadystatechange=function(){

                //request completion
                if(ajaxReq.readyState==4){
                    //request status
                    if(ajaxReq.status==200){

                        //get respose body
                        var usersList=JSON.parse(ajaxReq.response);
                        //resolve promise
                        res(usersList);
                    }
                    else{
                        //reject promise
                        rej("Invalid Request");
                    }
                }

                };
                //prepare request
                ajaxReq.open('get',url,true);
                //send ajax request
                ajaxReq.send();


            });

        };
        
            
    });





})(window.angular);