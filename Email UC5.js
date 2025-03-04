function validateEmail(email){
    const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2})?$/;
    
    return regex.test(email);
}

let email = "abs.xyz@bridgelabz.co.in";
console.log(validateEmail(email));