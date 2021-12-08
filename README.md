
 # <h1 align = 'center'> DSABook </h1>
<br>

**In this readme I will mainly describe functionalities, code structures , api documentation and everyting related to backend part of DSABook web application .** 

<!-- 
In my Internship Program in **Cefalo Bangladesh Limited** I was asked to create a web Application having CRUD functionalities using NodeJs , ExpressJs and ReactJs . I had a choice to select any database in my project . So I have used MongoDB Atlas for database (NoSQL) . I have named my CRUD application **DSABook** as it contains blogs regarding data Structures and algorithms .  -->

<br><br>

# Table of Contents
<ul>
<li> <h3> <a href = "#introduction" > 1. Introduction </a> </h3> </li>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#motivation" > 1.1 Motivation </a> </h4>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#technology" > 1.2 Technology </a> </h4>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#runproject" > 1.3 How to Run this Project in your machine </a> </h4>

<br>

<li> <h3> <a href = "#deployment" > 2. Deployment </a> </h3> </li> 

<h4>&nbsp; &nbsp; &nbsp;<a href = "#deployheroku" > 2.1 Deployment in Heroku </a> </h4>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#deploydockerhub" > 2.2 Docker Image Deployed in Docker Hub </a> </h4>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#runimage" > 2.3 How to Run this Docker image in your machine </a> </h4>

<br>

<li> <h3> <a href = "#api" > 3. API Documentation </a> </h3> </li> 

<h4>&nbsp; &nbsp; &nbsp;<a href = "#authapi" > 3.1 Auth Related Endpoints </a> </h4>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#blogapi" > 3.2 Blog Related Endpoints </a> </h4>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#userapi" > 3.3 User Related Endpoints </a> </h4>

</ul>

<br><br>


# <h1 id = 'introduction'> 1. Introduction</h1>
<br>


## <h2 id = 'motivation' > 1.1 Motivation </h2>
<br>

In my Internship Program in **Cefalo Bangladesh Limited** I was asked to create a web Application having CRUD functionalities . I have named my CRUD application **DSABook** as it contains blogs regarding data Structures and algorithms .In this readme I will mainly describe functionalities, code structures , api documentation and everyting related to backend part of DSABook web application . 

<br>

