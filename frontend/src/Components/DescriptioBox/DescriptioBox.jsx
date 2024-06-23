import React from 'react'
import './DescriptioBox.css';

const DescriptioBox = () => {
    return (
        <div className='descriptiobox'>
            <div className="descriptiobox-navigator">
                <div className="descriptiobox-nav-box">Description</div>
                <div className="descriptiobox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptiobox-description">
                <p>
                    An e-com store website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-com websites hove gained immense popularity due to their convenience, accessibility, and the global reach they offer.
                </p>
                <p> E-com store website typically display products or services along with detailed descriptions, images, prices, and any available variations (eg, sizes, calors). Each product usually has its own dedicated page with rellevant information.</p>
            </div>
        </div>
    )
}

export default DescriptioBox