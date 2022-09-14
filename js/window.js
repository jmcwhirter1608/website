
function toggle() {
    var a = document.getElementById("style").getAttribute("href");
    if(a=="css/style.css"){
        a="css/style2.css"
        document.getElementById("style").setAttribute("href", a);
    }else
    {
        a="css/style.css"
        document.getElementById("style").setAttribute("href",a);
    }
    localStorage.setItem("styleState", a);
};

window.onload = function(){
    if(localStorage.getItem("styleState") != null){
        document.getElementById("style").setAttribute("href", localStorage.getItem("styleState"));
    }
    
}