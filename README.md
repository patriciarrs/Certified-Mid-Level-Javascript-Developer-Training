# Certified-Mid-Level-Javascript-Developer-Training
Boost Javascript skills with our self-paced Mid-Level certification training. Master advanced concepts, solve real-world challenges, and explore complex apps. Focus on signals, RxJs, and intermediate components to excel in the exam.

## Chapter 0: Start here

### What Do I Need?

To follow the JavaScript Developer Certification Training, you will need to have the following setup on your computer.

1. Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.

The code challenges in the JavaScript Developer Certification Program require Node.js LTS.

You can download and install Node.js by following the instructions provided on their official website

[Node.js](https://nodejs.org/en)

2. NPM

npm is a package manager for Node.js and is used to install dependencies and manage packages. It is included with the the node.js download.

3. Editor

The recommended code editor for the JavaScript Developer Certification Program is Visual Studio Code (VS Code). VS Code is a lightweight and versatile code editor that provides a wide range of features and extensions for Vue.js development.

You can download and install VS Code by following the instructions provided on their official website:

[Visual Studio Code](https://code.visualstudio.com/)

During the actual exam, you’ll be using an embedded IDE powered by StackBlitz. If you’d like to try out working in that editor to help prepare for the exam you can do so on their website.

Once you have installed these tools, you will be ready to start the JavaScript Developer Certification Training. If you encounter any issues during the setup process or while working through the program, please do not hesitate to reach out to the Discord community or our support team for assistance.

### How to Startup the Coding Challenges

Throughout the training you’ll download coding challenges to your local machine. These are the steps you should follow to run each challenge.

1. Ensure you have all the pre-requisite software installed from the previous lesson

2. Download the challenge from the training platform

3. Unzip the challenge folder

4. Open the folder in your IDE (we recommend [Visual Studio Code](https://code.visualstudio.com/))

#### Serve the Website that the JavaScript Runs In

1. Using your IDE’s built-in terminal or your regular terminal at the challenge directory, install project dependencies with the following command:

`npm install`

2. Start up the local dev server with the following command:

`npm run dev`

3. Visit the url output in the terminal after running the command to see the site. (Usually http://localhost:5173 if that port isn’t already in use.)

4. That’s it! You can work in the project files like normal to meet the requirements of the challenge

#### Why?

Why are coding challenges served this way? Why don’t we just open html files directly in the browser and link the related JavaScript files with a script tag?

The reason for the later steps above is because all coding challenges use [Vite under the hood](https://vite.dev/) to provide a dev server with Hot Module Reloading. This means you’ll see your code changes immediately upon file save in the browser without having to refresh the webpage. 🎉