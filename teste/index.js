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

function getContato (){
    let url = "/contato"

    let xhttp = new XMLHttpRequest()
    xhttp.open ("get", url, false)
    xhttp.send()

    let data = JSON.parse(xhttp.responseText)

    $("#contato")[0].innerHTML = `
        <li>Telefone: ${data.telefone}</li>
        <li>Email: ${data.email}</li>
        <li>Endereço: ${data.endereco}</li>
    `
    
}
getContato()