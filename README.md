# Nodejs Reactjs Jwt Token Authentication Example Sourcecode
Tutorial Link: [Nodejs Reactjs Jwt token authentication](https://loizenai.com/react-node-jwt-authentication/)

![Node React jwt Token authentication](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Nodejs-Jwt-Authentication-without-Redux-using-Axios-and-LocalStorage.png)

Tutorial: React Node Jwt Authentication (without Redux) – using LocalStorage and Axios (plus interceptor) in React application and Express + Sequelize + MySQL/PostgreSQL in Nodejs backend solution.

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. And “How to build Reactjs Nodejs Jwt Token Based Authentication Example?” is one of the most common questions for SpringBoot Java development world. So in the tutorial, I introduce how to implement an application “Reactjs JWT SpringBoot token Authentication Example” with details step by step and 100% running sourcecode.

– I give you an Epic of the application, a fullstack excutive flow from frontend (Reactjs) to backend (Nodejs/Express) to database (MySQL/PostgreSQL) with overall architecture diagram.
– I give you a layer diagram of Reactjs Jwt Application with LocalStorage and Axios (plus Interceptor)
– I guide you detail-steps how to implement a security Jwt Token Nodejs backend.
– I guide you step by step how to develop a Reactjs Jwt Authentication application.
– Finally, I do an integrative testing from Reactjs Jwt Authentication application to jwt Nodejs Security RestAPIs.

## Overall Nodejs Reactjs Jwt Login System Architecture Diagram

![Overall Nodejs Reactjs Jwt Login System Architecture Diagram](https://loizenai.com/wp-content/uploads/2020/11/Overall-Diagram-Reactjs-JWT-Authentication.png)

For the Reactjs JWT Authentication tutorial, we have 2 projects:
– Backend project Nodejs/Express provides secured RestAPIs with JWT token.
– Reactjs project will request RestAPIs from Nodejs with the Jwt Token Authentication implementation.

## JWT Authentication Sequence Diagram

![JWT Authentication Sequence Diagram](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Node-Jwt-Authentication-Working-Process-Diagram.png)

1. User Registration Phase:
– User uses a React.js register form to post user’s info (name, username, email, role, password) to Backend API /api/auth/signup.
– Backend will check the existing users in database and save user’s signup info to database. Finally, It will return a message (successfully or fail) to

2. User Login Phase:
– User posts user/password to signin to Backend RestAPI /api/auth/signin.
– Backend will check the username/password, if it is right, Backend will create and JWT string with secret then return it to Reactjs client.

After signin, user can request secured resources from backend server by adding the JWT token in Authorization Header. For each request, backend will check the JWT signature and then returns back the resources based on user’s registered authorities.

## Reactjs JWT Authentication Diagram Overview

![Reactjs JWT Authentication Diagram Overview](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Node-JWT-Authentication-Layer-Diagram.png)

Reactjs JWT Authentication would be built with 5 main kind blocks:

Reactjs Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
Reactjs Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
Reactjs Service is a bridge between Reactjs Component and Backend Server, it is used to do technical logic with Backend Server (using Ajax Engine to fetch data from Backend, or using Local Storage to save user login data) and returned a response data to React.js Components
Local Storage allow to save key/value pairs in a web browser. It is a place to save the login user’s info.
Axios – (an Ajax Engine) is a promise-based HTTP client for the browser and Node. js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.

## Jwt Nodejs Token Security RestAPIs Diagram Overview

![Jwt Nodejs Token Security RestAPIs Diagram Overview](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Nodejs-Jwt-Authentication-Architecture-Diagram-Back-End-Server.png)

HTTP request that matches route will be accepted by CORS Middleware before coming to Security layer.

Security layer includes:
– JWT Authentication Middleware: verify SignUp, verify token
– Authorization Middleware: check User’s roles

Main Business Logic Processing interacts with database via Sequelize and send HTTP response (token, user information, data based on roles…) to client.

## Project Goal

![Project Goal](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Jwt-Authentication-project-structure-3.png)

It includes 8 components and 2 services and a router in app.js file.

– Home page:

![Home page](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Home-Page-signout-returned-page.png)

– User Register page:

![User Register page](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-jwt-authentication-signup-Jack-with-user-role.png)

– Login Page:

![Login Page](https://loizenai.com/wp-content/uploads/2020/11/reactjs-jwt-nodejs-authentication-wrong-login-user-validation.png)

– Profile Page:

![Profile Page](https://loizenai.com/wp-content/uploads/2020/11/reactjs-user-profile-info.png)

– Use Page:

![User Page](https://loizenai.com/wp-content/uploads/2020/11/reactjs-nodejs-jwt-authentication-user-content-info.png)

– Project Manager Page:

![Project Manager Page](https://loizenai.com/wp-content/uploads/2020/11/Profile-page-of-Adam-user.png)

- Reactjs Admin page:

![Reactjs Admin page](https://loizenai.com/wp-content/uploads/2020/11/Admin-Content-page.png)

## Related post

- [Angular 10 + Nodejs JWT Token Based Authentication with MySQL Example – Express RestAPIs + JWT + BCryptjs + Sequelize](https://loizenai.com/angular-10-nodejs-jwt-authentication-mysql-examples-tutorials/)
- [Reactjs Nodejs MongoDB CRUD Example – MERN Stack Application](https://loizenai.com/reactjs-nodejs-mongodb-crud/)
- [Reactjs Jwt SpringBoot Token Authentication Example – React.js Spring Security Login](https://loizenai.com/jwt-springboot-reactjs-token-authentication-example/)
