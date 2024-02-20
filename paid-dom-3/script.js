var form=document.querySelector('form')
var inps=document.querySelectorAll('input[type="text"]')
// var inp2=document.querySelector('#inp2')
var h1=document.querySelector('h1')

form.addEventListener('submit',function(dets){
    
    dets.preventDefault()
    for(var i=0;i<inps.length;i++){
        if( inps[i].value.trim()===''){
            h1.textContent="error, some fields are empty"
            h1.style.color='red'
            break
        }
        else{
            h1.textContent=""
            h1.style.color='red'
        }
    }
 } )
