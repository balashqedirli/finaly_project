import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutAdmin from "../../../layoutAdmin/index";
import Typerestuarants from "../RestuarantsType/index";
import Image from "next/image";
import styles from '../styles/restaurants.module.css';
import deleteIcon from '../../../public/images/delete.svg'

interface Restaurant {
  id: string;
  name: string;
  img_url: string;
  address: string;
  cuisine: string;
  delivery_min: number;
  delivery_price: number;
}
export default function Restaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

 
  async function fetchRestaurants() {
    try {
      const response = await axios.get("http://localhost:3000/api/restuarants");
      
      console.log(response.data);
      if (response.status === 200 && response.data && Array.isArray(response.data.result.data)) {
        setRestaurants(response.data.result.data);
      } else {
        console.error("API Response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      alert(`An error occurred while fetching restaurants: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchRestaurants();
    const interval = setInterval(fetchRestaurants, 2000);
    return () => clearInterval(interval);
  }, []);

  async function deleteRestaurant(id: string) {
    try {
      const response = await axios.delete(`http://localhost:3000/api/restuarants/${id}`);
      console.log("Restaurant deleted successfully:", response.data);
      
     
      fetchRestaurants();
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      alert(`An error occurred while deleting restaurant: ${error.message}`);
    }
  }


  return (
    <LayoutAdmin>
      <div>
        <Typerestuarants />
      </div>
      <main className={styles.main}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={styles.product}>
            <div className={styles.imageContainer}>
              <Image
                src={restaurant.img_url}
                alt={restaurant.name}
                className={styles.image}
                width={200}
                height={200}
                unoptimized={true}
              />
            </div>
            <h3>{restaurant.name}</h3>
            <p className={styles.adress}>Adres: {restaurant.address}</p>
            <p className={styles.deliveryMin}>Min. Çatdırılma müddəti: {restaurant.delivery_min} dəqiqə</p>
            <p className={styles.price}>Çatdırılma haqqı: {restaurant.delivery_price} USD</p>
            <p className={styles.cuisine}>cuisine: {restaurant.cuisine}</p>
            <Image
                src={deleteIcon}
                alt="Delete icon"
                width={30}
                height={30}
                onClick={() => deleteRestaurant(restaurant.id)} 
                className={styles.deleteIcon}
              />
          </div>
        ))}
      </main>
    </LayoutAdmin>
  );
}
