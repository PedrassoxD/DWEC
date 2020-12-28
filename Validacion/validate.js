const validateDni = (dni) => {
    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET'
    const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
    const nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
    const str = dni.toString().toUpperCase()

    if(!nifRexp.test(str) && !nieRexp.test(str)) document.getElementById("validateDNI").innerHTML = 'DNI Incorrecto.'

    const nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2')

    const letter = str.substr(-1)
    const charIndex = parseInt(nie.substr(0, 8)) % 23

    if(validChars.charAt(charIndex) === letter) console.log('DNI válido')
}

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)) console.log('email válido')
    else document.getElementById("validateEMAIL").innerHTML = 'Email Incorrecto.'
}

const validateIban = (iban) => {
    const ibanRegex = /([A-Z]{2})\s*\t*(\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d)\s*\t*(\d\d\d\d\d\d\d\d\d\d)/g

    if(ibanRegex.test(iban)) console.log('iban válido')
    else document.getElementById("validateIBAN").innerHTML = 'IBAN Incorrecto.'
}

const validatePasswordComplex = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if(passwordRegex.test(password)) console.log('password válido')
    else document.getElementById("validatePASS").innerHTML = 'Contraseña Incorrecta.'
}

const validatePasswordModerate = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if(passwordRegex.test(password)) console.log('password válido')
    else document.getElementById("validatePASS").innerHTML = 'Contraseña Incorrecta.'
}

const validateUsername = (username) => {
    //Alphanumeric string that may include _ and – having a length of 3 to 16 characters –
    const usernameRegex = /^[a-z0-9_-]{3,16}$/
    if(usernameRegex.test(username)) console.log('username válido')
    else document.getElementById("validateUSER").innerHTML = 'Usuario Incorrecto.'
}

const validateUrl = (url) => {
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/
    if(urlRegex.test(url)) console.log('url válida')
    else document.getElementById("validateURL").innerHTML = 'URL Incorrecta.'
}

const validateIP = (ip) => {
    const ipRegex = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/g
    if(ipRegex.test(ip)) console.log('ip válida')
    else document.getElementById("validateIP").innerHTML = 'IP Incorrecta.'
}

const validateHexadecimal = (hexadecimal) => {
    const hexadecimalRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
    if(hexadecimalRegex.test(hexadecimal)) console.log('hexadecimal válido')
    else console.log('hexadecimal incorrecto.')
}

const validateCreditCard = (card) => {
    const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    if(creditCardRegex.test(card)) console.log('card válido')
    else document.getElementById("validateCREDITC").innerHTML = 'Nº Tarjeta de Crédito Incorrecta.'
}

//validateEmail('dorian@gmail.com')



    const formulario = document.getElementById("formulario");
    const dni = document.getElementById("dni");
    const cuentaBanc = document.getElementById("cuentaBanc");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const usuario = document.getElementById("usuario");
    const url = document.getElementById("url");
    const ip = document.getElementById("ip");
    const tCredito = document.getElementById("tCredito");

    const formIsValid = {
        dni: false,
        email: false,
        cuentaBanc: false,
        pass: false,
        usuario: false,
        url: false,
        ip: false,
        tCredito: false
    
    }
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    
    });
    
    dni.addEventListener('change', (e) => {
        if(validateDni(dni) == "DNI válido"){
            formIsValid.dni = true;
        }
    });
    
    email.addEventListener('change', (e) => {
        if(validateEmail(email) == "email válido"){
            formIsValid.email = true;
        }
    });
    
    cuentaBanc.addEventListener('change', (e) => {
        if(validateIban(cuentaBanc) == "iban válido"){
            formIsValid.iban = true;
        }
    });
    
    pass.addEventListener('change', (e) => {
        if(validatePasswordModerate(pass) == "password válido"){
            formIsValid.password = true;
        }
    });
    
    usuario.addEventListener('change', (e) => {
        if(validateUsername(usuario) == "username válido"){
            formIsValid.username = true;
        }
    });
    
    url.addEventListener('change', (e) => {
        if(validateUrl(url) == "url válida"){
            formIsValid.url = true;
        }
    });
    
    ip.addEventListener('change', (e) => {
        if(validateIP(ip) == "ip válida"){
            formIsValid.ip = true;
        }
    });
    
    tCredito.addEventListener('change', (e) => {
        if(validateCreditCard(tCredito) == "card válido"){
            formIsValid.tarjeta = true;
        }
    });
    
    const validateForm = () => {
        const formValues = Object.values(formIsValid);
        const valid = formValues.findIndex(value => value == false);
        if(valid == -1){
            form.submit();
        }else{
            alert("DATOS INVALIDOS");
            console.log(dni.value);
            console.log(cuentaBanc.value);
            console.log(email.value);
            console.log(pass.value);
            console.log(usuario.value);
            console.log(url.value);
            console.log(ip.value);
            console.log(tCredito.value);
        }
    }
    