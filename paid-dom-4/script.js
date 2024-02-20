var start=document.querySelector('#start')
var stop=document.querySelector('#stop')
var h1=document.querySelector('h1')
var h2=document.querySelector('h2')
var count=0
var interval;
var counts;
start.addEventListener('click',function(){
    interval=setInterval(function(){
        h2.textContent=''
        h1.textContent=count;
    count++;
    },1000)
})
stop.addEventListener('click',function(){
    clearInterval(interval)
    h1.textContent=''
    h2.textContent=`previous count was ${count-1}`
    count=0

})
