const board = document.querySelector('.board');
const alphabet = document.querySelector('.alphabet');
let howManyMistakes = 0;
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");

let alphabetLetters = new Array(35);
alphabetLetters[0] = "A";
alphabetLetters[1] = "Ą";
alphabetLetters[2] = "B";
alphabetLetters[3] = "C";
alphabetLetters[4] = "Ć";
alphabetLetters[5] = "D";
alphabetLetters[6] = "E";
alphabetLetters[7] = "Ę";
alphabetLetters[8] = "F";
alphabetLetters[9] = "G";
alphabetLetters[10] = "H";
alphabetLetters[11] = "I";
alphabetLetters[12] = "J";
alphabetLetters[13] = "K";
alphabetLetters[14] = "L";
alphabetLetters[15] = "Ł";
alphabetLetters[16] = "M";
alphabetLetters[17] = "N";
alphabetLetters[18] = "Ń";
alphabetLetters[19] = "O";
alphabetLetters[20] = "Ó";
alphabetLetters[21] = "P";
alphabetLetters[22] = "Q";
alphabetLetters[23] = "R";
alphabetLetters[24] = "S";
alphabetLetters[25] = "Ś";
alphabetLetters[26] = "T";
alphabetLetters[27] = "U";
alphabetLetters[28] = "V";
alphabetLetters[29] = "W";
alphabetLetters[30] = "X";
alphabetLetters[31] = "Y";
alphabetLetters[32] = "Z";
alphabetLetters[33] = "Ż";
alphabetLetters[34] = "Ź";

let password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();

let passwordLength = password.length;

let password1 = "";
for (i = 0; i < passwordLength; i++) {
    if (password.charAt(i) == " ") {
        password1 += " ";
    } else {
        password1 += "-";
    }
}


function thisIsMyPassword() {
    board.innerHTML = password1;
}

window.onload = start;

function start() {
    let letters = "";
    for (i = 0; i <= 34; i++) {
        let element = "lett" + i;
        letters = letters + `<div class="letter" id="${element}" onclick="check(this, '${alphabetLetters[i]}')"> ${alphabetLetters[i]} </div>`;
        if ((i + 1) % 7 == 0) {
            letters += `<div style="clear:both;"></div>`;
        }
    }
    alphabet.innerHTML = letters;

    thisIsMyPassword();
}

String.prototype.thisIsSign = function (place, sign) {
if(place > this.length -1){
    return this.toString();
}else{
    return this.substr(0, place) + sign + this.substr(place + 1);
}
}

// to przypiąc do div id
function check(div, letter) {
    let guessed = false;
    for (i = 0; i < passwordLength; i++) {
        if (password.charAt(i) == letter) {
            password1 = password1.thisIsSign(i, letter);
            guessed = true;
        }

    }

    if(guessed == true){
        yes.play();
        div.style.background = "#003300";
        
        div.style.border = "3px solid #00C000";
        div.style.cursor = "default";

        thisIsMyPassword();
    }else{
        no.play();
        div.style.background = "#330000";
        div.style.background = "#C00000";
        div.style.border = "3px solid #C00000";
        div.style.cursor = "default";

        div.setAttribute('onclick', ";");

        howManyMistakes++;
        let image = "img/s"+ howManyMistakes + ".jpg";
        document.querySelector('.szubienica').innerHTML = `<img src="${image}" alt="" />`
    }

    //win

    if(password == password1){
        alphabet.innerHTML = "Tak jest! Podano prawidłowe hasło: " + password + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
    }

    //looser

    if(howManyMistakes >=9){
        alphabet.innerHTML = "Przegrana! Podano prawidłowe hasło: " + password + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
    }
}

