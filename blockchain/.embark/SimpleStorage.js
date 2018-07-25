import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let SimpleStorageJSONConfig = {
  "contract_name": "SimpleStorage",
  "address": "0x7439B74184165147bB29b7860F4B03b4ddA5F483",
  "code": "608060405234801561001057600080fd5b50604051602080610114833981016040525160005560e1806100336000396000f30060806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c146092575b600080fd5b348015606257600080fd5b50606960a4565b60408051918252519081900360200190f35b348015608657600080fd5b50609060043560aa565b005b348015609d57600080fd5b50606960af565b60005481565b600055565b600054905600a165627a7a72305820ed57fe9bba616bb45e66b097699d6096116af029e2cd948993e5667f818ee4c40029",
  "runtime_bytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c146092575b600080fd5b348015606257600080fd5b50606960a4565b60408051918252519081900360200190f35b348015608657600080fd5b50609060043560aa565b005b348015609d57600080fd5b50606960af565b60005481565b600055565b600054905600a165627a7a72305820ed57fe9bba616bb45e66b097699d6096116af029e2cd948993e5667f818ee4c40029",
  "real_runtime_bytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c146092575b600080fd5b348015606257600080fd5b50606960a4565b60408051918252519081900360200190f35b348015608657600080fd5b50609060043560aa565b005b348015609d57600080fd5b50606960af565b60005481565b600055565b600054905600a165627a7a72305820ed57fe9bba616bb45e66b097699d6096116af029e2cd948993e5667f818ee4c40029",
  "swarm_hash": "ed57fe9bba616bb45e66b097699d6096116af029e2cd948993e5667f818ee4c4",
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
let SimpleStorage = new EmbarkJS.Contract(SimpleStorageJSONConfig);

__embarkContext.execWhenReady(function() {

SimpleStorage.setProvider(web3.currentProvider);

SimpleStorage.options.from = web3.eth.defaultAccount;

});
export default SimpleStorage;
