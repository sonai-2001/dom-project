var content=[{src:"https://media.istockphoto.com/id/1181979050/photo/spread-both-hands-by-indian-businessman-standing-isolated-with-wide-open-arms.webp?b=1&s=170667a&w=0&k=20&c=cs-iXN1OZ8UVW7gpWxX0RvoFPPlscP4D156rj-bLAVE=",name:"Apurba"}
,{src:"https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=_wV5C2C-MufoJNGs4Bu9jdbXXmBHAxKbXzTOY_pwx9c=",name:"Ishika"}
,{src:"https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?b=1&s=170667a&w=0&k=20&c=9cS9Dj2jKbJGqfI0X0U-jZNURFc-foLzDm1Ls-Q_fgo=",name:"Ankush"}
,{src:"https://media.istockphoto.com/id/1315976553/photo/portrait-of-a-smiling-man-of-indian-origin.webp?b=1&s=170667a&w=0&k=20&c=BqlDIexCuK-4hU3KxnRfTDy8eGApsJkNwZ7PXGJx3d8=",name:"Sayan"}
]
var people=document.querySelector('#peoples')
var input=document.querySelector('input')





input.addEventListener('input', function(){
    var p=''
    if(input.value===''){
      people.innerhtml=''
    }
    
    var filtered=content.filter(function(elem){
        return elem.name.startsWith(input.value) 
    })
    filtered.forEach(function(elem){
        p+=`<div class="content w-36 h-36 flex flex-col items-center justify-center
        ">
            <div   class="h-5/6 w-full bg-black overflow-hidden rounded-full" id="image" >
                <img  class="h-full w-full  object-cover"src=${elem.src} alt="">
            </div>
            <h4>${elem.name}</h4>
            </div>
            `
    })
    people.innerHTML=p
    
    
})







