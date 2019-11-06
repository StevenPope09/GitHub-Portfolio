class VehicleFactory{
    constructor(){

    }
    static createVehicle(type){

        if(type == "truck"){
            return new Truck()
        }
        else if(type == "car"){
            return new Car()
        }
        else if(type == "plane"){
            return new Plane()
        }
        else if(type == "boat"){
            return new Boat()
        }
        else{
            let alertField = document.querySelector('#alertField')

            if(alertField){
                let alert = ""

                alert += '<div class="alert alert-danger" role="alert">'
                alert += '<p>' + "That is a type of vehicle that the factory cannot create! Please stay in the parameters of Truck, Car, Plane, or Boat" + '</p>'
                alert += '</div>'

                alertField.innerHTML = alert;
                
            }
            return
        }
    }
}