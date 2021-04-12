// l'utente inserisce due parole in successione con 2 prompt

//creazione 2 prompt
var parolaUno = prompt("inserisci una prima parola a piacere");
var parolaDue = prompt("Inserisci una seconda parola a piacere");


//qual è la parola + corta
var parolaCorta = "";
var parolaLunga = "";


if(typeof parolaUno !== "string" || typeof parolaDue !== "string") {
   console.log("le parole nn sn valide") 
}

//ho inserito testo = NaN=  parseInt(testo1)
//  parseInt(testo1)= 5 = ho inserito un numero valido anche se stringa 


//number.isNaN(NaN) = true ho inseirto testo e nn numeri
// number.isNaN(5) = false = ho inseirito un numero valido 

//number.isNaN(parseInt(testo1)) ===false 



if (!Number.isNaN(parseInt(parolaUno)) || !Number.isNaN(parseInt(parolaDue))) {

}

// software stampa prima la parola piu corta poi la parola piu lunga


if (parolaUno.length < parolaDue.length) {
    parolaCorta = parolaUno;
    parolaLunga = parolaDue;
} else if (parolaDue.length < parolaUno.length) {
    parolaCorta = parolaDue;
    parolaLunga = parolaUno;
}


console.log("la parola più corta è " + parolaCorta)