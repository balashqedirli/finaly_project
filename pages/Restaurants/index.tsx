import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutClient from "../../layoutClient/index";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import styles from "../../styles/Restaurants/restaurants.module.css";
import Footer from "../Components/Footer";


interface Restaurant {
  id: string;
  name: string;
  img_url: string; 
  address: string;
  cuisine: string;
  delivery_min: number; 
  delivery_price: number;
}

const Restaurants: React.FC = () => {
  
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/restuarants");
        if (response.status === 200 && response.data && Array.isArray(response.data.result.data)) {
          setRestaurants(response.data.result.data);
        } else {
          console.error("API Response:", response.data);
        }
      } catch (error: any) {
        console.error("Error fetching restaurants:", error);
        alert(`An error occurred while fetching restaurants: ${(error as Error).message}`);
      }
    };

    fetchRestaurants();
    const interval = setInterval(fetchRestaurants, 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredRestaurants = selectedCategory
    ? restaurants.filter((restaurant) => restaurant.cuisine.toLowerCase() === selectedCategory)
    : restaurants;

  return (
    <LayoutClient>
      <div className={styles.footerHeight}>
        <div className={styles.container}>
          <div className={styles.categories}>
            <button onClick={() => setSelectedCategory(null)}>All</button>
            <button onClick={() => setSelectedCategory("kebab")}>Kebab</button>
            <button onClick={() => setSelectedCategory("soup")}>Soup</button>
            <button onClick={() => setSelectedCategory("pizza")}>Pizza</button>
          </div>
          <main className={styles.main}>
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                imgUrl={restaurant.img_url}
                address={restaurant.address}
                cuisine={restaurant.cuisine}
                deliveryMin={restaurant.delivery_min}
                deliveryPrice={restaurant.delivery_price}
              />
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </LayoutClient>
  );
};

export default Restaurants;
