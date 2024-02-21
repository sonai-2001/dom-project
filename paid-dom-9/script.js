var textarea=document.querySelector("#textarea")
var counter=document.querySelector('#count')

textarea.addEventListener('input', function(){
    counter.textContent=textarea.value.length
})