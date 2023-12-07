//1 genero numero random per utente

//2 genero numero random per computer

//3 confronto i due numeri:
    //se il numero generato per l'utente è maggiore l'utente vince
     //se il numero generato per l'utente è minore l'utente perde.
     //altriementi dichiaro pareggio.

    

const min = 1;
const max = 6;
const nPlayer = Math.floor(Math.random() * (max - min + 1) ) + min;
console.log ('nPlayer', nPlayer, typeof nPlayer);

const nPc = Math.floor(Math.random() * (max - min + 1) ) + min;
console.log ('nPc', nPc, typeof nPc);

if (nPlayer > nPc) {
    alert ('hai vinto' + `${nPlayer} vs. ${nPc}`)
}

else if (nPlayer < nPc) {
    alert ('hai perso' + `${nPlayer} vs. ${nPc}`)
}

else {
    alert ('pareggio' + `${nPlayer} vs. ${nPc}`);
}

