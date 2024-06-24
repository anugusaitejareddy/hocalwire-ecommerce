import React from "react";
import ProductCard from "../ProductCard";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = React.useState([]);
  // console.log(products);
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
        // <Link to={product.id.toString()}>
        // </Link>
      ))}
    </div>
  );
}

export default Home;
