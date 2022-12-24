import "./Product.css";
import { useState, useEffect } from "react";
const Products = () => {
  const url = "https://fakestoreapi.com/products?limit=20";
  const [products, setProducts] = useState();

  const getDataProducts = async () => {
    const respone = await fetch(url);
    const dataProduct = await respone.json();
    setProducts(dataProduct);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div>
      <h2>Fake Store</h2>
      <div
        className="container
      "
      >
        {products?.map((produk) => {
          return (
            <div>
              <Card key={produk.id} title={produk.title} price={produk.price} description={produk.description} image={produk.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Card(props) {
  return (
    <div className="Card">
      <img src={props.image} alt="#" />
      <div className="Card-body">
        <h3 className="Card-title">{props.title}</h3>
        <div className="Card-text">
          <p className="Card-desc">{props.description}</p>
          <p>Price : {props.price} $</p>
        </div>
        <div id="Button">
          <a href="#home" className="Button" type="button">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Products;
