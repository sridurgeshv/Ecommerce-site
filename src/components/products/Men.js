import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './ProductDisplay.css';

const Men = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's clothing`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const truncateTitle = (title, maxLines = 2) => {
    const words = title.split(' ');
    if (words.length <= maxLines) return title;

    return `${words.slice(0, maxLines).join(' ')}...`;
  };

  return (
    <div className="Men">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
        <img src={product.image} alt={product.title} />
        <h2 title={product.title}>{truncateTitle(product.title)}</h2> {/* Set full title as tooltip */}
        <p>${product.price}</p>        
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Men;
