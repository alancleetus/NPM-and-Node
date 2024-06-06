// run using "node ." or "node ./index.js"
let msg = "hello from node";
console.log(msg);

/*** Native Modules ***/
// libraries that comes built into node
// ex: http, file system, os, etc.
// https://nodejs.org/docs/latest-v20.x/api/fs.html

/* const fs = require("fs"); //cjs*/

import { writeFile, readFile } from "fs";

writeFile("message.txt", msg, (err) => {
    if (err) throw err;
    console.log("File saved");
});

readFile('message.txt', 'utf-8', (err, data) => {
    if (err) { throw err } else { console.log("read: "+data) };
});


 
