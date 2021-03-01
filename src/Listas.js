import React, { Fragment, useState } from 'react';

const Listas = () => {
    const[numeros, setNumeros] = useState([0])

    const [tiempo, setTiempo] = useState(0)

    const aumentar = () => {
        setTiempo(tiempo + 1)
        setNumeros([
            ...numeros,
            tiempo + 1
        ])
    }

    return (
        <Fragment>
            <ul>
                <button onClick={aumentar}>Aumentar</button>
                <p>Tiempo: {tiempo}</p>
                {
                    numeros.map((item, index) =>
                    <li key={index}>
                            {item} - {index}
                    </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listas;