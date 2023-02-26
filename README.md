# GUI Automation Playground
That is a simple React application for playing with a test automation framework.

**Disclaimer:** I built this app to play around with automated tests. I have limited knowledge of React, so keep in mind that this project probably isn't the best example of good coding practices, etc.
This application is also highly insecure - the simplified authentication feature is made for demo use.

## Live Demo
**Open the link: [https://rafaljab.github.io/gui-automation-playground/](https://rafaljab.github.io/gui-automation-playground/)**

## Dependencies
* [Node.js](https://nodejs.org/) (I use version 18.12.1, but you can probably use a newer version too)

## Set Up
To download the repository and install other dependencies, run the following commands:
```bash
git clone https://github.com/rafaljab/gui-automation-playground.git
cd gui-automation-playground
npm install
```

## Running Locally
You can start the application manually or by using a ready-made CMD script.

### Manually
Run the following command to build the React application (dev mode):
```bash
npm start
```
Your web browser should automatically open to default: [http://localhost:3000/gui-automation-playground](http://localhost:3000/gui-automation-playground).

### Using CMD Script (Windows)
Just open the `start-app.cmd` file. It will run the command for you.

## Features
* Login mock with a warning alert - [Screenshot](attachments/login.png)
    * The authentication state is saved in local storage
* Shop with products and cart page (inspired by [Dave Gray's Typescript Course](https://github.com/gitdagray/typescript-course)) - [Screenshot1](attachments/shop1.png) | [Screenshot2](attachments/shop2.png)
* TODOs list with saving in local storage - [Screenshot](attachments/todos.png)
