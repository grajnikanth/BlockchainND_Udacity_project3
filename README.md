# RESTful Web API with Node.js Framework 
# Connect Private Blockchain to Front-End Client via APIs

This project is part of the Udacity Blockchain Nanodegree course. In this project, we connected the previously developed private Blockchain to Front-End Client via APIs. GET and POST endpoints were created. GET endpoint implemented will let the client obtain a Block information given the Block Height. POST endpoint let's the client udpate the Blockchain by posting new blocks to the private Blockchain. The code from the project for the persistent private blockchain was used as the basis for this code. In addition, Hapi.js framework was used to create the API. Postman was used to test the web services developed.

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

In this project I used the Hapi.js frameworks to create the localhost server at port 8000.

## GET endpoint

The web API GET endpoint responds to a request using a URL path with a block height parameter or properly handles an error if the height parameter is out of bounds.

The URL is http:localhost:8000/api/block/:index

## POST endpoint

The web API POST endpoint allows posting a new block with the data payload option to add data to the block body. Block body supports a string of text.

The URL is http://localhost:8000/block

If the block data posted is empty a block will not be added and an error is reported back to the client browser.

## Testing Endpoints of API
To test the web services developed in this project the tool "Postman" was used. Postman is a collaboration platform for API development. Postman was developed for sending HTTP requests in a simple and quick way.



## What did I learn with this Project

* I was able to create a localhost:8000 server with GET and POST endpoints to respond to client requests.
* I was able to use async and await for dealing with asynchronous code.
* I was able to initialize a private blockchain and create mockdata for the private blockchain.
