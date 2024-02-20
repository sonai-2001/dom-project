var home=document.querySelector('#home')
var about=document.querySelector('#about')
var contact= document.querySelector('#contact')

var hometext=document.querySelector('#hometext')
var contacttext=document.querySelector('#contacttext')
var abouttext=document.querySelector('#abouttext')

hometext.style.display="block"
home.addEventListener('click',function(){
    muchadaoa()
    hometext.style.display="block"  
})
about.addEventListener('click',function(){
    muchadaoa()
    abouttext.style.display="block"  
})
contact.addEventListener('click',function(){
    muchadaoa()
    contacttext.style.display="block"  
})




var muchadaoa=function(){
    hometext.style.display="none"
    abouttext.style.display="none"
    contacttext.style.display="none"
}

