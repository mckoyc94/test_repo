const start = $("#startScreen")
const page = $("#endScreen")
const starters = ["Charmander", "Squirtle", "Bulbasaur"]

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

const initiateBattle = choice => {
    const garyChoice = starters[Math.floor(Math.random() * starters.length)]
    const opponent = $("<p>")
    const player = $("<p>")
    let pokemon;
    
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
               
    start.css("visibility", "hidden")
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

    page.append($("<h3>").text(`Wins: ${winCount} Losses: ${lossCount} Ties: ${tieCount}`))
    page.append($("<button>").text("Try Again?").attr("id", "retry"))
}

$(".pick").on('click', event => {
    const playerChoice = event.target.id
    event.preventDefault()
    initiateBattle(playerChoice) 
})

page.on('click', 'button', event => {
    event.preventDefault()
    console.log("clicked")
    page.empty()
    start.css("visibility", "visible")
})
