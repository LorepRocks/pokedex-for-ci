const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    supportFile: false,
    pageLoadTimeout: 120000,
  },
});
