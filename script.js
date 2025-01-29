function generatePassword() {
    
    const length = parseInt(document.getElementById("length").value)
    const language = document.getElementById("language").value
    const complexity = document.getElementById("complexity").value

    let charset = "";

    if (language === 'en') {
        if (complexity === 'simple') {
            charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqprstuvwxyz'
        }
        else if (complexity === 'medium') {
            charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqprstuvwxyz0123456789'
        } else {
            charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqprstuvwxyz0123456789!@#$%^&*()_+'
        }
    }

    else if (language === 'ru') {
        if (complexity === 'simple') {
            charset = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФЦЧШЩЪЫЬЭЮЯабвгеёжзийклмнопрстуфцчшщъыьэюя'
        }
        else if (complexity === 'medium') {
            charset = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФЦЧШЩЪЫЬЭЮЯабвгеёжзийклмнопрстуфцчшщъыьэюя0123456789'
        } else {
            charset = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФЦЧШЩЪЫЬЭЮЯабвгеёжзийклмнопрстуфцчшщъыьэюя0123456789!@#$%^&*()_+'
        }
    }

    let password = "";
    let i = 0;

    while (i < length) {
        const randomIndex = Math.floor(Math.random()*charset.length)

        password += charset[randomIndex]
        i++;
    }
    document.getElementById("password").textContent = password;
}

document.getElementById("generate").addEventListener("click",generatePassword);
