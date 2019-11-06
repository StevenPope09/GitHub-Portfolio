let Toon = function () {

    Toon.prototype = Object.create(Person.prototype)

    function Toon(name, powers, role, universe, stoneName) {
        console.log("Toon Created")
        Person.call(this, name)
        this.attackPowers = powers
        this.role = role
        this.universe = universe
        this.stone = new Stone(stoneName)
    }

    Toon.prototype.getPowers = function () {
        return this.attackPowers
    }
    Toon.prototype.getMovie = function () {
        return Toon.movieLocation
    }
    Toon.prototype.getAverage = function () {
        let powerArr = Utils.desconstructStringToNumArr(this.attackPowers)
        return Utils.getAverage(powerArr)
    }
    Toon.prototype.fightScene = function () {
        return `${this.name} is headed in to fight a glorious battle! With his ${this.stone.name} stone he will be unstopable. Who thought
        a ${this.role} could be so powerful.`
    }

    movieLocal = document.querySelector("#movieLocation")
    movieLocal.addEventListener('keyup', (e) => {
        Toon.movieLocation = e.target.value;
    })
    Toon.movieLocation = movieLocal.value

    return Toon
}()
