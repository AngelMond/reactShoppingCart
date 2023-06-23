import React from 'react';


const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        border: 'none',
        padding: '15px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

export default function Button (props) {
    return(
        <div>
            <button style={styles.button} {...props} />
        </div>
    )
}