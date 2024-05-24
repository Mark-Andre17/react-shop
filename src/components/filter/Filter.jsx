import React, {useState} from "react";
import data from './data';
import './filter.css'


function Filter(){

    const [activeCategory, setActiveCategory] = useState('All');

    const [img, setImg] = useState(data)

    const handleClick = (category) => {
        if(category === 'All') {
            setImg(data)
        } else {
            setImg(data.filter(item => item.category === category));
        }
        setActiveCategory(category); 
    }

    return(
        <section className="filter">
            <div className="container">
                <div className="filter-buttons">
                    <button className={activeCategory === 'All' ? 'active' : ''}  onClick={() => handleClick('All')}>All</button>
                    <button className={activeCategory === 'Websites' ? 'active' : ''}  onClick={() => handleClick('Websites')}>Websites</button>
                    <button className={activeCategory === 'Flayers' ? 'active' : ''}  onClick={() => handleClick('Flayers')}>Flayers</button>
                    <button className={activeCategory === 'Business Cards' ? 'active' : ''}  onClick={() => handleClick('Business Cards')}>Business Cards</button>
                </div>
                <div className="filter-wrapper">
                    {img.map((item, index) => (
                        <div key={index} className="filter-item">
                            <img src={item.img} key={index} alt={item.category}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Filter;