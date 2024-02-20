 var btn=document.querySelector('button')
 var h1=document.querySelector('h1')
 var flag=1;
 btn.addEventListener('click',function(){
    if(flag==1){
        h1.textContent="i am a looser";
    h1.style.color="red"
    flag=0
    }
    else{
        h1.textContent="i am a winner";
        h1.style.color="green" 
        flag=1
    }
 })