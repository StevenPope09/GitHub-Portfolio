class Utils {
    constructor() {

    }
    static getAverage(arr) {
        let total = 0
        arr.forEach(e => {total+= e});
        return total / arr.length
    }

    static desconstructStringToNumArr(str) {
        let arrStr = str.split(",");
        let arrNum = arrStr.map((item) => {
            return parseInt(item);
        })

        return arrNum;
    }
}