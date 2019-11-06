// Steven Pope Week 3 Assignment 2

//Singleton Creational Design Patterns
window.addEventListener("load", function () {
    console.log("page loaded")
    //instantiate Singleton

    let myAssignment = MVC_Assignment.getInstance();
})




class MVC_Assignment {
    constructor() {
        console.log("Singleton Created")

        let controller = new Controller()
    }

    static getInstance() {
        //is there an instance variable attached to the class?
        // If SO! Don't create. If NO, then its ok to Create!
        if (!MVC_Assignment._instance) {
            MVC_Assignment._instance = new MVC_Assignment()
            return MVC_Assignment._instance
        } else {
            throw "Sinful! Trying to create second Singleton"
        }

    }
}

class Controller {
    constructor() {
        
        this.model = new Model();
        this.view = new View();
        this.DO = new CarDO();
        document.querySelector('#enterButton').addEventListener('click', this.getData.bind(this));

    }
    getData(e) {
        e.preventDefault()
        this.DO.model = document.querySelector('#carModel').value
        this.DO.name = document.querySelector('#carName').value
        this.DO.year = document.querySelector('#carYear').value
        this.DO.milesPerTank = Utility.desconstructStringToNumArr(document.querySelector('#milesPerTank').value)
        
        while(this.DO.milesPerTank == "NaN"){
            alert("Please enter numerical values for miles per tank")
            return
        }
        
        //controller is done 
        let evt = new Event("controllerDone");
        evt.do = this.DO
        document.dispatchEvent(evt);

    }
}
class Model {
    constructor() {
        
        document.addEventListener("controllerDone", this.process)
    }
    process(e) {
       
        e.do.average = Utility.getAverage(e.do.milesPerTank)

        e.do.fuelEfficient = Utility.FuelEfficient(e.do.average)
        
        let evt = new Event("modelDone");
        evt.do = e.do;
        document.dispatchEvent(evt);
    }

}
class View {
    constructor() {
        
        document.addEventListener("modelDone", this.display)
    }
    display(e) {
        let d = e.do;

        let carSection = document.querySelector('#carInfo')

        if (carSection) {
            let vehicleInfo = "";

            vehicleInfo += '<div id="tableDiv">'
            vehicleInfo += '<h2>' + "Vehicle Information" + '</h2>'
            vehicleInfo += '<table class="table table-striped table-dark">'
            vehicleInfo += '<thead>'
            vehicleInfo += '<tr>'
            vehicleInfo += '<th scope="col">' + "#" + '</th>'
            vehicleInfo += '<th scope="col">' + "Vehicle Model" + '</th>'
            vehicleInfo += '<th scope="col">' + "Vehicle Name" + '</th>'
            vehicleInfo += '<th scope="col">' + "Year" + '</th>'
            vehicleInfo += '<th scope="col">' + "Miles per Tank" + '</th>'
            vehicleInfo += '<th scope="col">' + " Average Fuel Consumption" + '</th>'
            vehicleInfo += '</tr>'
            vehicleInfo += '</thead>'
            vehicleInfo += '<tbody>'
            vehicleInfo += '<tr>'
            vehicleInfo += '<th scope="row">' + "1" + '</th>'
            vehicleInfo += '<td>' + d.model + '</td>'
            vehicleInfo += '<td>' + d.name + '</td>'
            vehicleInfo += '<td>' + d.year + '</td>'
            vehicleInfo += '<td>' + d.milesPerTank + '</td>'
            vehicleInfo += '<td>' + d.average + '</td>'
            vehicleInfo += '</tr>'
            vehicleInfo += '</tbody>'
            vehicleInfo += '</table>'
            vehicleInfo += '<p>' + d.fuelEfficient + '</p>'
            vehicleInfo += '</div>'

            carSection.innerHTML = vehicleInfo;
        }
    }
}