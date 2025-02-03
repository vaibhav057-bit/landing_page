import React from "react";

import Apple14pro from './Components/images/Apple14pro.jpg';
import Apple15pro from './Components/images/Apple15pro.jpg';
import Apple16pro from './Components/images/Apple16pro.jpg';
import Applewatch6 from './Components/images/Applewatch6.jpg';
import AppleAirpodes from './Components/images/AppleAirpodes.jpg';
import IphoneCharger45W from './Components/images/IphoneCharger45W.jpg';
function ProductSection() {
    return (
      <section id="products" className="product-section">
        <h2>Our Best Selling Products</h2>
        <div className="product-list">
          <ProductCard 
            imgSrc={Apple14pro} 
            name="Apple 14 pro"
          />
          <ProductCard 
            imgSrc={Apple15pro}
            name="Apple 15 pro"
          />
         <ProductCard 
            imgSrc={Apple16pro}
            name="Apple 16 pro"
          />
        
        </div>
        <div className="Product-2ndlist">
                <ProductCard 
                    imgSrc={Applewatch6}
                    name="Applewatch6"
                  />
                   <ProductCard 
                    imgSrc={AppleAirpodes}
                    name="AppleAirpodes"
                  />
                   <ProductCard 
                              imgSrc={IphoneCharger45W}
                              name="IphoneCharger45W"
                            />
                </div>
      </section>
    );
  }
  
  function ProductCard({ imgSrc, name }) {
    return (
      <div className="product-card">
        <img src={imgSrc} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  }


  export default ProductSection;