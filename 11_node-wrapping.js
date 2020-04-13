// function (exports, require, module, __filename, __dirname) {}

exports.a = 42; // export const a = 42;
module.export.b = 42;
console.log(arguments);

// if i want to change the api module from returning object to returning function
// exports = () => {}; not ok

module.export = () => {};

// return module.exports;
// }