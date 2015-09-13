describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with an empty to do field', function() {
    expect(ctrl.toDoItem).toBeUndefined();
  });

  // var task = [
  //     {
  //       "name": "Feed the dog",
  //       "due": "Thursday"
  //     }]

  // it('displays tasks added', function() {
  //   ctrl.addTask();
  //   expect(ctrl.toDoItem.task).toEqual(task);
  // });

  it('can add a new task', function() {
    ctrl.taskName = 'Feed the dog';
    ctrl.addTask();
    expect(ctrl.toDoList.tasks[0].name).toContain('Feed the dog'); 
  });



});