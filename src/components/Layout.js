import React from 'react';


const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        width: '1200px',
    }
}


export default function Layout(props) {
    return (
        // Con este div vamos a centrar todo el contenido 
        <div style={styles.layout}>
            {/* A este div le damos un ancho de 1200px */}
            <div style={styles.container} >
                {props.children}
                {/* Al poner un texto aqui este aparece centrado en la pantalla, pero queremos que este cargado a la izquierda */}
            </div>
        </div>
    )
}
