var counter = 0;

(function() {
    document.getElementById("counter").innerHTML = counter
 })();




function increment(){
    counter++;
    document.getElementById("counter").innerHTML = counter

    
}

function decrement(){
    counter--;
    if(counter < 0) counter = 0
    document.getElementById("counter").innerHTML = counter

}
function reset(){
    counter=0
    document.getElementById("counter").innerHTML = counter

}