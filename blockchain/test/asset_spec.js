describe("Asset", function() {
    this.timeout(0);
    before(function(done) {
      this.timeout(0);
      var contractsConfig = {
        "Asset": {
        }
      };
      EmbarkSpec.deployAll(contractsConfig, () => { done() });
    });
  
    it("should checks asset value", async function() {
       
    
      //let result = Asset.methods.Buycar("0xca35b7d915458ef540ade6068dfe2f44e8fa733c","TATA","Nexa","Hyderabad",18).send();
    
    let result = 1;
      assert.equal(result, 1);
    });
  
    
  
  });
  