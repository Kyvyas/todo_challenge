exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['toDoFeature.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
}