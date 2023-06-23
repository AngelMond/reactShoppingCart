import React from 'react';

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    
    ul: {
        margin: 0,
        padding: 0
    },

    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItmes: 'center',
        padding: '25px 20px',
        borderBottom: '1px solid #aaa'
    }
}


export default function DetallesCarro({ carro }) {

    console.log(carro)

    return (
        <>
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(el =>
                        <li style={styles.producto} key={el.name}>
                            <img alt={el.name} src={el.img} width='50' height='32' /> 
                            {el.name} 
                            <span>{el.cantidad}</span>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}