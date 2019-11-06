class Utility {
    constructor() {

    }
    static getAverage(arr) {
        let total = 0
        arr.forEach(e => {total+= e});
        return Math.round(total / arr.length)
        //math.round somewhere in here
    }

    static desconstructStringToNumArr(str) {
        let arrStr = str.split(",");
        let arrNum = arrStr.map((item) => {
            return parseInt(item);
        })

        return arrNum;
    }

    static FuelEfficient(average){
        let fuelAverage = average;
        if(fuelAverage > 200){
            return `With a fuel consumption average of ${fuelAverage} miles per tank, you drive a fuel efficient vehicle.`
        }
        else{
            return `With a fuel consumption average of ${fuelAverage} miles per tank, your vehicle isn't the best with fuel efficiency.`
        }
    }
}