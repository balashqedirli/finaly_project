import { useRouter } from "next/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PapaJohns from "../../public/images/johns.png";
import styles from "../../styles/RestaurantsID/RestaurantId.module.css";
import LayoutClient from "../../layoutClient";
import ProductDetails from "../ProductDetails";

const RestaurantDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [restaurant, setRestaurant] = useState<{
    name: string;
    img_url: string;
    address: string;
    cuisine: string;
    delivery_min: number;
    delivery_price: number;
  } | null>(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`http://localhost:3000/api/restuarants/${id}`);
        if (response.status === 200 && response.data && response.data.result) {
          setRestaurant(response.data.result);
        } else {
          console.error("API response", response.data);
        }
      } catch (error: unknown) {
        console.error("Error fetching restaurant:", error);
        if (error instanceof Error) {
          alert(`Error ${error.message}`);
        } else {
          alert('An unknown error occurred');
        }
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <LayoutClient>
      <main className={styles.main}>
        <div className={styles.restaurantDetails}>
          <h1 className={styles.restaurantName}>{restaurant.name}</h1>
          <div className={styles.restaurantImage}>
            <Image
              src={restaurant.img_url || PapaJohns}
              alt={`${restaurant.name} image`}
              className={styles.images}
            />
          </div>
          <div className={styles.container}>
            <div className={styles.cont}>
              <h2 className={styles.address}>
                {restaurant.address} Papa John’s Pizza Restaurant
              </h2>
              <h2 className={styles.cuisine}>pizza, drink, hotdog, sendvich, roll{restaurant.cuisine}</h2>
            </div>
            <div className={styles.class}>
              <h2 className={styles.deliveryMin}>
                {restaurant.delivery_min} minutes
              </h2>
              <h2 className={styles.deliveryPrice}>
                {restaurant.delivery_price} USD
              </h2>
            </div>
            <button className={styles.btn} onClick={() => router.back()}>
              Go Back
            </button>
          </div>
        </div>
      
        <ProductDetails />
      </main>
    </LayoutClient>
  );
};

export default RestaurantDetails;