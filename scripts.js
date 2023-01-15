var num1 = "r";
var num2 = "r";
var resto = 0;
var testo;
var turno = 1;
var ris;
var segno;

function AggNum(valore) {
    if (("num" + turno) == "num1") {
        if (num1 == "r") {
            num1 = valore;
        } else {
            num1 = num1 + valore;
        }
        //document.getElementById("num1").innerHTML = "Numero 1: " + num1;
        testo = num1;
        document.getElementById("valori").innerHTML = testo;
        moreWords("valori", 150);
    } else {
        if (num2 == "r") {
            num2 = valore;
        } else {
            num2 = num2 + valore;
        }
        //document.getElementById("num2").innerHTML = "Numero 2: " + num2;
        testo = num1 + " " + segno + " " + num2;
        document.getElementById("valori").innerHTML = testo;
        moreWords("valori", 150);
    }

}

function Segno(value) {
    segno = value;
    //document.getElementById("segno").innerHTML = "Segno: " + segno;
    testo = num1 + " " + segno;
    document.getElementById("valori").innerHTML = testo;
    moreWords("valori", 150);
    turno = turno + 1;
}


function Calcola() {
    if (num2 == 'r') {
        num2 = resto;
    }
    switch (segno) {
        case '+':
            ris = parseFloat(num1) + parseFloat(num2);
            break;

        case "-":
            ris = parseFloat(num1) - parseFloat(num2);
            break;

        case "*":
            ris = parseFloat(num1) * parseFloat(num2);
            break;

        case "/":
            ris = parseFloat(num1) / parseFloat(num2);
            break;

    }

    //document.getElementById("ris").innerHTML += ris;
    document.getElementById("valori").innerHTML = num1 + " " + segno + " " + num2 + " " + "=" + " " + ris
    moreWords("valori", 150);
    num1 = ris;
    resto = 0;
    num2 = 'r';


}

function Reset() {
    num1 = "r";
    resto = 0;
    num2 = "r";
    turno = 1;
    /*
    document.getElementById("num1").innerHTML = "Numero 1: ";
    document.getElementById("num2").innerHTML = "Numero 2: ";
    document.getElementById("segno").innerHTML = "Segno: ";
    document.getElementById("ris").innerHTML = "Risultato = ";
    */
    document.getElementById("valori").innerHTML = "";
}

function moreWords(id, maxHeight) {
    // creo una variabile per l'accesso alle proprietà di stile della textarea
    var txtarea = id && id.style ? id : document.getElementById(id);

    // se non riesco esco senza fa nulla
    if (!txtarea) return;

    // creo una variabile in cui salvo inizialmente l'altezza attuale della textarea
    var newHeight = txtarea.clientHeight;

    // se l'altezza massima non è stata impostata o questa è maggiore dell'altezza attuale...
    if (!maxHeight || maxHeight > newHeight) {

        // ridefinisco il valore di newHeight individuando il maggiore tra l'altezza dei contenuti (scrollHeight) ed il suo valore attuale
        newHeight = Math.max(txtarea.scrollHeight, newHeight);

        // se l'altezza massima è stata impostata..
        if (maxHeight)
        // ridefinisco il valore di newHeight individuando il valore minore tra l'altezza massima (maxHeight) ed il suo valore attuale
            newHeight = Math.min(maxHeight, newHeight);

        // se l'altezza calcolata (newHeight) è maggiore di quella attuale della textarea
        // effettuo la modifica ed allungo la textarea
        if (newHeight > txtarea.clientHeight) {
            txtarea.style.height = newHeight + "px";
            txtarea.style.overflow = "hidden";
        }

        //AGGIUNTA GIANLUCA
        //se l'atellza non serve si riduce

    }
    // se l'altezza massima è stata raggiunta mostro la barra di scorrimento
    else if (maxHeight && maxHeight <= newHeight) {
        txtarea.style.overflow = "auto";
    }
}