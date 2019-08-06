
class Automobile {
    constructor(make, model, year, price){
        this.make = make
        this.model = model 
        this.year = year
        this.price = price
    }

    displayAuto(){
 
       console.log( "hello customer, you picked " + this.make + " " + this.model + " " + this.year +  " for $" + this.price )
    }
}

let dodge = new Automobile("dodge", "ram", "2012", "14000");
let chevy = new Automobile("chevy", "Silverado", "2018", "24000");
dodge.displayAuto();
chevy.displayAuto();

let auto1 = document.querySelector('.auto1').innerHTML= dodge.displayAuto();