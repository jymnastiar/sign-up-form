const firstName = document.getElementById('firstName');
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const displayFirstName = document.getElementById("displayFirstName");
const displayLastName = document.getElementById("displayLastName");
const displayEmail = document.getElementById("displayEmail");
const displayPassword = document.getElementById("displayPassword");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.querySelector("form");

const warning = document.createElement("img");
warning.style.position = "absolute";
warning.src = "/images/icon-error.svg";
warning.alt = "error icon";
warning.style.right = "12px";
warning.style.top = "17px";
const warning1 = warning.cloneNode(true);
const warning2 = warning.cloneNode(true);
const warning3 = warning.cloneNode(true);

form.addEventListener("submit", function(event){
    let valid = true;

    if(!firstName.value.trim()){
        displayFirstName.style.display = "block";
        displayFirstName.textContent = `First Name cannot be empty`;
        firstName.classList.replace("border-gray-200", "border-red-400");
        document.getElementById("boxName").append(warning);
        warning.style.display = "block";
        firstName.placeholder = "";
        valid = false;
        
    }else{
        displayFirstName.style.display = "none";
        firstName.classList.replace("border-red-400", "border-gray-200");
        warning.style.display = "none";
    };
    if(!lastName.value.trim()){
        displayLastName.style.display = "block";
        displayLastName.textContent = `Last Name cannot be empty`;
        lastName.classList.replace("border-gray-200", "border-red-400");
        document.getElementById("boxLName").append(warning1);
        warning1.style.display = "block";
        lastName.placeholder = "";
        valid = false;
    }else{
        displayLastName.style.display = "none";
        lastName.classList.replace("border-red-400", "border-gray-200");
        warning1.remove();
        warning1.style.display = "none";
    };
    if( !email.value.includes("@") || 
        !email.value.trim() ||
        !email.value.slice(0, email.value.indexOf('@')) ||
        !email.value.slice(email.value.indexOf('@'), -1) ||
        !email.value.slice(email.value.indexOf('@'), -1).includes(".") ||
        email.value.includes(" ") ||
        email.value.slice(0, email.value.indexOf('@')).includes("@") ||
        !emailPattern.test(email.value)
    ){
        displayEmail.style.display = "block";
        displayEmail.textContent = `Looks like this is not an email`;
        email.classList.replace("border-gray-200", "border-red-400");
        document.getElementById("boxEmail").append(warning2);
        warning2.style.display = "block";
        email.placeholder = "email@example/com";
        email.classList.add("placeholder-red-400");
        email.value = "";
        valid = false;
    }else{
        displayEmail.style.display = "none";
        email.classList.replace("border-red-400", "border-gray-200");
        warning2.remove();
        warning2.style.display = "none";
    };
    if(!password.value.trim()){
        displayPassword.style.display = "block";
        displayPassword.textContent = `Password cannot be empty`;
        password.classList.replace("border-gray-200", "border-red-400");
        document.getElementById("boxPass").append(warning3);
        warning3.style.display = "block";
        password.placeholder = "";
        valid = false;
    }else{
        displayPassword.style.display = "none";
        password.classList.replace("border-red-400", "border-gray-200");
        warning3.remove();
        warning3.style.display = "none";
    };

    if (!valid){
        event.preventDefault();
    };
});

firstName.addEventListener("focus", () => {
    warning.style.display = "none";
});
lastName.addEventListener("focus", () => {
    warning1.style.display = "none";
});
email.addEventListener("focus", () => {
    warning2.style.display = "none";
});
password.addEventListener("focus", () => {
    warning3.style.display = "none";
});