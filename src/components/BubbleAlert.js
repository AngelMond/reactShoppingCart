import React from 'react';


const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        border: 'none',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px',
    }
}


export default function BubbleAlert ({value}) {
    return (
        <span style={styles.bubbleAlert}>
           {value > 9 ? ('9+') : (value)}
        </span>
    )
}