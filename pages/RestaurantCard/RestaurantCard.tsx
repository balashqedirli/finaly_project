import React from "react";
import Image from "next/image";
import styles from '../../styles/Restaurants/restaurants.module.css';
import Link from "next/link";

interface RestaurantCardProps {
  id: string;
  name: string;
  imgUrl: string;
  address: string;
  cuisine: string;
  deliveryMin: number;
  deliveryPrice: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  imgUrl,
  address,
  cuisine,
  deliveryMin,
  deliveryPrice,
}) => {
  return (
    
    <Link href={`/Restaurants/${id}`} passHref>
      <div className={styles.restaurantCard}>
        <div className={styles.imageContainer}>
          <Image src={imgUrl} alt={name} width={200} height={200} />
        </div>
        <div className={styles.details}>
          <h3>{name}</h3>
          <p className={styles.address}>Address: {address}</p>
          <p className={styles.deliveryMin}>
            Min. Delivery Time: {deliveryMin} minutes
          </p>
          <p className={styles.price}>Delivery Price: {deliveryPrice} USD</p>
          <p className={styles.cuisine}>Cuisine: {cuisine}</p>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
