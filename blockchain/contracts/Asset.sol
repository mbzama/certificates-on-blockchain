pragma solidity ^0.4.18;

contract Asset{
    
   struct car{
       uint carID;
       string ManufacturedBy;
       string Model;
       string Location;
    }
    
    mapping(address => car) cars;
    
    address[] public particicpants;
    
    function Buycar(address _address,string company,string specific_model,string area,uint id)public constant returns(address[]){
        
        var Authenticator = cars[_address];
        Authenticator.ManufacturedBy = company;
        Authenticator.Model = specific_model;
        Authenticator.Location = area;
        Authenticator.carID = id;
        
        particicpants.push(_address)-1;
        
        return particicpants;
        
        
    }
    
    function getparticipants()constant returns(address[]){
        return particicpants;
    }
    
    function getcar(address __address)constant returns(string,string,string,uint){
      
        return(cars[__address].ManufacturedBy,cars[__address].Model,cars[__address].Location,cars[__address].carID);
    
        
    }
    
  
  
}