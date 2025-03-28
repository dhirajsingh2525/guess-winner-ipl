var arr = [{
    team: 'CSK',
    primary: 'yellow',
    secondary: 'blue',
    fullName: 'chennai Super King',
    trophy : 5,
    captain: 'ms dhoni',
    logo: 'https://imgs.search.brave.com/q59_ttAolNgB4UCwa42Sts6NwjTH2VKR3z1HeiVKsUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c2FyY2hpdmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzEyL0NoZW5uYWkt/U3VwZXItS2luZ3Mt/bG9nby5zdmc'

},{
    team: 'RCB',
    primary: 'red',
    secondary: 'black',
    captain: 'rajat patidar'
},{
    team: 'DC',
    primary: 'blue',
    secondary: 'RED',
    captain: 'axer patel'
},{
    team: 'PK',
    primary: 'gray',
    secondary: 'red',
    captain: 'shreyas lyer'
},{
    team: 'KKR',
    primary: 'purple',
    secondary: 'gold',
    captain: 'ajinkya rahane'
},{
    team: 'MI',
    primary: 'blue',
    secondary: 'gold',
    captain: 'hardik pandya'
},{
    team: 'RR',
    primary: 'gold',
    secondary: 'blue',
    captain: 'sanju smason'
},{
    team: 'SRH',
    primary: 'orange',
    secondary: 'black',
    captain: 'pat cummins'
},{
    team: 'GT',
    primary: 'navy blue',
    secondary: 'gold',
    captain: 'subham gill'
},{
    team: 'LSG',
    primary: 'blue',
    secondary: 'orange',
    captain: 'rishabh pant'
}]
var btn = document.querySelector("#button")
var box = document.querySelector("#box h2")
var box1 = document.querySelector("#box")
var h3 = document.querySelector("h3")
btn.addEventListener("click", function(){
    var num = Math.floor(Math.random()*arr.length)
    box.innerHTML = arr[num].team
    box1.style.backgroundColor = arr[num].primary
    box.style.color = arr[num].secondary
    h3.innerHTML = arr[num].captain
})