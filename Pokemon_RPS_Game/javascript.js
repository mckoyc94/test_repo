const page = $("body")
const starters = ["Charmander", "Squirtle", "Bulbasaur"]
const garyChoice = starters[Math.floor(Math.random() * starters.length)]

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

const initiateBattle = choice => {
    const opponent = $("<p>")
    const player = $("<p>")
    let pokemon;
    // console.log(garyChoice)
    
    switch (choice){
        case "fire":
        pokemon = "Charmander";
        break;
        case "water":
        pokemon = "Squirtle";
        break;
        case "grass":
        pokemon = "Bulbasaur";
    }
               
    page.empty()
    page.append($("<h1>").text("Let the Battle Begin"))
    page.append(opponent.text(`Gary chose ${garyChoice}`))
    page.append(player.text(`You chose ${pokemon}`))

    if(pokemon === "Charmander" && garyChoice === "Bulbasaur"|| pokemon === "Squirtle" && garyChoice === "Charmander" || pokemon === "Bulbasaur" && garyChoice === "Squirtle"){
        winCount++;
        page.append($("<h2>").text("You won!"))
    } else if (pokemon === "Squirtle" && garyChoice === "Bulbasaur"|| pokemon === "Bulbasaur" && garyChoice === "Charmander" || pokemon === "Charmander" && garyChoice === "Squirtle"){
        lossCount++;
        page.append($("<h2>").text("Gary won!"))
    } else if (pokemon === garyChoice){
        tieCount++;
        page.append($("<h2>").text("You and Gary tied..."))
    }

    page.append($("<button>").text("Try Again?").attr("id", "retry"))
}

$("button").on('click', event => {
    const playerChoice = event.target.id
    event.preventDefault()
    initiateBattle(playerChoice) 
})