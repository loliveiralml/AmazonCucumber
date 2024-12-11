const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    "specPattern": "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
});