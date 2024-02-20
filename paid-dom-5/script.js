var btn=document.querySelector('button')
var ul=document.querySelector('ul')

var input=document.querySelector('input')
input.placeholder="enter a item to add"

btn.addEventListener('click',function(){
  
    var item=input.value
    if(item.trim()!=''){
        var li=document.createElement('li')
     li.textContent =item
    ul.appendChild(li)
    input.value=''
    
    }
})