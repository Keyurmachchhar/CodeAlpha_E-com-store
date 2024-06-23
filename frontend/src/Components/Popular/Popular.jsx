import React, { useState, useEffect } from 'react'
import './Popular.css';
import Item from '../Item/Item';

const Popular_men = () => {
    const [data_product_men, setData_Product_Men] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/popular_men').then((resp) => resp.json()).then((data) => setData_Product_Men(data))
    }, [])
    return (
        <div className='popular'>
            <h1>Popular in men</h1>
            <hr />
            <div className='popular-item'>
                {data_product_men.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular_men