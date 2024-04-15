import { obtenerClientes, eliminarCliente } from './API.js';
import { confirmacion } from './funciones.js';

const listado = document.querySelector('#listado-clientes');

document.addEventListener('DOMContentLoaded', mostrarClientes);

async function mostrarClientes() {
    const clientes = await obtenerClientes();

    clientes.forEach(cliente => {
        const { nombre, email, telefono, empresa, id } = cliente;

        const row = document.createElement('TR');

        const col1 = document.createElement('TD');
        col1.classList.add('px-6', 'py-4', 'whitespace-no-wrap', 'border-b', 'border-gray-200');

        const pNombre = document.createElement('P');
        pNombre.classList.add('text-sm', 'leading-5', 'font-medium', 'text-gray-700', 'text-lg', 'font-bold');
        pNombre.textContent = nombre;

        const pEmail = document.createElement('P');
        pEmail.classList.add('text-sm', 'leading-10', 'text-gray-700');
        pEmail.textContent = email;

        col1.append(pNombre);
        col1.append(pEmail);

        const col2 = document.createElement('TD');
        col2.classList.add('px-6', 'py-4', 'whitespace-no-wrap', 'border-b', 'border-gray-200');
        col2.textContent = telefono;

        const col3 = document.createElement('TD');
        col3.classList.add('px-6', 'py-4', 'whitespace-no-wrap', 'border-b', 'border-gray-200', 'leading-5', 'text-gray-700');
        col3.textContent = empresa;

        const col4 = document.createElement('TD');
        col4.classList.add('px-6', 'py-4', 'whitespace-no-wrap', 'border-b', 'border-gray-200', 'text-sm', 'leading-5');

        const aEditar = document.createElement('A');
        aEditar.href = `editar-cliente.html?id=${id}`;
        aEditar.className = "text-teal-600 hover:text-teal-900 mr-5";
        aEditar.textContent = "Editar";
        col4.appendChild(aEditar);

        const aEliminar = document.createElement('A');
        aEliminar.href = "#";
        aEliminar.dataset.cliente = id;
        aEliminar.className = "text-red-600 hover:text-red-900 eliminar";
        aEliminar.textContent = "Eliminar";
        col4.appendChild(aEliminar);

        aEliminar.addEventListener('click', confirmarEliminar);

        col4.append(aEditar);
        col4.append(aEliminar);

        row.append(col1);
        row.append(col2);
        row.append(col3);
        row.append(col4);

        listado.append(row);
    });
}

async function confirmarEliminar(e) {
    e.preventDefault();

    const clienteId = e.target.dataset.cliente;

    try {
        const confirmar = await confirmacion();
        if(confirmar) {
            await eliminarCliente(clienteId);
        }
    } catch (error) {
        console.log(error);
    }
}
    