//ex.js

//앵귤러 앱을 선언한다.(모든 것들의 컨테이너)
var app = angular.module('example', []);

//앵귤러 컨트롤러를 선언한다.
app.controller('exampleController', function($scope) {

     //컨트롤러가 할 업무 코드를 구현하는 영역
     //ng-init="name='hong';"
     //JSP(Servlet) > req 역할과 유사
     $scope.nick = '냐옹이'; //변수 생성(JavaScript Property)
     $scope.color = 'gold';

     $scope.student = {
          name: '홍길동',
          age: 20,
          gender: true,
          birthday: new Date()
     };

     $scope.nums = [ 100, 200, 300, 400, 500 ];

});