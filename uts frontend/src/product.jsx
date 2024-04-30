import React from 'react';
import '../styles/Product.css';

const Product = () => {
  const flowers = [
    { name: 'Mawar', price: 10, image: 'mawar.jpg' },
    { name: 'Melati', price: 12, image: 'melati.jpg' },
    { name: 'Anggrek', price: 15, image: 'anggrek.jpg' },
    { name: 'Dahlia', price: 8, image: 'dahlia.jpg' },
    { name: 'Tulip', price: 11, image: 'tulip.jpg' },
    { name: 'Lavender', price: 14, image: 'lavender.jpg' },
    { name: 'Lily', price: 9, image: 'lily.jpg' },
    { name: 'Sakura', price: 13, image: 'sakura.jpg' }
  ];

  return (
    <div className="product-container">
      <h1>Produk Kami</h1>
      <div className="product-list">
        {flowers.map((flower, index) => (
          <div key={index} className="product-item">
            <img src={require(`../images/${flower.image}`).default} alt={flower.name} />
            <h3>{flower.name}</h3>
            <p>Harga: ${flower.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
