class Utility {
    constructor() {

    }
    static vehicleType(type){
        if(type == "truck"){
            let truck = "With your choice of a truck you will be the talk of the town! Don't forget to take it offroading!"
            return truck
        }
        else if(type == "car"){
            let car = "From compact to sedan any and every car has it's pros! Be sure to get Fast and Furious in your ride, but remember there's more to life then that quarter mile."
            return car
        }
        else if(type == "plane"){
            let plane = "With this plane you'll be sure to give the Blue Angels a run for their money! Fly High and Fly True!"
            return plane
        }
        else if(type == "boat"){
            let boat = "Boat usually means (Bust Out Another Thousand) but not in your case! This boat listed above is a work of art!"
            return boat
        }
    }
}