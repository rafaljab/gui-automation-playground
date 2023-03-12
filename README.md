# GUI Automation Playground
That is a simple React application for playing with a test automation framework.

**Disclaimer:** I built this app to play around with automated tests. 
I have limited knowledge of React, so keep in mind that this project probably isn't the best example of good coding practices, etc.
This application is also highly insecure - the simplified authentication feature is made only for demo use.

## Live Demo
**Open the link: [https://rafaljab.github.io/gui-automation-playground](https://rafaljab.github.io/gui-automation-playground)**

## Features
* Login mock with a warning alert - [Screenshot](attachments/login.png)
    * The authentication state is saved in local storage
* Shop with products and cart page (inspired by [Dave Gray's Typescript Course](https://github.com/gitdagray/typescript-course)) - [Screenshot1](attachments/shop1.png) | [Screenshot2](attachments/shop2.png)
    * Shop products are fetched with the [dummyJSON](https://dummyjson.com/) REST API (so you need an internet connection for this to work if you run the app locally).
* TODOs list with saving in local storage - [Screenshot](attachments/todos.png)

## Usage
For your test automation practice, you can:
* use a deployed application (the latest release) that is available online - link to live demo above, or
* clone the repository and run the application in dev-mode (recent changes; if you synchronize the repository in the future, you'll probably have to adjust the tests), or
* if you need a stable application, download a zip package with a specific release and run it locally in dev-mode.

### Dependencies
* [Node.js](https://nodejs.org/) (I use version 18.12.1, but you can probably use a newer version too)

### Set-Up
**Variant 1:** Clone the repository

To clone the repository and install other dependencies, run the following commands:
```bash
git clone https://github.com/rafaljab/gui-automation-playground.git
cd gui-automation-playground
npm install
```
If you want more freedom, you can fork the repository first instead of cloning it directly.

**Variant 2:** Download release

1. Download the package with the [selected release](https://github.com/rafaljab/gui-automation-playground/releases) (zip file with source code).
2. Unzip the file to the desired location.
3. Go to the directory with the `package.json` file and install dependencies by running `npm install`.

```bash
git clone https://github.com/rafaljab/gui-automation-playground.git
cd gui-automation-playground
npm install
```

### Run App Locally
You can start the application manually (A) or by using a ready-made CMD script (B).

**A) Manually**

Run the following command to start the React application (dev mode):
```bash
npm start
```
Your web browser should automatically open to default: [http://localhost:3000/gui-automation-playground](http://localhost:3000/gui-automation-playground).

**B) Using CMD Script (Windows)**

Just open the `start-app.cmd` file. It will run the command for you.

## Tests
You can find end-to-end automated tests for GUI in separate repositories:
- [helloPlaywrightPy](https://github.com/rafaljab/helloPlaywrightPy) - Playwright with Python
- [hello-playwright-ts](https://github.com/rafaljab/hello-playwright-ts) - Playwright with Typescript
