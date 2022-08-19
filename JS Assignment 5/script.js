var value=[]
function add(){
    var myinput=document.getElementById("first");
    if(parseInt(myinput.value)%2==0){
        value.push(myinput.value)
        myinput.value=""
    }
    myinput.value=""
}

function displayEven(){
    let resulttag=document.getElementById("hi")
    resulttag.innerText=value;
}
var value1=[]

function add1(){
    var myinput1=document.getElementById("second");
    var myinput2=document.getElementById("second2")
    value1.push(myinput1.value*myinput2.value);
        myinput1.value="";
    
    
}

function displayByN(){
    let resulttag=document.getElementById("hello")
    resulttag.innerText=value1;

}

var value2=[]
function add3(){
    var myinput1=document.getElementById("third"); 
       value2.push(myinput1.value)
        myinput1.value="";
}

function remove(){
    var myinput2=document.getElementById("third3")
    let resulttag=document.getElementById("hello1")
    let arr=document.getElementById("hello2")
    arr.innerText=value2;
    value2.splice(myinput2.value,1)
    resulttag.innerText=value2;
}
