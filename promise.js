// promise 

// syntax 

// return new Promise((resolve, reject) => {})

    function go (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const shop = true
                if(shop){
                    resolve("i am going to the shop")
                }
                else{
                    reject("i am not going to the shop")
                } 
            }, 5000);
        })
    }
        function buy (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const product = false
                if(product){
                    resolve("buy the product")
                }
                else{
                    reject("not buy the product")
                }
            },3000);
        })
    }

        function get (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const change = true
                if(change){
                    resolve("collect the change")
                }
                else{
                    reject("forgot to collect the change")
                }
            }, 2000);
        })
    }
        function home (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const back = true
                if(back){
                    resolve("back to home")
                }
                else{
                    reject("back to playground")
                }
            },1000);  
        })
    }
    // go()
    // .then(val => {console.log(val);return buy() })
    // .catch(val => {console.log(val);return get()})
    // .then(val => {console.log(val);return home()})
    // .then(val => {console.log(val)})


async function js() {
  try {
    const a = await go()
    console.log(a);
    const b = await buy()
    console.log(b);
    const c = await get()
    console.log(c);
    const d = await home()
    console.log(d);   
  } catch (e) {
    console.log(e);
    
  }
}
js();



let a = "hello java"

console.log(a.split(" ").length);
