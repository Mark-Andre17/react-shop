import React, { useEffect, useState } from 'react';
import './card.css';
import cardImg1 from '../../assets/card/item-blue.jpg';
import cardImg2 from '../../assets/card/item-black.jpg';
import item from './data';



function Card(){
    const [opacity, setOpacity] = useState('nonopacity');
    const [opacity2, setOpacity2] = useState('opacity');

    useEffect(() => {
        const toggleClass = () => {
            setOpacity(prevClass => prevClass ==='nonopacity'?'opacity':'nonopacity');
        };
        const interval = setInterval(toggleClass, 4000);
        return () => {
            clearInterval(interval);
        };
    },[])

    useEffect(() => {
        const toggleClass = () => {
            setOpacity2(prevClass => prevClass ==='opacity'?'nonopacity':'opacity');
        };
        const interval = setInterval(toggleClass, 4000);
        return () => {
            clearInterval(interval);
        };
    },[])

    return (
        <section className='card'>
            <div className="container">
                <div className="card-img">
                    <img src={cardImg1} className={opacity} alt="item"/>
                    <img src={cardImg2} className={opacity2} alt="item"/>
                </div>
                <div className="card-info">
                    <div className="card-board">
                        <h2 className="card-brand">{item.brand}</h2>
                        <h1 className="card-title">{item.title}</h1>
                        <h3 className="card-description">{item.description}</h3>
                        <p className="card-description__full">{item.descriptionFull}</p>
                        <div className="card-price-btn">
                            <p className="card-price">{item.currency} {item.price}</p>
                            <button className="card-button">добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Card;