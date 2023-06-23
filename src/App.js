import React, { useState } from 'react';

import tomate from "./img/tomate.jpg";
import lechuga from "./img/lechuga.jpg";
import arbejas from "./img/arbejas.jpg";

//Components
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Title from "./components/Title";

//Se encarga de tomar todo el contenido que coloquemo sy lo dejara centrado
//Esto asegura que el contenido no este tomando todo el ancho del navegador
import Layout from "./components/Layout";



function App() {

  const [carro, setCarro] = useState([/*{ name: 'Tomate', price: 20, img: tomate, cantidad:1}*/]);

  //Estado para definir si mostarmos el carrito con los productos o lo ocultamos
  const [isCartVisible, setIsCarVisible] = useState(false);

  const products = [
    { name: 'Tomate', price: 20, img: tomate },
    { name: 'Lechuga', price: 8, img: lechuga },
    { name: 'Arbejas', price: 5, img: arbejas },
  ]


  const agregarAlCarro = (producto) => {

    //Si el producto que se agrega es el mismo implementamos logica
    if (carro.find(el => el.name === producto.name)) {
      console.log("es el mismo")
      //Crea un nuevo carrito a partir del existente y aumenta el atributo de cantidad si el elemento ya existe en el carrito
      const newCarro = carro.map(el => el.name === producto.name ? ({ ...el, cantidad: el.cantidad + 1 }) : (el));

      return setCarro(newCarro)
    }

    //Crea un nuevo objeto y agregamos la propiedad cantidad
    const newObj = producto;
    newObj.cantidad = 1;

    return setCarro([...carro, newObj])
  }

  //Muestra el carrito con los productos agregados
  const showCart = () => {

    if(!carro.length){
      return
    }
    
    if (!isCartVisible) {
      setIsCarVisible(true);
    } else {
      setIsCarVisible(false);
    }
  }



  return (
    <div className="App">
      <Navbar
        carro={carro}
        showCart={showCart}
        isCartVisible={isCartVisible}
      />
      <div>
        <Layout>
          <Title></Title>
          < Products
            agregarAlCarro={agregarAlCarro}
            products={products}
          />
        </Layout>
      </div>
    </div>
  );
}

export default App;
