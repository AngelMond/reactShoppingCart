import React, { useEffect } from 'react';


//Components
import Button from './Button';

const styles = {
    producto: {
        border: '1px solid #eee',
        boxShadow: '0px 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
    },

    img: {
        width: '100%'
    }
}


export default function Product({ agregarAlCarro, producto }) {

    useEffect(() => {
        //Imprimir propiedades
        // console.log(props)
    }, [])



    return (
        <>
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        </>
    )
}