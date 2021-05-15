var btn = document.getElementById("btns");

//btn.addEventListener("click" ,add);

var list = document.getElementById("Country");
function add(){
    var x = document.createElement("li")
    x.innerText = "London";
    list.appendChild(x);
}

function remove(){
    list.removeChild(list.lastElementChild)
}