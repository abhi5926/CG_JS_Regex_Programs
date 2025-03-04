function validatePin(pin){
    const regex = /^(?![A-Za-z])\d{3}\s?\d{3}(?![A-Za-z])$/;
    
    return regex.test(pin);
}

let pin = "400 080";
console.log(validatePin(pin));