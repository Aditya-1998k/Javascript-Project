function callback(result){
    let resulttag=document.getElementById("result")
    resulttag.innerText=result;
    
}
function sum(){
    let a=document.getElementById("input1").value;
    let b=document.getElementById("input2").value;
    let sum=parseInt(a)+parseInt(b);
    callback(sum);
}