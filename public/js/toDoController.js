toDo.controller('ToDoController', [function() {

  var self = this;
  self.toDoList = {
    "tasks" : []
  }

  self.addTask = function() {
    self.toDoList.tasks.push(
      { 
        "name" : self.taskName,
        "due" :  self.taskDate,
        "active": true
      });
    self.taskName = ''
    self.taskDate = ''

    console.log(self.toDoList.tasks.length)
  };

  self.editTask = function(item, index) {
    
      item.name = self.editedName;
      item.due = self.editedDate;

   self.editedName = ''
   self.editedDate = ''
  }

  self.deleteTask = function(index) {
    self.toDoList.tasks.splice(index, 1);
  }


  // self.toDoFilter = function() {
  //   toDoList.tasks.filter(function(item) {

  //   })
  // }

  self.deleteAllCompleted = function(){
    self.toDolist = self.toDolist.filter(function(task){
      return task.active = true;
    });
  };

  self.deleteAll = function() {
    self.toDoList = {
      "tasks" : []
    }
  };

}]);


