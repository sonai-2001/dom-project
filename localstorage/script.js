var blocked=document.querySelector('#bl')
var unblocked=document.querySelector('#ubl')
show();

blocked.addEventListener('click',function(){
    localStorage.setItem("block","false")
    show();

})
unblocked.addEventListener('click',function(){
    
    localStorage.removeItem("block")
    show();

})

function show(){
    if(localStorage.getItem("block")==="false")
   { document.querySelector('h1').textContent="blocked"}
   else{
    document.querySelector('h1').textContent="unblocked"
   }
}
