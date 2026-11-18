const screen=document.getElementById("screen")
function addKey(key){
    screen.innerHTML=screen.innerHTML+key
}
function Calculate(){
    screen.innerHTML=eval(screen.innerHTML)
}
function allClear(){
    screen.innerHTML=""  ;
}
function clearDigit(){
    screen.innerHTML=screen.innerHTML.slice(0,-1);
}