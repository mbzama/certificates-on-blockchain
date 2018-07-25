pragma solidity ^0.4.18;

contract Scm{
    
  string data;
  
      function setdata(string ob){
          data = ob;
      } 
      
      function get()constant public returns(string){
          
          return data;
          
      }
    
    
  
}