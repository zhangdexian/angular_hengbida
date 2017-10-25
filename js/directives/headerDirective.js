angular.module("header",[])
    .directive("appHeader",function(){
        return{
            restrict : "AE",
            replace : true,
            templateUrl : "views/template/header.html"
        }
    });
