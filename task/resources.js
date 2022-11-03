const {src, dest} = require('gulp');

const path = require("../config/path.js");

const resources = () => {
  console.log(path.resources.src)
  return src(path.resources.src)
  .pipe(dest(path.resources.dest));
}

module.exports = resources;