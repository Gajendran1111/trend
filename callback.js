// call back


function walk (callback){
    setTimeout(() => {
        console.log("walk the dog");
        callback()
    },2000);
}
function clean (callback){
    setTimeout(() => {
        console.log("clean the car");
        callback()
    },500);
}
// walk(clean);
// callback hell 
function trash (callback){
    setTimeout(() => {
        console.log("put the trash out");
    },100);
}

walk(()=>{
    clean(()=>{
        trash(()=>{})
    })
})