import './style.css';
import './index.html';
import './menu.html';
import './nosotros.html';
import './contacto.html';


const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

const tarjetas = document.querySelector('.tarjetas');
const punto = document.querySelectorAll('.punto')

punto.forEach( (cadaPunto, i)  => {
    punto[i].addEventListener('click', () => {
        
        let posicion = i;
        let operacion = posicion * -33.3

        tarjetas.style.transform = `translateX(${operacion}%)`
        
        punto.forEach( (cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        punto[posicion].classList.add('activo')
    })
})

const formElement = document.getElementById('formGuardar')

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

    alert('Gracias por tu mensaje!')
    formElement.reset();
})







