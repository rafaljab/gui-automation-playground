# React Automation Playground
That is a simple React application for playing with a test automation framework.

**Disclaimer:** I built this app to play around with automated tests. I have limited knowledge of React, so keep in mind that this project probably isn't the best example of good coding practices, etc.

## Dependencies
* [Node.js](https://nodejs.org/) (I use version 18.12.1, but you can probably use a newer version too)

## Set up
To download the repository and install other dependencies, run the following commands:
```bash
git clone https://github.com/rafaljab/react-automation-playground.git
cd react-automation-playground
npm install
```
You also need to install globally the "json-server" package:
```bash
npm install -g json-server
```

## Running
You can start the application manually or by using a ready-made CMD script.
### Manually
Start a JSON server on port 3500:
```bash
npx json-server -w data/db.json -p 3500
```

In another terminal window run the following command to build the React application (dev mode):
```bash
npm start
```
Your web browser should automatically open to default: [http://localhost:3000/](http://localhost:3000/).

### Using CMD script (Windows)
Just open the `start-app.cmd` file. It will run all the commands for you.

## Features
* Login mock with a warning alert - [Screenshot](attachments/login.png)
* Shop with products and cart page (inspired by [Dave Gray's Typescript Course](https://github.com/gitdagray/typescript-course)) - [Screenshot1](attachments/shop1.png) | [Screenshot2](attachments/shop2.png)
* TODOs list - [Screenshot](attachments/todos.png)
