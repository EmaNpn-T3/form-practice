import React, { useState, useEffect } from 'react';

function PorEjemplo() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        console.log("se ha ejecutado el Hook");

    }, [name]);

    return (
                <div>
                    <input 
                    value={name} 
                    onChange={(event) =>
                    setName(event.target.value)} />

                    <input 
                    value={lastName} 
                    onChange={(event) =>
                    setLastName(event.target.value)} />

                </div>
    );
}

export default PorEjemplo;