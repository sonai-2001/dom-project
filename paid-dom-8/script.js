var downloaded=document.querySelector('#downloaded')

var downloading=document.querySelector("#downloading")

var h1=document.querySelector("h1")
var count=0
var int=setInterval(function(){
    if(count==110){
        clearInterval(int)
        h1.textContent="download completed"
    }  
    
    downloading.style.width=count+"%"
      count+=10
},1000)