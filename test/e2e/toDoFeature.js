describe('To do list', function() {

  var taskName = element(by.model('toDoCtrl.taskName'))
  var taskDate = element(by.model('toDoCtrl.taskDate'))
  var editedName = element(by.model('toDoCtrl.editedName'))
  var editedDate = element(by.model('toDoCtrl.editedDate'))
  var taskButton = element(by.className('addButton'))
  var deleteButton = element(by.className('deleteButton'))
  var editButton = element(by.className('editButton'))
  var saveButton = element(by.className('saveButton'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  describe('creating tasks', function(){
    it('can add a new task', function() {
      taskName.sendKeys('Learn something, anything...');
      taskDate.sendKeys('Thursday');
      taskButton.click();
      expect(element.all(by.binding('item.name')).getText()).toContain('Learn something, anything...');
    }); 
  });

  describe('deleting tasks', function(){
    it('can delete task', function() {
      taskName.sendKeys('Learn something, anything...');
      taskDate.sendKeys('Thursday');
      taskButton.click();
      deleteButton.click();
      expect(element.all(by.binding('item.name')).getText()).toNotContain('Learn something, anything...');
    });
  }); 

   describe('editing tasks', function(){
    it('can edit task', function() {
      taskName.sendKeys('Learn something, anything...');
      taskDate.sendKeys('Thursday');
      taskButton.click();
      editButton.click();
      editedName.sendKeys('Make dinner instead');
      editedDate.sendKeys('Now');
      saveButton.click()
      expect(element.all(by.binding('item.name')).getText()).toContain('Make dinner instead');
    }); 
  });
});






