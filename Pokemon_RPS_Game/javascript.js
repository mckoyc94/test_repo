const page = $("body")
const starters = ["charmander", "squirtle", "bulbasaur"]
const garyChoice = starters[Math.floor(Math.random() * starters.length)]

const initiateBattle = choice => {
    let pokemon;
    // console.log(garyChoice)
    // page.empty()
    const cliBut = $(`#${choice}`)
    cliBut.css("background-color", "red")
    
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


}

$("button").on('click', event => {
    const playerChoice = event.target.id
    event.preventDefault()
    initiateBattle(playerChoice) 
})



// OLD CODE
// var WinCount = 0;
// var LossCount = 0;
// var TieCount = 0;

// var Starters = ['Bulbasaur', 'Squirtle', 'Charmander']


// for (var i = 0; i < 10; i++) {
//     var GaryChoice = Starters[Math.floor(Math.random() * Starters.length)];
    
//     var FirstPokemon = prompt('Choose your first pokemon by entering the letter for your choice: \n Bulbasuar [g] \n Squirtle [w] \n Charmander [f]')
//     FirstPokemon = FirstPokemon.toLowerCase();
//     if (FirstPokemon === 'g' || FirstPokemon === 'w' || FirstPokemon === 'f') {
//         if(FirstPokemon === 'g'){
//             alert("You chose Bulbasaur")
//         }   else if (FirstPokemon === 'w'){
//             alert("You chose Squirtle")
//         }   else{
//             alert("You chose Charmander")
//         }
        
//         alert("Gary chose " + GaryChoice)

//         if (FirstPokemon === 'g' && GaryChoice === "Squirtle" || FirstPokemon === 'w' && GaryChoice === 'Charmander' || FirstPokemon === 'f' && GaryChoice === 'Bulbasaur'){
//             WinCount++;
//             alert("You Beat Gary! \nThat'll show him!");
//             alert("You've beaten Gary " + WinCount + " times")
//         } else if (FirstPokemon === 'g' && GaryChoice === 'Charmander'|| FirstPokemon === 'w' && GaryChoice === 'Bulbasaur' || FirstPokemon === 'f' && GaryChoice === 'Squirtle'){
//             LossCount++;
//             alert("Gary beat you \nSmell ya Later!")
//             alert("Gary has beaten you " + LossCount + " times")
//         }   else {
//             TieCount++;
//             alert("You and Gary tied \nBoth Pokemon tried their best");
//             alert("You and Gary tied " + TieCount + " times")
//         }
    
//     } else {
//         alert("Please Choose a Pokemon")
//     }
// }
// console.log('Wins ' + WinCount)
// console.log('Losses ' + LossCount)
// console.log('Ties' + TieCount)
// OLD CODE