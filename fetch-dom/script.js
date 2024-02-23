var btn=document.querySelector("button")
var container=document.querySelector("#contents")
var p=''
btn.addEventListener('click',function(){
    
fetch('https://randomuser.me/api/')
.then(function(raw){
    return raw.json()
})
.then(function(result){
    console.log(result)
   const {name,gender,picture}=result.results[0]
    p+=`<div class="card w-48  p-[10px] bg-pink-400 inline-block mb-[10px] mr-[10px] ">
    <div class="w-24 h-24 bg-black rounded-full overflow-hidden object-cover">
        <img src="${picture.large}" class="w-full h-full fit-content " alt="">
    </div>
    <h4>${name.first}</h4>
    <h4>${gender}</h4>
</div>`
container.innerHTML=p
})
})