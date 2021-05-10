/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.*/

var student = {
    name: "Jacopo",
    surname: "Guerini",
    age: 27
}
console.log(student);

for (var age in student) {
    console.log(student.name);
    console.log(student.surname);
    console.log(student.age);
}

var studentlist = [
    {
        name: "Jacopo",
        surname: "Guerini",
        age: 27
    },
    {
        name: "",
        surname: "Guerini",
        age: 27
    },