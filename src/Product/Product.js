import './Product.css';
import { useState, useEffect } from "react";
const Products = () => {
  const url = "https://fakestoreapi.com/products?limit=15";
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
        <h1>Fake Store</h1>
      <div className="container">
        {products?.map((produk) => {
          return (
            <div className="col-3">
              <CardProduct key={produk.id} title={produk.title} price={produk.price} description={produk.description} image={produk.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function CardProduct(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} style={{ height: "150px" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
          <p>Price : {props.price} $</p>
        </Card.Text>
        <button variant="primary">Click</button>
      </Card.Body>
    </Card>
  );
}
function Card(){
return(
  <div className='Card'>
    <img src="#" alt='#'/>
    <div className='Card-body'>
      <h3 className='Card-title'>kash</h3>
      <p className='Card-desc'>loremsjdbssfkkkds</p>
      <div id='Button'>
        <a href='#' className='Button' type='button'>Buy Now</a>
      </div>
    </div>
  </div>
)
}

export default Products;
