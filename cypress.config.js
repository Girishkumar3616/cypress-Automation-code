


const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const { allureCypress } = require("allure-cypress/reporter");
const { defineConfig } = require("cypress");
module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    video:true,
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout: 5000,
    pageLoadTimeout:60000,
    viewportHeight:660,
    viewportWidth:1000,
    experimentalOriginDependencies:true,
    watchForFileChanges: false,

     retries:{openMode:1,runMode:1},

env:{
"username":"Admin",
"password":"admin123"

},

setupNodeEvents(on,config){
  allureCypress(on, config);

      return config;
  on('task', {downloadFile})
  require('cypress-mochawesome-reporter/plugin')(on);
  
}
  }
});
