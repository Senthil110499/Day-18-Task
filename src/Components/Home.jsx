import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://65db438b3ea883a152916b63.mockapi.io/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((item, index) => {
          return (
            <>
              <div className="col" key={index}>
                <div className="card h-100">
                  <img
                    src="src/Images/Fruits.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name : {item.product_name}</h5>
                    <h5 className="card-title">Price : $ {item.product_price}/ kg</h5>
                    <p className="card-text">{item.product_description}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
