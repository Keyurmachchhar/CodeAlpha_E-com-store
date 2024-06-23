import React,{ useState, useEffect } from 'react'
import './Popular2.css';
import Item from '../Item/Item';

const Popular2 = () => {
  const [data_product_women, setData_Product_Women] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/popular_women').then((resp) => resp.json()).then((data) => setData_Product_Women(data))
    }, [])
  return (
    <div className='popular'>
        <h1>Popular in women</h1>
        <hr />
        <div className='popular-item'>
            {data_product_women.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular2