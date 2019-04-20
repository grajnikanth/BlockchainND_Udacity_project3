const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./Block.js');
const BlockChain = require('./BlockChain.js');

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} server
     */
    constructor(server) {
        this.server = server;
    //    this.blocks = [];
        this.myBlockChain = new BlockChain.Blockchain();
        this.initializeMockData();
        this.getBlockByIndex();
        this.postNewBlock();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.server.route({
            method: 'GET',
            path: '/api/block/{index}',
            handler: async (request, h) => {
               let index = request.params.index;
               let blockHeight = 0;
               await this.myBlockChain.getBlockHeight().then((height) => {
                 blockHeight = height;
               });

               if(index < blockHeight && index >= 0) {
                 let blockAux = "";
                 await this.myBlockChain.getBlock(index).then((block) => {
               		blockAux = block;
               	 }).catch((err) => { console.log(err);});
                 return JSON.stringify(blockAux);
               }
               else { return `The block at height ${index} does not exist`;}

            }
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.server.route({
            method: 'POST',
            path: '/api/block',
            handler: async (request, h) => {
              let data = request.payload.data;
              console.log(data);
              if(data) {
                let blockAux = new BlockClass.Block(data);
                let blockAdded = "";
                await this.myBlockChain.addBlock(blockAux).then((result) => {
            			console.log(result);
                  blockAdded = result;
            		});
                return JSON.stringify(blockAdded).toString();
              }
              else { return 'Cannot add empty data to blockchain';}
            }
        });
    }

    /**
     * Help method to inizialized Mock dataset, adds 10 test blocks to the blocks array
     */
    initializeMockData() {

      let self = this;

      (function theLoop (i) {
      	setTimeout(function () {
      		let blockTest = new BlockClass.Block("Test Block - " + (i + 1));
      		// Be careful this only will work if your method 'addBlock' in the Blockchain.js file return a Promise
      		self.myBlockChain.addBlock(blockTest).then((result) => {
      			console.log(result);
      			i++;
      			if (i < 10) theLoop(i);
      		});
      	}, 1000);
        })(0);
    }


}

/**
 * Exporting the BlockController class
 * @param {*} server
 */
module.exports = (server) => { return new BlockController(server);}
