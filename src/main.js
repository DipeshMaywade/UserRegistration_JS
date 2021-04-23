class Registration {
  firstName = (name) => {
    let regex = new RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (name.match(regex)) {
      console.log("Entered Name Valid");
      return true;
    } else {
      console.log("Entered Name InValid");
      return false;
    }
  };

  lastName = (lastName) => {
    let regex = new RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (lastName.match(regex)) {
      console.log("Enterd Last Name is Valid");
      return true;
    } else {
      console.log("Enterd Last Name is InValid");
      return false;
    }
  };

  email = (email) => {
    let regex = new RegExp("abc[a-zA-Z0-9.]*@bl[.]co[.][a-z]{2,3}");
    if (email.match(regex)) {
      console.log("Correct Email");
      return true;
    } else {
      console.log("InCorrect Email");
      return false;
    }
  };

  phone = (phone) => {
    let regex = new RegExp("^[0-9]{2}[: :][0-9]{10}$");
    if (phone.match(regex)) {
      console.log("Correct Phone Number");
      return true;
    } else {
      console.log("InCorrect Phone Number");
      return false;
    }
  };

  password = (password) => {
    let regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]{1}).{8,}$"
    );
    if (password.match(regex)) {
      console.log("Valid Password");
      return true;
    } else {
      console.log("Invalid Password");
      return false;
    }
  };

  emailSample = (email) => {
    let regex = new RegExp(
      "^abc[a-zA-Z0-9.+-]*@[a-z0-9]*[.][a-z]{2,5}[.,a-z]*$"
    );
    if (email.match(regex)) {
      console.log("Correct Email");
      return true;
    } else {
      console.log("InCorrect Email");
      return false;
    }
  };
}

module.exports = new Registration();
