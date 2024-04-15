export function mostrarAlerta(mensaje) {
    const alertaExiste = document.querySelector('.alerta');

    if(!alertaExiste) {
        const alerta = document.createElement('P');
        alerta.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'bg-red-100', 'border-red-400', 'text-red-700', 'alerta');

        const alertaStrong = document.createElement('STRONG');
        alertaStrong.classList.add('font-bold');

        const alertaSpan = document.createElement('SPAN');
        alertaSpan.classList.add('block', 'sm:inline');
        alertaSpan.textContent = mensaje;

        alerta.append(alertaStrong);
        alerta.append(alertaSpan);

        const formulario = document.querySelector('#formulario');
        formulario.append(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }
}

export function validar(obj) {
    return !Object.values(obj).every( input => input !== '');
}

export function confirmacion() {
    const modal = document.querySelector('#miModal');
    const btnCerrar = document.querySelector('.close')
    const btnConfirmar = document.querySelector('#confirmar-eliminar')
    const btnCancelar = document.querySelector('#cancelar-eliminar')

    return new Promise( (resolve,reject) => {
        modal.classList.add('active');
    
        btnCerrar.addEventListener('click', () => {
            modal.classList.remove('active');
            reject(false);
        })
    
        btnConfirmar.addEventListener('click', () => {
            modal.classList.remove('active');
            resolve(true);
        })
    
        btnCancelar.addEventListener('click', () => {
            modal.classList.remove('active');
            reject(false);
        })
    })
}