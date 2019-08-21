//모듈 > 컨트롤러
//모듈 > 디렉티브

//사용자 디렉티브
app.directive('todoHeader', function() {
     return {
          template: '<header><img src="images/angular_logo_s.png"></header>'
     };
});


app.directive('todoItems', function() {
     return {
          //template: ''
          templateUrl: 'template/todoItems.tpl.htm'
     };
});

app.directive('todoBtns', function() {
     return {
          //template: ''
          templateUrl: 'template/todoBtns.tpl.htm'
     };
});

app.directive('todoForm', function() {
     return {
          //template: ''
          templateUrl: 'template/todoForm.tpl.htm'
     };
});