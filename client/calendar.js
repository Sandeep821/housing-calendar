angular.module('todoApp', ['ui.calendar'])
  .controller('TodoListController', function($scope) {
    var todoList = this;
    var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

todoList.events = [
  {title: 'All Day Event',start: new Date(y, m, 1)},
  {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
  {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
  {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
  {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
  {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
];
todoList.addEvent = function() {
  console.log('event added');
  todoList.events.push({
    title: 'Open Sesame',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    className: ['openSesame']
  });
};

    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });