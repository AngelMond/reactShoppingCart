import React from 'react';


//Components
import Product from './Product';


const styles = {
    productos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default function Products (props) {
    
    return(
        <>
        <div style={styles.productos}>
            
            {props.products.map( producto => 
                <Product 
                    agregarAlCarro={props.agregarAlCarro}
                    key={producto.name}
                    producto={producto}
                />
                )
            }
        </div>

        </>
    )
}