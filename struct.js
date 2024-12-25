const loginform = document.querySelector(".form")
const logininput = loginform.querySelector("input")
const loginbutton = loginform.querySelector("button")


function onloginbuttonclick() {
    console.log(logininput.value)
    console.log("click~")
}


loginbutton.addEventListener("click",onloginbuttonclick)

