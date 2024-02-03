var arr=[{dp:'https://plus.unsplash.com/premium_photo-1683140983862-6f7f32aa9961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D',pic:'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
{dp:'https://images.unsplash.com/photo-1517012021249-a130aa959065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95cyUyMG1vZGVsfGVufDB8fDB8fHww',pic:'https://images.unsplash.com/photo-1516446636564-c48e723868fc?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},{
    dp:'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D',pic:'https://plus.unsplash.com/premium_photo-1664302295078-32ca013599e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D'
},{
    dp:'https://images.unsplash.com/photo-1586057708056-6149710c46cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D',pic:"https://plus.unsplash.com/premium_photo-1661376910430-59dc64522f98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
}]

var clutter='';
arr.forEach(function(elem,idx){
   clutter+=`<div class="stories">
   <img id="${idx}"src="${elem.dp}" alt="">
</div> `
   
})

var story=document.querySelector('#story')
story.innerHTML=clutter;

story.addEventListener('click',function(dets){

document.querySelector('#full-screen').style.display='block';
document.querySelector('#full-screen').style.backgroundImage=`url(${arr[dets.target.id].pic})`

setTimeout(function(){
    document.querySelector('#full-screen').style.display='none';
},4000)

})