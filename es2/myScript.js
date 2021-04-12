// software deve chiedere all'utente di inserire un numero 

var numeriInseriti = [];
var somma = 0;

// ciclo che si ripete  per 10 volte
for (var i = 0; i < 10; i++) {

    //numero inserito dall'utente
    var inputUtente = parseInt(prompt("inserisci un numero. ne mancano " + (10-i)));
    

    if (Number.isNaN(inputUtente)) {
        alert("hai inserito un numero sbagliato")
        i--
    } else  {
        numeriInseriti.push(inputUtente)
        
        //bisogna sommarlo agli altri inseriti 
        somma += inputUtente
    }
}


//stampa la somma di tutti i numeri inseriti 
console.log("la somma dei numeri inseriti è " + somma);
console.log("l'utente ha inserito i seguenti numeri  " + numeriInseriti.join(", "));


