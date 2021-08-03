const ghpages = require("gh-pages");

ghpages.publish("dist/demo", null, (err) => {
  if (err) {
    console.log("Error", err);
  }
});
