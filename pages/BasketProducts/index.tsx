import React from "react";
import styles from "../../styles/BasketProducts/BasketProducts.module.css";
import Image from "next/image";
import PapaJohns from "../../public/images/images.jpg";
import { Item } from '../types/types';  

interface BasketProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const BasketProducts: React.FC<BasketProps> = ({ items, setItems }) => {
  if (!items) return <p>Loading...</p>;

  const totalPrice = items.reduce(
    (total, item) => total + 10 * item.quantity,
    0
  );

  const removeFromBasket = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const changeQuantity = (id: number, delta: number) => {
    setItems(
      items
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className={styles.basketContainer}>
      {items.length > 0 ? (
        <div>
          <h2>
            Your Basket ({items.reduce((acc, item) => acc + item.quantity, 0)}{" "}
            items)
          </h2>
          {items.map((item) => (
            <div key={item.id} className={styles.basketItem}> {/* Here's the key prop */}
              <Image
                src={item.image || PapaJohns}
                alt="product"
                width={150}
                height={120}
                className={styles.productImage}
              />
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemDescription}>{item.description}</p>
                <p className={styles.itemPrice}>Price: </p>
                <div className={styles.quantityControl}>
                  <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                </div>
                <button
                  className={styles.removeItemButton}
                  onClick={() => removeFromBasket(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className={styles.checkoutArea}>
            <button className={styles.checkoutButton}>Checkout</button>
            <p className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <p className={styles.emptyMessage}>Your basket is empty.</p>
      )}
    </div>
  );
};

export default BasketProducts;
