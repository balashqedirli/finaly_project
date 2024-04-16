import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutAdmin from "../../../layoutAdmin/index";
import Typerestuarants from "../RestuarantsType/index";

interface Restaurant {
  id: string;
  name: string;
  address: string;
  cuisine: string;
  delivery_min: number;
  delivery_price: number;
}

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await axios.get("http://localhost:3000/api/restuarants");
        // console.log("API Complete Response:", response);
        // console.log("API Data Result:", response.data);
        console.log(response.data);
        
        setRestaurants( await response.data.result.data);
        if (
          response.status === 200 &&
          response.data &&
          Array.isArray(response.data)
        ) {
          // setRestaurants(response.data);
        } else {
          console.error("API Response:", response.data);
          // console.log(`${response.statusText}`);
         
        }
      } catch (error:any) {
        console.error("Restoranlarda xeta", error);
        alert(`Restoranlar alindiqda xeta ${error.message}`);
      }
    }

    fetchRestaurants();
  }, []);

  console.log(restaurants);
  

  return (
    <LayoutAdmin>
      <main>
        <div>
          <Typerestuarants />
          <ul>
            {restaurants?.map((restaurant) => (
              <li key={restaurant.id}>
                <h3>{restaurant.name}</h3>
                <p>Adres: {restaurant.address}</p>
                <p>Min. Çatdırılma müddəti: {restaurant.delivery_min} dəqiqə</p>
                <p>Çatdırılma haqqı: {restaurant.delivery_price} USD</p>
                <p>cuisine: {restaurant.cuisine}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </LayoutAdmin>
  );
}
