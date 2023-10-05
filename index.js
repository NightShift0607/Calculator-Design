for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function (){
        var button = this.getAttribute("value");;
        disClick(button);
    })
    
}

document.addEventListener("keydown", function (event){
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/'){
        disClick(event.key)
    } else if (event.key == "Enter") {
        solve();
    } else if (event.key == "Escape") {
        document.querySelector("#result").value = "";
    }
})

document.querySelector(".solve").addEventListener("click", solve);

document.querySelector(".clr").addEventListener("click", function () {
    document.querySelector("#result").value = "";
})

function disClick(key) {
    if (key == '×')  {
        document.querySelector("#result").value += '*';
    } else if (key == '÷') {
        document.querySelector("#result").value += '/';
    } else {
        document.querySelector("#result").value += key;
    } 
}

function solve(){
    var x = document.querySelector("#result").value;
    var y = math.evaluate(x);
    document.querySelector("#result").value = y;
}