// alert('hello professor');
let actualColor = 'blueviolet'
function changeColor() {
    if (actualColor == "blueviolet") {
        actualColor = "blue"
        $("#header").css("background-color", actualColor)
    }
    else {
        actualColor = "blueviolet"
        $("#header").css("background-color", actualColor)
    }
}