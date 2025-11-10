// file3.js - Potential runtime issues

function showMessage(msg) {
  console.log("Message: " + msg);
}

showMessage(); // ❌ Missing argument

console.log(notDeclaredVar); // ❌ Using undeclared variable
