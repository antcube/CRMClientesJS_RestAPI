import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const telefonoInput = document.querySelector('#telefono');
const empresaInput = document.querySelector('#empresa');
const idInput = document.querySelector('#id');
const formulario = document.querySelector('#formulario');

document.addEventListener('DOMContentLoaded', async () => {
    const parametrosURL = new URLSearchParams(window.location.search);
    
    const idCliente = parametrosURL.get('id');

    const cliente = await obtenerCliente(idCliente);
    
    mostrarCliente(cliente);

    formulario.addEventListener('submit', validarCliente);
})

function mostrarCliente(cliente) {
    const { nombre, email, telefono, empresa, id } = cliente;

    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
    idInput.value = id;
}

function validarCliente(e) {
    e.preventDefault();

    const cliente = {
        nombre: nombreInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value,
        empresa: empresaInput.value,
        id: idInput.value
    }

    if(validar(cliente)) {
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }

    const regexCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    if (!regexCorreo.test(cliente.email)) {
        mostrarAlerta("Email no es válido");
        eturn;
    }

    const regexTelefono = /^9\d{8}$/;
    if (!regexTelefono.test(cliente.telefono)) {
        mostrarAlerta("Teléfono no válido, son 9 dígitos y comienza con 9");
        return;
    }

    // Reescribe el objeto
    editarCliente(cliente);
}