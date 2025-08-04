class car {
    constructor(brand,color,price,capacity){
        this.brand=brand
        this.color=color
        this.price=price
        this.capacity=capacity
    }
    output(){console.log(`I want a ${this.brand} car \nI want any dark color like ${this.color} or gray \nMy price range in upto ${this.price} maximum\nThe maximum of boot space ${this.capacity}`)}
}
const finaloutput = new car("TATA","black","38lakhs","5seator")
finaloutput.output()

