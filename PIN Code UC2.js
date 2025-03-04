function ValidatePin(pin){
    const regex =  /^(?![A-Za-z])\d{6}$/;
    return regex.test(pin);
}

const pin = "400088";
console.log(ValidatePin(pin));