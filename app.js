let length = 15 ;
let inputbox = document.getElementById("inputPassword")

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number = "1234567890"
let symbol = "!@#~$%^&*'()_+?><"

let passWord = upperCase + lowerCase + number + symbol

function generate() {
    let password = ""

    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]
    

    while (length > password.length) {
        password += passWord[Math.floor(Math.random() * passWord.length)]
    }

    inputbox.value = password
}

function copy() {
    inputbox.select()
    document.execCommand("copy")
}
