/* run using "nodemon index.js" for live server*/

import express from 'express'; 

import { fileURLToPath } from 'url';

const app = express();
const port = 2000;



// start an express server
app.listen(port, ()=>{ console.log(`Server is running on: http://localhost:${port}`)});

app.get("/", (req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hello World</h1>");
});

app.get("/landing", (req,res)=>{
    // console.log(req.rawHeaders);
    res.status(201).send("Landing Page");
}); 


/*-------- serve html pages -----------*/
/****  method 1 ****/
// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get("/about", (req, res) => {
    res.status(201).sendFile('about.html', { root: 'public' });
});

/****  method 2 ****/
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/contact", (req, res) => {
    res.status(201).sendFile(path.join(__dirname, 'public', 'contact.html'));
});