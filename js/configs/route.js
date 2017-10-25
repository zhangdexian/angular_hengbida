app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('register');
    $stateProvider
        .state('register',{
            url : '/register',
            templateUrl : 'views/register.html'
        })
        .state('login',{
            url : '/login',
            templateUrl : 'views/login.html'
        })
        .state('home',{
            url : '/home',
            templateUrl : 'views/home.html'
        })
        .state('order',{
            url : '/order',
            templateUrl : 'views/order.html'
        })
        .state('pay',{
            url : '/pay',
            templateUrl : 'views/pay.html'
        })
        .state('pay_failure',{
            url : '/pay_failure',
            templateUrl : 'views/pay_failure.html'
        })
        .state('pay_successful',{
            url : '/pay_successful',
            templateUrl : 'views/pay_successful.html'
        })
        .state('pro_categories',{
            url : '/pro_categories',
            templateUrl : 'views/pro_categories.html'
        })
        .state('pro_details',{
            url : '/pro_details',
            templateUrl : 'views/pro_details.html'
        })
        .state('pro_list',{
            url : '/pro_list',
            templateUrl : 'views/pro_list.html'
        })
        .state('pro_search',{
            url : '/pro_search',
            templateUrl : 'views/pro_search.html'
        })
        .state('shop_cart',{
            url : '/shop_cart',
            templateUrl : 'views/shop_cart.html'
        })
        .state('user',{
            url : '/user',
            templateUrl : 'views/user.html'
        })
        .state('confirm_order',{
            url : '/confirm_order',
            templateUrl : 'views/confirm_order.html'
        })
}]);
