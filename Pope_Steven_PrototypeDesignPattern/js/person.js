let Person = function(){
    function Person(n){
        console.log("Person Created")
        this.name = n
    }
    Person.prototype.getPowers = function(){
        return null
    }
    Person.prototype.getAverage = function(){
        return null
    }
    // Person.prototype.fightScene = function(){
    //     return null
    // }
    return Person
}() 