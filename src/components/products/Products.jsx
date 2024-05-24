import React  from "react";
import {useState} from 'react';
import './products.css';
import {products, buttons} from './data';



function Products() {
    const [state, setState] = useState(buttons[0]);

    const handleClick = () => {
        if (state === buttons[0]) {
            setState(buttons[1]);
        } else if (state === buttons[1]) {
            setState(buttons[0]);
        }
    }


    return (
        <section className="view">
            <div className="container">
                <div className="view-buttons">
                    <button className='material-icons' onClick={handleClick}>{state}</button>
                </div>
                <div className={'products' + ' ' + state}>
                {products.map((product, index) =>{
                    return  <div key={index} className="product">
                        <h1>{product.name}</h1>
                        <p>{product.color}</p>
                        <img src={product.img} alt={product.name}/>
                        <div className="product-info">
                            <p>$ {product.price}</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                })}
                </div>
            </div>
        </section>
    )
}


export default Products;