const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    video:true,
    baseUrl:"https://www.flipkart.com",
    defaultCommandTimeout: 4000,
    pageLoadTimeout:60000,
    viewportWidth:1000,
    watchForFileChanges: false,
    viewportHeight:660,
    retries:{openMode:1},
env:{
"username":"Admin",
"password":"admin123"

},

setupNodeEvents(on,Config){


  require('cypress-mochawesome-reporter/plugin')(on);
}

  },
});
