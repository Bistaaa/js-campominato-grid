//selezioniamo il bottone "play"
const play = document.getElementById("play");
console.log(play);

//selezioniamo il container
const grid = document.getElementById("grid");
console.log(grid);

//aggiungiamo funzionamento al click
play.addEventListener("click", function () {

    //rendiamo visibile il container attribuendogli la classe active
    grid.classList.add("active");
    console.log(grid);

    //creiamo i 100 quadrati
    for (let i = 0; i < 100; i++) {
        const newSquare = createSquare();
        grid.append(newSquare);

        //aggiungiamo la classe .square ai quadrati
        newSquare.classList.add("square");
    }

    //selezioniamo i quadrati
    const squares = document.getElementsByClassName("square");
    console.log(squares)

    //creiamo un ciclo per tutti i quadrati
    for (let i = 0; i < squares.length; i++) {

        //aggiungiamo funzioni al click dei quadrati
        squares[i].addEventListener("click", function () {

            //aggiungiamo la classe .blue al quadrato cliccato
            const blueSquare = colorSquare ("blue");
            console.log(blueSquare);
        });
    }
});






//FUNZIONI

//creazione quadrati
function createSquare() {
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    return newElement;
}

//aggiunta classe per colore
function colorSquare(color) {
    const elementColor = document.getElementsByClassName("square");
    elementColor.classList.add(color);  
}
