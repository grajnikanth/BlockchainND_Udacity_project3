# Project #3. Connect Private Blockchain to Front-End Client via APIs

This is Project 3, Connect Private Blockchain to Front-End Client via APIs, in this project I created the GET and POST endpoints, to be able to obtain a Block from my private Blockchain and to post new blocks to my private Blockchain. The code from Project 2 for the persistent private blockchain was used as the basis for this code. In addition, Hapi.js framework was used to create the API.

## Setup project for Review.

To setup the project for review do the following:
1. Download the project.
2. Run command __npm install__ to install the project dependencies.
3. Run command __node app.js__ in the root directory.

## The Project

The file __app.js__ in the root directory has all the code to be able to run this project. This file implements the code to deploy a localhost server on port 8000.

The file __BlockController.js__ in the root directory has all the code for server response endpoints for GET and POST http requests. This file also contains code for initializing the private Blockchain and creating/initializing 10 additional blocks mock data.

Delete the chaindata/ folder created each time the app.js file is executed to delete the mock Blockchain data created.


## Node.js Frameworks

In this project I used the Hapi.js framworks to create the localhost server at port 8000.

## GET endpoint

The web API GET endpoint responds to a request using a URL path with a block height parameter or properly handles an error if the height parameter is out of bounds.

The URL is http:localhost:8000/api/block/:index

## POST endpoint

The web API POST endpoint allows posting a new block with the data payload option to add data to the block body. Block body supports a string of text.

The URL is http://localhost:8000/block

If the block data posted is empty a block will not be added and an error is reported back to the client browser.


## What did I learn with this Project

* I was able to create a localhost:8000 server with GET and POST endpoints to respond to client requests.
* I was able to use async and await for dealing with asynchronous code.
* I was able to initialize a private blockchain and create mockdata for the private blockchain.
