import React from 'react';


//Components
import Logo from "../components/Logo";
import Cart from "../components/Cart";

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}


export default function Navbar({ carro, showCart, isCartVisible }) {
    return (
        <nav style={styles.navbar}>
            <Logo />
            <Cart
                carro={carro}
                showCart={showCart}
                isCartVisible={isCartVisible}
            />
        </nav>
    )
}