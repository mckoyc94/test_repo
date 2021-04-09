var Conor = {
    favshow: "Danny Phantom",
    Girlfriend: 'Aubrey Leary',
    Pet: [{
        name: "Jasper",
        breed: "Collie/Chow",
        FavActivity: "walks",
    }],
    HikeMileage: 0,
    Enjoys: ['Hiking','Climbing', 'Video Games', 'Dungeons & Dragons'],
    
    HikesBaldMtn: function (){
        alert("You've Hiked " + this.HikeMileage + " miles")

        this.HikeMileage = (this.HikeMileage + 8)

        alert("You've Hiked " + this.HikeMileage + " miles")

    },

    HikesAT: function(){
        alert("You've Hiked " + this.HikeMileage + " miles")

        this.HikeMileage = this.HikeMileage + 2000

        alert("You've hiked " + this.HikeMileage + " miles")
    }
}

console.log("Conor's favorite show is " + Conor.favshow)
for (var i = 0; i < Conor.Enjoys.length; i++) {
    console.log(Conor.Enjoys[i])
}

Conor.HikesBaldMtn()
Conor.HikesAT()