var count=0;
function addList(){
    let item=document.getElementById("inputs");
    if(item.value=="" || item.value==null){
        alert("Please Enter Something")
    }
    else if(count>=10){
        alert("Sufficient Work For Today")
    }else{
        let headingtag=document.createElement("li")
    headingtag.innerText=item.value+" "+" ";
    document.getElementById("list2").appendChild(headingtag )
    // let removebutton=document.createElement("button")
    // removebutton.innerHTML="Remove";
    // headingtag.appendChild(removebutton)
    item.value=""
    count++
    }
    
}

function remove(){
    count=count-1;
    let resultarr=document.querySelectorAll("li")
    let target=resultarr[resultarr.length-1]
    document.getElementById("list2").removeChild(target)
    
}