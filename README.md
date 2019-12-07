## Introduction

This is my personal project to pass bootcamp first task and this is website for people to make simple job posting website. This is open source and feel free to use and bought me.

## Frontend

For front end you can clone on this project: https://github.com/nukumalik/react-jobposting

![Job List](https://drive.google.com/open?id=1CqMegKshSmFUPZSlhgSCCHlSxfggKntC)

## Prerequiste

-   Node.js
-   MySQL
-   Nodemon
-   Redis

## Installation

### Clone

    $ git clone https://github.com/nukumalik/restful-jobposting.git
    $ cd restful-jobposting
    $ npm install

### SQL

Create Database

    $ CREATE DATABASE restful_jobposting;
    $ USE jobfindout;
    $ exit

Import restful_jobposting.sql

    $ mysql -u <user> -p jobfindout < jobfindout.sql

### Create Enviroment Variable

    $ cp .env.example .env
    $ nano .env

### Start Development Server

    $ npm run dev

### Other Depedencies

-   bcryptjs
-   cors
-   jsonwebtoken
-   passport
-   passport-jwt
-   mysql
-   redis
-   multer
-   morgan
