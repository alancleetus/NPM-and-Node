/*** NPM - Node Package Manager ***/
// marketplace for node libraries
// https://www.npmjs.com/

// "npm init" - create new npm project
// "npm i silly-animal" - npm install library called silly-animal

// in package.json add   "type":"module", 
// to enable ecma script module
import generateName from "sillyname"; //ecma script module uses import not require
var name = generateName();

console.log(name);

/*
var sillyAnimal = require("silly-animal"); //common js(cjs) uses require pre node v12
var animal = sillyAnimal.generate();

console.log(animal); */
