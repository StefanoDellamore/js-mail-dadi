//chiedere mail all'utente
const input = document. querySelector('button');
console.log('mail', mail, typeof mail);

input.addEventListener ('click', function(){
    const userMail = document.getElementById ('mail').value;

    //lista email approvate
    const validMail = [
        'stefano.info@boolean.com',
        'tutor.boolean@boolean.com',
        'staff.boolean@boolean.com',
        'info.boolean@boolean.com'
    ];

    const container = document.querySelector ('div')

    //2controllo email se valide

    //se email è verificata
    if (userMail == validMail [0] || [1] || [2] || [3]) {
        container.innerHTML += `
        <div>
            <h6> Email abilitata all'accesso </h6>
        </div> 
        `
    }
    //se email non è verificata
    else {
        alert('Inserire email abilitata')
    }
});
    