const formElement = document.getElementById('formGuardar');

formElement.addEventListener('submit', (event)=> {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let numero = document.getElementById('numero').value;
    let mensaje = document.getElementById('mensaje').value;
    let data = {nombre: nombre, email: email, numero: numero, mensaje: mensaje}
    let DataJson = JSON.stringify(data)
    console.log(DataJson)

    fetch('http://localhost:3000',{
        method:'post',
        body: DataJson,
    }).then(res => console.log(res))

})