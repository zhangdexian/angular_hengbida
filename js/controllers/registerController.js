angular.module('register', [])
    .controller('registerCtrl', ['$scope', function ($scope) {
        $scope.title = "注册账号";
        $scope.login = "登陆";
    }]);
