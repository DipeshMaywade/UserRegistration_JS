

class Registration {

    firstName = (name) => {
        var regex = new RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(name.match(regex)) return true
        else return false
    }

}

module.exports = new Registration();