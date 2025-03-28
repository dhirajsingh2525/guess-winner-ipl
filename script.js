var arr = ["CSK", "RCB", "LSG", "KKR", "DC", "GT", "MI", "SHR", "RR", "PK"]
var btn = document.querySelector("#button")
var box = document.querySelector("#box")
btn.addEventListener("click", function(){
    var num = Math.floor(Math.random()*arr.length)
    box.innerHTML = arr[num]
})