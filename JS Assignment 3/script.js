function check(){
    var inputs=document.querySelectorAll("input")
    var driving_licence=inputs[0].value;
    var tired=inputs[1].value;
    var sober=inputs[2].value;
    if(driving_licence =="true" && tired=="false" && sober=="true"){
        let resulttag=document.getElementById("result")
        resulttag.innerText="You Can Drive"
        inputs[0].value=""
        inputs[1].value=""
        inputs[2].value=""
    }else{
        let resulttag=document.getElementById("result")
        resulttag.innerText="You Can't Drive"
        inputs[0].value=""
        inputs[1].value=""
        inputs[2].value=""
    }
}