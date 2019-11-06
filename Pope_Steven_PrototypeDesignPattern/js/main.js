//grab the different elements of HTML 
let addHeroBtn = document.querySelector("#addToon")
let showHeroesBtn = document.querySelector("#showToons")
let toonForm = document.querySelector("#toonForm")
let toonUni = document.querySelector("#universeSelect")
let toonRole = document.querySelector("#roleSelect")
let toonName = document.querySelector("#toonName")
let powers = document.querySelector("#attackPowers")
let stoneName = document.querySelector("#stoneName")

//create a new array to hold all of the heroes/toons
let toonLineup = [];
//SIngleton Creational Design Patterns

window.addEventListener("load", function () {
    console.log("page loaded")
    Assignment.getInstance()
})

class Assignment {
    constructor() {
        console.log("Singleton Created")
        // console.log("start code here")

        //addHero function to create new objects and store them in the array from above
        addHeroBtn.addEventListener('click', (e) => {
            e.preventDefault()
            //condtional to ensure user fills out all fields of the form
            if (toonName.value == "" || powers.value == "" || stoneName.value == "") {
                alert("Please fill out all fields before adding toon")
                return
            } else
                //check which "sort" of toon/hero to create
                if (toonRole.value == "God") {
                    //console.log("God Created");
                    //new supertoon object
                    let superToon = new SuperToon(toonName.value, stoneName.value);
                    //console.log(superToon.toString());

                    toonLineup.push(superToon)
                    toonForm.reset()
                    return
                } else {
                    //console.log("Created/Added Toon");
                    //new toon object
                    let newToon = new Toon(toonName.value, powers.value, toonRole.value, toonUni.value, stoneName.value)
                    //console.log(newToon.toString());
                    toonLineup.push(newToon)

                    toonForm.reset()
                }

        })

        showHeroesBtn.addEventListener('click', (e) => {
            e.preventDefault()
            console.log("Loaded Toons")
            //console.log(toonLineup);
            //invoke function to display heroes
            displayInfo()



        })


        function displayInfo() {
            //function displaying toon information.
            let heroDiv = document.getElementById("displayHeroes");
            heroDiv.innerHTML = "";
            let heroInfo = "";
            //loop to iterate through objects in toonLineup array
            for (let person of toonLineup) {
                heroInfo += '<h2>' + "Toon Information" + '</h2>'
                heroInfo += '<div class="container">'
                heroInfo += '<div class="row">'
                heroInfo += '<div id="heroInfo" class="col-12">'
                heroInfo += '<h3>' + person.name + '</h3>'
                heroInfo += '<p>' + "Universe: " + person.universe + '</p>'
                heroInfo += '<p>' + "Attack Powers: " + person.getPowers() + '</p>'
                heroInfo += '<p>' + "Average Attack Power: " + person.getAverage() + '</p>'
                heroInfo += '<p>' + "Role: " + person.role + '</p>'
                heroInfo += '<p>' + "Stone Name: " + person.stone.name + '</p>'
                heroInfo += '<p>' + "Movie Host: " + person.getMovie() + '</p>'
                heroInfo += '<h4>' + "Did someone say fight scene?!" + '</h4>'
                heroInfo += '<img src="images/marvel.gif" />'
                heroInfo += '<p>' + person.fightScene() + '</p>'
                heroInfo += '</div>' //
                heroInfo += '</div>' //
                heroInfo += '</div>' //

                heroDiv.innerHTML = heroInfo;

            }

        }

    }

    static getInstance() {
        //is there an instance variable attached to the class?
        // If SO! Don't create. If NO, then its ok to Create!
        if (!Assignment._instance) {
            Assignment._instance = new Assignment()
            return Assignment._instance
        } else {
            throw "Sinful! Trying to create second Singleton"
        }

    }
}