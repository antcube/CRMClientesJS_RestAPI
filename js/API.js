// Primero se crea una constante con la url de la API, en este caso se está utilizando un archivo JSON local, pero se puede cambiar por una API real
// Si usamos JSON Local, descargan Node.js y ejecutan el siguiente comando en la terminal: json-server db.json -p 4000 en la carpeta donde se encuentra el archivo JSON
const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method : 'PUT',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}