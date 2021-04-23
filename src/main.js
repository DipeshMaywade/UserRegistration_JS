

class Registration {

    firstName = (name) => {
        let regex = new RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(name.match(regex)) return true
        else return false
    }

    lastName = (lastName) => {
        let regex = new RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(lastName.match(regex)) return true
        else return false    
    }

}

module.exports = new Registration();