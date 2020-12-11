/*----- app's state (variables) -----*/

let count = 0

/*----- cached element references -----*/

let counterDisplayElem = document.getElementById("counterWindow");
let counterPlusElem = document.getElementById("counterPlus")
let counterMinusElem = document.getElementById("counterMinus")
let textChange = document.getElementById("input1")

uiUpdate()

/*----- event listeners -----*/

counterPlusElem.addEventListener("click", function (event) {
    count += parseInt(textChange.value)
    console.log(event)
    uiUpdate()
})

counterMinusElem.addEventListener("click", function (event) {
    count -= parseInt(textChange.value)
    uiUpdate()
})

/*----- functions -----*/

function uiUpdate(){
    counterDisplayElem.innerHTML = count
    input1.innerHTML = count
    console.log(count)
}