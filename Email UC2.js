function validateEmail(email){
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z]+$/;
    
    return regex.test(email);
}

let email = "abs@bridgelabz";
console.log(validateEmail(email));