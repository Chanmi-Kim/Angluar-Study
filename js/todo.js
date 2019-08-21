//todo.js
// - 앵귤러 관련 코드 작성
//   1. 모듈(Module)
//        - 다른 요소를 담기 위한 컨테이너
//        - 컨트롤러, 디렉티브, 서비스 등등..
//   2. 컨트롤러(Controller)
//        - $scope 변수(****)
//        - 데이터 처리/공급

var app = angular.module('todo', []);

app.controller('todoController', function($scope) {
     
     //$scope.num = 100;

     $scope.items = getData();

     $scope.remove = function(item) {
          //alert(item.title);

          //findIndex() : 요소 비교를 개발자가 직접해서 원하는 요소가 배열의 몇번째 있는지 위치 반환
          var index = $scope.items.findIndex(function(temp) {
               
               return item.seq == temp.seq;
          });

          //alert(index);
          if (index > -1) {
               $scope.items.splice(index, 1);
          }
     };


     $scope.add = function(newTitle) {
          //alert(newTitle);
          var newItem = {
               seq: nextval($scope),
               title: newTitle,
               completed: false,
               regdate: Date.now()
          };

          $scope.items.push(newItem);

          $scope.newTitle = '';

     };

});//controller

function nextval($scope) {
     return $scope.items[$scope.items.length-1].seq + 1;
}


function getData() {
     var items = [
          {
               seq: 1,
               title: '프로젝트 주제 선정하기',
               completed: true,
               regdate: Date.now()
          },
          {
               seq: 2,
               title: '요구사항 분석하기',
               completed: false,
               regdate: Date.now()
          },
          {
               seq: 3,
               title: '데이터베이스 모델링',
               completed: false,
               regdate: Date.now()
          }
     ];//할일들 배열

     return items;
}