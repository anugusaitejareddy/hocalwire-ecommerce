import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import useCart from "../../hooks/useCart";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = React.useState([]);
  const [state, setState] = React.useState();
  const [itemAddedToCart, setItemAddedToCart] = React.useState();
  const { cartItems, dispatch } = useCart();

  React.useEffect(() => {
    async function fetchProduct() {
      setState("loading");
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      const json = await response.json();

      if (response.ok) {
        setState("success");
        setProduct(json);
      }
      if (!response.ok) {
        setState("error");
      }
    }
    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    setItemAddedToCart(true);
    const productId = parseInt(id);

    const { title, price, image } = product;
    let isUpdate = false;

    cartItems.forEach((item) => {
      console.log("item.id " + item.id);
      if (item.id === productId) {
        isUpdate = true;
      }
    });
    console.log("id: " + id);
    console.log("isUpdate: " + isUpdate);

    if (isUpdate) {
      dispatch({
        type: "INCREASE_QTY",
        id: productId,
      });
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: { title, price, image, id: productId, quantity: 1 },
      });
    }
  }

  if (state === "loading") {
    return <div className={styles.wrapper}>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.description}
          className={styles.productPageImage}
        />
      </div>
      <div className={styles.detailsWrapper}>
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <div className={styles.rating}>
          <div className={styles.rate}>{product?.rating?.rate}⭐</div>
          <div className={styles.count}>{product?.rating?.count} Ratings</div>
        </div>
        <div className={styles.price}>₹ {Math.ceil(product.price * 80)}</div>
        <div>
          <div className={styles.addToCart}>
            {itemAddedToCart ? (
              <Link to={"/cart"}>Go to Cart →</Link>
            ) : (
              <Link onClick={handleAddToCart}>Add to cart</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
