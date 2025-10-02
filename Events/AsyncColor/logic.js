//Generate a random color
const rand_color=()=>{
    const hexa="0123456789ABCDEF"
    let color="#"
    for( let i=0;i<6;i++){
        color+=hexa[Math.floor(Math.random()*16)]
    }
    return color

};
let id;
const start_changeColor=()=>{
    if(!id){
    id=setInterval(changeBgcolor,1000);
    }
    function changeBgcolor(){
        document.body.style.backgroundColor=rand_color();
    }
}
const stop_changeColor=()=>{
    clearInterval(id)
    id=null;
}
document.querySelector("#start").addEventListener('click',start_changeColor);
document.querySelector("#stop").addEventListener('click',stop_changeColor);