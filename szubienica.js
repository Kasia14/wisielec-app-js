const board = document.querySelector('.board');
const alphabet = document.querySelector('.alphabet');
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
    for(i=0; i<=34;i++){
        letters = letters + `<div class="letter"> ${alphabetLetters[i]} </div>`;
        if((i+1) % 7 == 0){
            letters+=`<div style="clear:both;"></div>`
        }
    }
    alphabet.innerHTML = letters;

    thisIsMyPassword();
}