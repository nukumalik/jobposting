## Introduction
This is my personal project to pass bootcamp first task and this is website for people to make simple job posting website. This is open source and feel free to use and bought me.

## Prerequiste
 - Node.js
 - MySQL
 - Nodemon
 - Redis

## Installation
### Clone
    $ git clone https://github.com/nukumalik/restful-jobposting.git
    $ cd restful-jobposting
    $ npm install

### SQL
Create Database

	$ CREATE DATABASE restful_jobposting;
	$ USE resutful_jobposting;

Create job table

	$ CREATE TABLE jobs(
		id varchar(50) PRIMARY KEY,
		name varchar(50),
		description text,
		id_category int(5),
		salary int(11),
		location varchar(250),
		id_company varchar(50),
		created_at datetime,
		updated_at datetime
		);

Create company table
	
	$ CREATE TABLE companies(
		id varchar(50) PRIMARY KEY,
		name varchar(50),
		logo text,
		location varchar(250),
		description text
		);

Create category table

	$ CREATE TABLE categories(
		id int(5) AUTO_INCREMENT PRIMARY KEY,
		name varchar(30)
		);

Create user table

	$ CREATE TABLE users(
		id varchar(50) AUTO_INCREMENT PRIMARY KEY,
		name varchar(50),
		username varchar(30),
		born date,
		gender varchar(1),
		address varchar(250),
		email varchar(50),
		password varchar(100)
		);

### Create Enviroment Variable
    $ cp .env.example .env
    $ nano .env

### Start Development Server
    $ npm run dev

### Other Depedencies
 - bcryptjs
 - cors
 - jsonwebtoken
 - passport
 - passport-jwt
 - mysql
 - redis
 - multer
 - morgan

