function obj(){
    let inputs=document.querySelectorAll("input")
    let keys=inputs[0].value;
    let values=inputs[1].value;
    var obj={}
    obj[keys]=values;
    
    let resultTag=document.getElementById("result")
    resultTag.innerHTML="{ "+Object.keys(obj)+" : "+'"'+ Object.values(obj)+'"'+" }";
    inputs[0].value="";
    inputs[1].value="";
}