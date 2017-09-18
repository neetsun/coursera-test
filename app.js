(function(){
  'use strict';//protect us from leaving things in global scope

  angular.module('myFirstApp',[]) //angular app
  //module function returns module instance
  .controller('myFirstController',function($scope){
    //$scope is an object to link btw view and viewmodel
    $scope.name = "Angel";
    $scope.sayHello = function(){
      return "Hello, Coursera";
    }

  });//define view model (presentation logic e.g. data binding+data access)
})();
