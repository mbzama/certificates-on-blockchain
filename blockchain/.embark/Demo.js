import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let DemoJSONConfig = {
  "contract_name": "Demo",
  "address": "0x2344330577dAcbc51AaA644137BA602D24f53530",
  "code": "608060405234801561001057600080fd5b50604051602080610114833981016040525160005560e1806100336000396000f30060806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c146092575b600080fd5b348015606257600080fd5b50606960a4565b60408051918252519081900360200190f35b348015608657600080fd5b50609060043560aa565b005b348015609d57600080fd5b50606960af565b60005481565b600055565b600054905600a165627a7a723058202a056db30eb81a195b4ce806974021f81f89f908a9745bfceb13f3ad88ab89f90029",
  "runtime_bytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c146092575b600080fd5b348015606257600080fd5b50606960a4565b60408051918252519081900360200190f35b348015608657600080fd5b50609060043560aa565b005b348015609d57600080fd5b50606960af565b60005481565b600055565b600054905600a165627a7a723058202a056db30eb81a195b4ce806974021f81f89f908a9745bfceb13f3ad88ab89f90029",
  "real_runtime_bytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c146092575b600080fd5b348015606257600080fd5b50606960a4565b60408051918252519081900360200190f35b348015608657600080fd5b50609060043560aa565b005b348015609d57600080fd5b50606960af565b60005481565b600055565b600054905600a165627a7a723058202a056db30eb81a195b4ce806974021f81f89f908a9745bfceb13f3ad88ab89f90029",
  "swarm_hash": "2a056db30eb81a195b4ce806974021f81f89f908a9745bfceb13f3ad88ab89f9",
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
let Demo = new EmbarkJS.Contract(DemoJSONConfig);

__embarkContext.execWhenReady(function() {

Demo.setProvider(web3.currentProvider);

Demo.options.from = web3.eth.defaultAccount;

});
export default Demo;
