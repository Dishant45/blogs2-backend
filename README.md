# Blog-backend

**BLOG Backend** is a project which will handle the backend of blog it will create new blog find a blog and delete a blog using and also tried to add images using multer mongo db

# Content

<hr>-

**app.js** this is the file in which we are creating express server and listening the server and we are connecting to database using mongoose

- **routes** this folder contains file and express router are created in each file **blogroutes.js** which has the Router all the routes for getting a blog or adding a blog and deleting blog

*

- **controller** in this folder we have the function which are used imported and used in routes

**blogcontroller.js** this file contains middleware function for performing crud operation on blog

**models** is this folder schema models are created for blogs

**blogschema.js**in this schema is created for blog with several fields

**config.env**then you will need to create a file call config.env in which you will store environment variables and store your PORT and database URL in it

**package.json**this json file contain scripts which you have added keywords and dependencies which you have installed

# dependencies

dependencies youll need to install

1. npm install express
2. npm install mongoose
3. npm install multer
4. npm install dotenv
5. npm install uniqid
