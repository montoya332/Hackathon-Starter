angular.module("hackathon-starter").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider

     .state('contact', {
        url: '/contact',
        templateUrl: 'client/information/about.ng.html',
       // controller: 'AboutCtrl'
      })
     .state('home', {
        url: '/home',
        templateUrl: 'client/information/home.ng.html',
        //controller: 'UploadsCtrl'
      })
     .state('C2Hackathon', {
        url: '/C2Hackathon',
        templateUrl: 'client/hackathon/c2HackathonGraph.ng.html',
        controller: 'C2HackathonGraphCtrl'
      })
     .state('twilloTexting', {
        url: '/twilloTexting',
        templateUrl: 'client/hackathon/twilloTexting.ng.html',
        controller: 'TwilloTextingCtrl'
      })
     .state('landingPage', {
        url: '/',
        templateUrl: 'client/information/landingPage.ng.html',
        //controller: 'UploadsCtrl'
      })

    $urlRouterProvider.otherwise('/');
  }]);
