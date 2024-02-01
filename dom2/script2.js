var con = document.querySelector("#container")
var love = document.querySelector('i')

con.addEventListener('dblclick',function(){
    love.style.transform='scale(1)'
    setTimeout(function(){
        love.style.transform='scale(0)'
    },1000)

})
