import {incrementCount} from './counter';

const showCount=document.getElementById("currentCount");
var alert=document.getElementById("alert");


var increaseCount=incrementCount();

export function onButtonClick(){
    let count=increaseCount();
    showCount.innerText=+count;
    alert.classList.remove("invisible");
    alert.innerText="Yay! You increased the count";
        
}
