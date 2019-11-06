let SuperToon = function () {
    SuperToon.prototype = Object.create(Person.prototype)

    function SuperToon(name, stoneName) {
        console.log("Super Toon Created")
        Person.call(this, name)
        this.role = "All Mighty"
        this.universe = "I am everywhere"
        this.stone = new Stone(stoneName);
    }

    SuperToon.prototype.getPowers = function () {
        return [10000]
    }
    SuperToon.prototype.getMovie = function () {
        return SuperToon.movieLocation
    }
    SuperToon.prototype.getAverage = function () {
        return "I am enevitable!"
    }
    SuperToon.prototype.fightScene = function(){
        return `${this.name} is headed in to fight a glorious battle! With his ${this.stone.name} stone he will be unstopable`
    }
    
    let movieLocal = document.querySelector("#movieLocation")
    SuperToon.movieLocation = movieLocal.value
    movieLocal.addEventListener('keyup', (e) => {
        SuperToon.movieLocation = e.target.value;
    })

    return SuperToon
}()