## <h2 id = 'technology' > 1.2 Technology </h2>
<br>
  
  [Nodejs](https://nodejs.org/en/) : &nbsp; A javascript Runtime <br>
  [Expressjs](https://expressjs.com/) : &nbsp; A Nodejs Framework <br>
  [MongoDB Atlas](https://www.mongodb.com/atlas/database) : &nbsp; a NoSQL Cloud Database <br>
  [Mongoose](https://mongoosejs.com/) : &nbsp; mongodb object modeling for node.js <br>
  [JEST](https://jestjs.io/) : &nbsp; javascript testing framework <br>
  [Sinon.js](https://sinonjs.org/) : &nbsp; Standalone test spies, stubs and mocks for JavaScript. Works with any unit testing framework.<br>
  [Docker](https://www.docker.com/): &nbsp; to take away repetitive configuration task for running it in machine

<br>

## <h2 id = 'runproject' > 1.3  How to Run this Project </h2>
<br>

### Step 1 :
<br> 
Make you you have Node installed in your machine . If not then install node in your machine
<br><br>

### Step 2 :
<br>
Clone this Github Repository <br><br>
<pre>git clone https://github.com/jagonmoy/Cefalo-Internship-Nodejs.git</pre>
<br>

### Step 3 :
<br>

create a database in mongoDB Atlas and then copy paste the mongoDB atlas connection url in environment file which is described in step 4 .

<br>

### Step 4 :
<br>
create a file called config.env and write all the values of corresponding environment variable : <br><br>
<pre>
HOST =  < ip address where you want to host > ( e.g 127.0.0.1 )
PORT =  < a port number which is free > ( e.g 8000 )
DATABASE = < mongodb atlas url which is connected to your node application > ( e.g mongodb+srv://username:password@cluster0.sxo2i.mongodb.net/projectName?retryWrites=true&w=majority )
JWT_SECRET = < any string > (e.g thisIsMySecret)
JWT_EXPIRE = 5000d
JWT_COOKIE_EXPIRE = 5000
NODE_ENV = production

</pre>

<br>
A sample config file can be like this , <br><br>
<pre>
HOST = 127.0.0.1 
PORT =  8000 
DATABASE = mongodb+srv://username:password@cluster0.sxo2i.mongodb.net/projectName?retryWrites=true&w=majority 
JWT_SECRET = thisIsMySecret
JWT_EXPIRE = 5000d
JWT_COOKIE_EXPIRE = 5000
NODE_ENV = production
</pre>

<br>

### Step 5 :
<br>
make sure you have any package manager ( e.g npm,yarn etc) installed in your machine . Then run the following command <br> <br>
for npm <br> <br>
<pre> npm install</pre>    
<br>
for yarn <br> <br>
<pre> yarn install</pre>    
<br>

### Step 6 :
<br>
after doing all the steps now you can run the following command <br><br>
for npm ,<br><br>
<pre>npm start</pre>

if there is no error then it should run perfectly!!

# <h1 id = 'deployment'> 2. Deployment</h1>
<br>

## <h2 id = 'deployheroku' > 2.1 Deployment in Heroku </h2>
<br>

I have deployed backend and frontend part of **DSABook** separately in Heroku .

[Backend Part of **DSABook** Deployed in Heroku](https://dsa-book-backend.herokuapp.com/)

<br>

## <h2 id = 'deploydockerhub' > 2.2 Docker Image Deployed in Docker Hub</h2>
<br>

I have deployed image of backend and frontend part of DSABook separately in Docker Hub .

[Image of backend Part of **DSABook** deployed in DockerHub](https://hub.docker.com/repository/docker/jagonmoy/dsa-book-backend)

<br>

## <h2 id = 'runimage' > 2.3 How to run This Docker image in your machine </h2>
<br>

Install Docker in your machine and do all the commands and procedure to start docker in your terminal .
[This might help you to install docker in your machine](https://docs.docker.com/get-docker/) or you can find many youtube Tutorials . <br>
After Installing Docker in your machine and starting docker in your terminal you can type following command  .<br>

    docker run -it -p <port-number>:8015 -d jagonmoy/dsa-book-backend:v1.0.0

In place of **port-number** you will use any port number which is free and where you are wishing to run this application .

suppose , you want to use the port number **60** then your command will be <br>
  
    ​docker run -it -p 60:8015 -d jagonmoy/dsa-book-backend:v1.0.0

Now you can visit backend part  of **DSABook** in :
http://localhost:60/

<br>

# <h1 id = 'api'> 3. API Documentation</h1>
<br>

**I have tried to Follow the REST API Principles to build API Endpoints for this DSABook web application**


<br>

## <h2 id = 'authapi' > 3.1 Auth Related Endpoints </h2>
<br>

- ### Sign Up : &nbsp;  **POST &nbsp; /api/auth/signup/** <br><br>

  - #### **Valid Response**: <br><br>

     A sample request body can be like this , <br><br>
     <pre>
      {
          "name" : "jagoth" ,
          "username" : "jagoth",
          "email" : "jagoth@mail.com",
          "password" : "12345678",
          "confirmpassword" : "12345678"
      }
     </pre>
     <br>

    - If any signed in user is not trying to sign up again.
    - If values of all the fields are passing validations.
    - if email , username is unique.
    <br><br>

    then rsponse will be okay with a status code **200 OK** along with a response . By default the   response will be in **json** format but you can ask the response in xml format . For this we   need to set **Accept** header is **application/xml** then  it will return a xml file . 
    
    **Status : 200 OK**

      <pre>
      {
        "format": "*/*",
        "data": {
            "name": "jagoth",
            "username": "jagoth",
            "email": "jagoth@mail.com",
            "createdAt": "2021-12-08T10:10:34.740Z",
            "updatedAt": "2021-12-08T10:10:34.740Z"
        }
      }   
      </pre>


   - #### **Person Already Signed in Error**: <br><br>
     suppose the person is already signed in But he trying to sign up then he will not be able to sign up .

     **Status : 403 Forbidden**
      <pre>
     {
         "format": "*/*",
         "data": "Sign Out First And Then Try Again!"
     }
     </pre>

   - #### **Validation Error**: <br><br>
     if there is any validation error then status code  will be **422 Unprocessable Entity** .   

     **Conditions for validations are :**
      - name must be between 5 to 30 letters 
      - username must be between 5 t0 15 letters 
      - email should be a valid email 
      - password should be atleast 8 characters long
      - confirmPassword should match with password
      <br><br>

      Suppose the name is not between 5 to 30 letters and password doesn't match .


     **Status : 422 Unprocessable Entity**

     response body, <br>
     <pre>
      {
          "message": "request failed",
          "errors": [
              "Name must be between 5 to 30 letters",
              "Confirmation Password Does not match"
          ]
      }
     </pre>
   
    - #### **Email or Unsername Not Unique Error**: <br><br>
     
      If the username or email is not unique
     
      **Status : 403 Forbidden**
     
       <pre>
        {
         "format": "*/*",
         "errors": [
           "Email is not Unique"
          ]
        }
      </pre>
     
   <br>

