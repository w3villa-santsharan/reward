# Introduction 
This project calculate reward according to given logic 

For every dollar spent over $50 on the transaction, the customer receives one point.
In addition, for every dollar spent over $100, the customer receives another point.

# Getting Started
1.	Installation process : After cloning the repo, on project directory run "npm install" to run project, if no port is defined in environment vairaible then by default project will run on 8000 port.

2.	Software dependencies :  Nodemon is only dev dependency. 
3.	Start Server : You can access the server on "http"//localhost:8000", it will show message "Server is running!" if server is up.
4.	API references : Reawrd can be calclauted by calling GET API with amount as param "http"//localhost:8000/reward/calculate/:amount"

# Build and Test
Build : To create build run "npm run build"
Test : To run test run "npm run test"

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 