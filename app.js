
class Automobile {
    constructor(make, model, year, price){
        this.make = make
        this.model = model 
        this.year = year
        this.price = price
    }

    displayAuto(){
       console.log( this.make)
       console.log( "hello customer, you picked " + this.make + " " + this.model + " " + this.year +  " for $" + this.price )
    }
}

let chevy = new Automobile("dodge", "ram", "2012", "14000");
chevy.displayAuto();