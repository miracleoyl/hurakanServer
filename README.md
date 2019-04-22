# hurakanServer
npm init  
npm install --save btoa body-parser express mongoose multer  

btoa: this will help us create a unique hash for a file so we can have a URL shortner functionality.
body-parser: this makes it easy for the backend to access parameters from the frontend.
express: this is the main backend framework built on top of Node.js
mongoose: this is an ORM library. It helps to insert and manipulate data using a MongoDB database.
multer: this is a library which allows us to receive and store files in the backend.


To deploy to my server.
1. copy codes to server, and use forever start index.js to start server






Fixed defects:
1.  Delete the wrong file. always removed the firt file instead of the selected one.

Resolution:
// [Miracle]to query id in mongoDB, construct the ObjectID and not pass it in as a string
    let tempId = new require('mongodb').ObjectID(req.params.id)
    File.findOne({_id: tempId}, (err, file) => {
    ...

2.  Upload failure
Entity too large

Resolution:
add client_max_body_size 1000m in nginx.conf

3. download failure

