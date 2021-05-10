/*

Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.*/

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var student = {
    name: "Jacopo",
    surname: "Guerini",
    age: 27
}
console.log(student);

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var name in student) {
    console.log(student.name, student.surname, student.age);
}

// Creare un array di oggetti di studenti.
var studentlist = [
    {
        name: "Jacopo",
        surname: "Guerini",
        age: 27
    },
    {
        name: "Michele",
        surname: "Visinoni",
        age: 18
    },
    {
        name: "Francesca",
        surname: "Faranna",
        age: 22
    },
    {
        name: "Sara",
        surname: "Zanetti",
        age: 24
    },
    {
        name: "Andrea",
        surname: "Persico",
        age: 22
    }
]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.


// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.