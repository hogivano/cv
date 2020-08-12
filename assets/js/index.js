document.addEventListener("DOMContentLoaded", function(e) {
    if(localStorage.getItem("style") == "dark"){
        document.getElementById("check-style").checked = true
        addBgDark()
    }

    document.getElementById("check-style").addEventListener("change", function(e){
        if(this.checked){
            localStorage.setItem("style", "dark")
            addBgDark()
        } else {
            localStorage.setItem("style", "light")
            removeBgDark()
        }
        console.log("clicked")
        console.log(this.checked)
    });
});

function addBgDark (){
    var body =  document.getElementById("body")
    var arr = body.className.split(" ")
    if (arr.indexOf("bg-dark") == -1) {
        body.className += " " + "bg-dark"
    }
}

function removeBgDark() {
    var body = document.getElementById("body")
    var arr = body.className.split(" ")
    if (arr.indexOf("bg-dark") > -1){
        body.className = ""
    }
}