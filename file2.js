// file1.js - Basic code smells

var name = "Chinmay"  // ❌ Missing semicolon
var Age = 25;          // ❌ Bad naming (should be lowerCamelCase)

function sayHello(){
  console.log("Hello " + name)
  return; // ❌ Redundant return
}

sayHello()
