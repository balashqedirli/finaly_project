import React from 'react';
import LayoutClient from "../../layoutClient";
import ProfileSidebar from "../ProfileSidebar";
import deleteIcon from '../../public/images/BasketDeleteIcon.svg';
import styles from '../../styles/Basket/Basket.module.css';
import Image from "next/image";
import { useBasket } from "../Context/BasketContext";
import PapaJohns from '../../public/images/images.jpg';
import Footer from '../Components/Footer';

const Basket = () => {
  const { basket, updateQuantity, removeFromBasket } = useBasket();

  const totalPrice: number = basket.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (id: number) => {
    updateQuantity(id, 1);
  };

  const handleDecrement = (id: number) => {
    updateQuantity(id, -1);
  };

  return (
    <LayoutClient>
      <main>
        <div className={styles.container}>
          <ProfileSidebar />
          <div className={styles.basket}>
            <div className={styles.basketHeader}>
              <h2>Your Basket</h2>
            </div>
         
            {basket.map((item: any) => (
              <div key={item.id} className={styles.basketItem}>
                <div className={styles.itemInfo}>
                  <Image src={PapaJohns} alt="product" width={100} height={100} />
                  <div>
                    <p>{item.name}Papa John’s Pizza Restaurant</p>
                    <p>Prepared with a patty, a slice of cheese and special sauce {item.description}</p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <div className={styles.removeItem}>
                  <Image src={deleteIcon} alt="delete" width={30} height={30} onClick={() => removeFromBasket(item.id)} />
                </div>
              </div>
            ))}
            
            <div className={styles.checkoutContainer}>
              <p className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</p>
              <button className={styles.checkoutButton}>Checkout</button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </LayoutClient>
  );
};

export default Basket;
