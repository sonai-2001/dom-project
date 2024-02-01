var body= document.querySelector('body')
var crsr=document.querySelector('#cursor')
body.addEventListener('mousemove',function(pos){
     crsr.style.left=pos.x+"px";
     crsr.style.top=pos.y+"px";
})