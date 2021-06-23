const li = document.querySelectorAll("li");
const p = document.querySelectorAll("p");
const arrow = document.querySelectorAll("arrow");


var arr=[];
var checkDupe=[];
var dupe = false;

var iBefore =0;
for (let i =0; i < li.length ; i++) {      
li[i].addEventListener('click',()=>{
    isDupe(i); //Function check for duplicate

for(let j=0; j < p.length; j++) { //to hide/unhide the answer
    
    //First element
    if (arr.length == 0) {
        arr.push(i);
        li[i].classList.add("bold");
        li[i].classList.add("rotate");
        p[i].classList.remove("hide");
   
    }
   
   else {
       //FIFO
   if (dupe) {
       li[i].classList.toggle("bold"); 
       li[i].classList.toggle("rotate");
       p[i].classList.toggle("hide");
            }
   else {
    li[arr[0]].classList.remove("bold");
    li[arr[0]].classList.remove("rotate");
    p[arr[0]].classList.add("hide");
    arr.shift();
    arr.push(i);
    li[i].classList.add("bold");
    li[i].classList.add("rotate");
    p[i].classList.remove("hide");
   }
   }
}
})}

function isDupe(i) {

     checkDupe.push(i); //check for duplicated
    if(checkDupe.length > 0) {
      
    if(checkDupe[checkDupe.length-2] == checkDupe[checkDupe.length-1]) {
      dupe= true;
    }
    else {

        dupe=false;
    }
}
}

