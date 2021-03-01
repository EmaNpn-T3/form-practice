import React, {useState} from 'react';

function MostrarTextoEjemplo() {
    const [mostrarTexto, setMostrarTexto] = useState(false);

    return (
        <div>
            <button 
            type="button"
            onClick= {() => setMostrarTexto (true)}>
                Mostrar texto

            </button>
           {
               mostrarTexto && `la verga`
           }
        </div>
    );

}

export default MostrarTextoEjemplo
