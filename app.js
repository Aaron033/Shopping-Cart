
class Automobile {
    constructor(make, model, year, price){
        this.make = make
        this.model = model 
        this.year = year
        this.price = price
    }

    displayAuto(){
       console.log( this.make)
       `hello there ${this.year}`
    }
}

let chevy = new Automobile("dodge", "ram", "2012", "14000");
chevy.displayAuto();