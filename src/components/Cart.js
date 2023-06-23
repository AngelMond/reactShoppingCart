import React from 'react';


//Components
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}


export default function Cart({ carro, showCart, isCartVisible }) {

    //Sumamos todos los elemetos de la propiedad de cantidad y los vamos acumulando
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
        <div>
            {/* LOs estilos de la altera es para posisionar la alerta sobre el carrito */}
            <span style={styles.bubble}>

                {cantidad > 0
                    ? <BubbleAlert value={cantidad} />
                    : null
                }

            </span>
            <button style={styles.cart} onClick={showCart}>
                Carro
            </button>

            {isCartVisible
                ? <DetallesCarro carro={carro} />
                : null
            }
        </div>
    )
}