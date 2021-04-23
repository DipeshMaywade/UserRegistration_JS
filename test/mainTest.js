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

describe("Valid Email", ()=> {
    it('should be true when eamil is correct', ()=> {
       let result = mainObj.email("abc.xyz@bl.co.in")
       assert.equal(result, true)
    });

    it('should be fail when email is incorrect', ()=> {
        var result = mainObj.email("abc.xyz@bldfkjs.co.in")
        assert.equal(result, false)
     });

     it('should be fail when email is incorrect', ()=> {
        var result = mainObj.email("xyz@bldfkjs.co.in")
        assert.equal(result, false)
     });
});

describe("Valid Phone", ()=> {
    it('should be true when phone number is correct', ()=> {
       let result = mainObj.phone("91 3424323244")
       assert.equal(result, true)
    });

    it('should be fail when phone number is more then 10 digits', ()=> {
        var result = mainObj.phone("13 43232432448")
        assert.equal(result, false)
     });

     it('should be fail when phone is less then 10 digits', ()=> {
        var result = mainObj.phone("23 21312312")
        assert.equal(result, false)
     });
});

describe("Valid Password", ()=> {
    it('should be true when password has minimum 8 character', ()=> {
       let result = mainObj.password("dsDd@3442")
       assert.equal(result, true)
    });

    it('should be fail when password has less then 8 character', ()=> {
        let result = mainObj.password("dD@32")
        assert.equal(result, false)
     });

     it('should be true when password has atleat one upper case', ()=> {
        let result = mainObj.password("dsDd@3442")
        assert.equal(result, true)
     });
 
     it('should be fail when password has no upper cases', ()=> {
         let result = mainObj.password("d@3sdff2")
         assert.equal(result, false)
      });

      it('should be true when password has atleat one numeric', ()=> {
        let result = mainObj.password("dsDd@3442")
        assert.equal(result, true)
     });
 
     it('should be fail when password has no numeric', ()=> {
         let result = mainObj.password("d@DFdfffd")
         assert.equal(result, false)
      });

      it('should be true when password has exactly 1 special char', ()=> {
        let result = mainObj.password("dsDd@3442")
        assert.equal(result, true)
     });
 
     it('should be fail when password has no special Char', ()=> {
         let result = mainObj.password("dDFdfffd12")
         assert.equal(result, false)
      });
});

describe("Valid Email", ()=> {
    it('should be true when eamil is correct', ()=> {
       let result = mainObj.emailSample("abc-100@yahoo.com")
       assert.equal(result, true)
    });

    it('should be fail when email is incorrect', ()=> {
        var result = mainObj.emailSample("abc.100@yahoo.com")
        assert.equal(result, true)
     });

     it('should be fail when email is incorrect', ()=> {
        var result = mainObj.emailSample("abc111@abc.com")
        assert.equal(result, true)
     });

     it('should be fail when email is incorrect', ()=> {
        var result = mainObj.emailSample("abc-100@abc.net")
        assert.equal(result, true)
     });

     it('should be fail when email is incorrect', ()=> {
        var result = mainObj.emailSample("abc.100@abc.com.au")
        assert.equal(result, true)
     });

     it('should be fail when email is incorrect', ()=> {
        var result = mainObj.emailSample("abc@1.com")
        assert.equal(result, true)
     });

     it('should be fail when email is incorrect', ()=> {
        var result = mainObj.emailSample("abc@gmail.com.com")
        assert.equal(result, true)
     });

     it('should be fail when email is incorrect', ()=> {
        var result = mainObj.emailSample("abc+100@gamil.com")
        assert.equal(result, true)
     });
});