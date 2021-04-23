const assert = require('chai').assert
const mainObj = require('../src/main');

describe("Valid First Name", ()=> {
    it('should be true when name is correct', ()=> {
       var result = mainObj.firstName("Deep")
       assert.equal(result, true)
    });

    it('should be fail when name is incorrect', ()=> {
        var result = mainObj.firstName("deep")
        assert.equal(result, false)
     });

     it('should be fail when name is less than 3 character', ()=> {
        var result = mainObj.firstName("De")
        assert.equal(result, false)
     });
});

describe("Valid Last Name", ()=> {
    it('should be true when name is correct', ()=> {
       let result = mainObj.lastName("Deep")
       assert.equal(result, true)
    });

    it('should be fail when name is incorrect', ()=> {
        var result = mainObj.lastName("deep")
        assert.equal(result, false)
     });

     it('should be fail when name is less than 3 character', ()=> {
        var result = mainObj.lastName("De")
        assert.equal(result, false)
     });
});