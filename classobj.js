// class

class gun {
    // objects
    model (){
        console.log("M416");     
    }
    amo (){
        console.log("5.56mm");    
    }
    scope(){
        console.log("3x");  
    }
    mag (){
        console.log("external quick mag");   
    }
}
// method
const ret = new gun();
ret.model()
ret.amo()
ret.scope()
ret.mag()