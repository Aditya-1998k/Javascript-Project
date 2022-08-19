var array;
window.onload=async () =>{
    var response=await fetch("https://jsonplaceholder.typicode.com/todos");
    array=await response.json();
    showall()
}
function showall(){
    let p=document.querySelectorAll("p")
    for(let i=0; i<p.length; i++){
        document.body.removeChild(p[i])
    }

    for(let i=0; i<array.length; i++){
        let obj=array[i];
        let p=document.createElement("p");
        if(obj.completed){
            p.style.color="green";
        }else{
            p.style.color="red";
        }
        p.innerText=obj.title;
        document.body.appendChild(p)
    }
}
function completed(){
    let p=document.querySelectorAll("p")
    for(let i=0; i<p.length; i++){
        document.body.removeChild(p[i])
    }

    for(let i=0; i<array.length; i++){
        let obj=array[i];
        let p=document.createElement("p");
        if(obj.completed){
            p.style.color="green"
            p.innerText=obj.title;
            document.body.appendChild(p);
        }
    }
}
function pending(){
    let p=document.querySelectorAll("p");
    for(let i=0; i<p.length; i++){
        document.body.removeChild(p[i])
    }
    for(let i=0; i<array.length; i++){
        let obj=array[i];
        let p=document.createElement("p");
        if(!obj.completed){
            p.style.color="red";
            p.innerText=obj.title; 
            document.body.appendChild(p)
        }
    }
}