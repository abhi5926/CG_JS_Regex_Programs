function validatePin(pin){
    const regex = /^\d{6}(?![A-Za-z])$/;
    
    return regex.test(pin);
}

let pin = "400080";
console.log(validatePin(pin));