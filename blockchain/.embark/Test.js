import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let TestJSONConfig = {
  "contract_name": "Test",
  "address": "0x6A31Ab6EF88c238927Fab603b433a31bFa53aa99",
  "code": "608060405234801561001057600080fd5b50604051602080610114833981016040525160005560e1806100336000396000f30060806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c146092575b600080fd5b348015606257600080fd5b50606960a4565b60408051918252519081900360200190f35b348015608657600080fd5b50609060043560aa565b005b348015609d57600080fd5b50606960af565b60005481565b600055565b600054905600a165627a7a72305820418f7197fe5d016fad8c112435316505690e56a773118c9cab0ff602a0c790a90029",
  "runtime_bytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c146092575b600080fd5b348015606257600080fd5b50606960a4565b60408051918252519081900360200190f35b348015608657600080fd5b50609060043560aa565b005b348015609d57600080fd5b50606960af565b60005481565b600055565b600054905600a165627a7a72305820418f7197fe5d016fad8c112435316505690e56a773118c9cab0ff602a0c790a90029",
  "real_runtime_bytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c146092575b600080fd5b348015606257600080fd5b50606960a4565b60408051918252519081900360200190f35b348015608657600080fd5b50609060043560aa565b005b348015609d57600080fd5b50606960af565b60005481565b600055565b600054905600a165627a7a72305820418f7197fe5d016fad8c112435316505690e56a773118c9cab0ff602a0c790a90029",
  "swarm_hash": "418f7197fe5d016fad8c112435316505690e56a773118c9cab0ff602a0c790a9",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "45000",
      "executionCost": "20141",
      "totalCost": "65141"
    },
    "external": {
      "get()": "428",
      "set(uint256)": "20161",
      "storedData()": "384"
    }
  },
  "function_hashes": {
    "get()": "6d4ce63c",
    "set(uint256)": "60fe47b1",
    "storedData()": "2a1afcd9"
  },
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "storedData",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x2a1afcd9"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x60fe47b1"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "retVal",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6d4ce63c"
    },
    {
      "inputs": [
        {
          "name": "initialValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    }
  ]
}
;
let Test = new EmbarkJS.Contract(TestJSONConfig);

__embarkContext.execWhenReady(function() {

Test.setProvider(web3.currentProvider);

Test.options.from = web3.eth.defaultAccount;

});
export default Test;
