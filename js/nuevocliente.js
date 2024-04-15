import { mostrarAlerta, validar } from './funciones.js';
import { nuevoCliente } from './API.js';

document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', async e => {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        const regexCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
        if(!regexCorreo.test(email)) {
            mostrarAlerta('Email no es válido');
            return;
        }

        const regexTelefono = /^9\d{8}$/;
        if(!regexTelefono.test(telefono)) {
            mostrarAlerta('Teléfono no válido, son 9 dígitos y comienza con 9');
            return;
        }

        nuevoCliente(cliente);
    })
});