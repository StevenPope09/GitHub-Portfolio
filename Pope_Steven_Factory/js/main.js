//Singleton Creational Design Patterns
window.addEventListener("load", function () {
    //instantiate Singleton
    let myAssignment = Factory_Assignment.getInstance();
})

class Factory_Assignment {
    constructor() {
        //add second button in html and add functionality to it like week 1

        document.querySelector('#enterButton').addEventListener("click", e => {
            e.preventDefault()
            let type = document.querySelector('#vehicleType')
            let make = document.querySelector('#vehicleMake')
            let model = document.querySelector('#vehicleModel')
            let year = document.querySelector('#vehicleYear')
            let vehicleList = []
            
            if (type.value == "" || make.value == "" || model.value == "" || year.value == "") {

                let alertField = document.querySelector('#alertField')

                if (alertField) {
                    let alert = ""

                    alert += '<div class="alert alert-danger" role="alert">'
                    alert += '<p>' + "Please do not leave any inputs blank" + '</p>'
                    alert += '</div>'

                    alertField.innerHTML = alert;
                }
                return
            } 
            else if(isNaN(year.value)){
                let alertField = document.querySelector('#alertField')

                if (alertField) {
                    let alert = ""

                    alert += '<div class="alert alert-danger" role="alert">'
                    alert += '<p>' + "Please enter a number for the year." + '</p>'
                    alert += '</div>'

                    alertField.innerHTML = alert;
                }
                return
            }
            
            else {
               alertField.innerHTML = ""
                let newVehicle = VehicleFactory.createVehicle(type.value.toLowerCase())
                if(!newVehicle){
                    return
                }
                else{
                    //build object here
                    newVehicle.make = make.value;
                    newVehicle.model = model.value;
                    newVehicle.year = year.value;
                    vehicleList.push(newVehicle)
                    for(let vehicle of vehicleList){
                        console.log(vehicle)
                    }

                    let vehicleSection = document.querySelector('#vehicleInfo')
                    
                    if(vehicleSection){
                        let vehicleInfo = ""

                        vehicleInfo += '<div id="vehicle">'
                        vehicleInfo += '<h3>'+ type.value.toLowerCase() + '</h3>'
                        vehicleInfo += '<p>'+ "Vehicle Make: <strong>"+ newVehicle.make + '</strong></p>' 
                        vehicleInfo += '<p>'+ "Vehicle Make: <strong>"+ newVehicle.model + '</strong></p>' 
                        vehicleInfo += '<p>'+ "Vehicle Make: <strong>"+ newVehicle.year + '</strong></p>' 
                        vehicleInfo += '<p>'+ Utility.vehicleType(type.value.toLowerCase()) + '</p>'
                        vehicleInfo += '</div>'

                        vehicleSection.innerHTML = vehicleInfo
                    }

                    document.querySelector('#form').reset()
                }
            }
        })

    }

    static getInstance() {
        //is there an instance variable attached to the class?
        // If SO! Don't create. If NO, then its ok to Create!
        if (!Factory_Assignment._instance) {
            Factory_Assignment._instance = new Factory_Assignment()
            return Factory_Assignment._instance
        } else {
            throw "Sinful! Trying to create second Singleton"
        }

    }
}