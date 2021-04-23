const assert = require('chai').assert
const mainObj = require('../src/main');

describe("main file test", ()=> {
    it('should be pass when name is correct', ()=> {
       var result = mainObj.firstName("keep")
       assert.equal(result, true)
    });
});