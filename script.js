const screen=document.getElementById("display");
function pressBtn(value){
    screen.value=screen.value+value;
}
function clearScreen(){
    screen.value= "";
}
function removeLast(){
    screen.value=screen.value.slice(0, -1);
}
function showResult(){
    if(screen.value === "")return;
    try{
        let result = eval(screen.value);
        screen.value=result;
    }catch(error){
        screen.value="Error";
    }
}