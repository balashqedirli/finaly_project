import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import PapaJohns from "../../public/images/images.jpg";
import styles from "../../styles/ProductDetails/ProductDetails.module.css";
import { useBasket } from "../Context/BasketContext";
import BasketProducts from "../BasketProducts";
import { Item } from '../types/types';  

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToBasket } = useBasket();
  const [product, setProduct] = useState<Item | null>(null);
  const [basket, setBasket] = useState<Item[]>(() => {
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        if (response.status === 200 && response.data) {
          setProduct({...response.data, quantity: 1});  // API'den gelen ürüne default quantity değeri atayın
        } else {
          console.error("API response:", response.data);
        }
      } catch (error: any) {
        console.error("Error fetching product:", error);
        alert(`Error: ${(error as Error).message}`);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToBasket = () => {
    if (product) {
      const existingItem = basket.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedBasket = basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setBasket(updatedBasket);
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
      } else {
        const updatedBasket = [...basket, product];
        setBasket(updatedBasket);
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
      }
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.basket}>
        <div className={styles.basketHeader}>
          <h2>Products</h2>
        </div>
        <div className={styles.basketItem}>
          <div className={styles.itemInfo}>
            <Image src={product.image || PapaJohns} alt="product" width={320} height={240} className={styles.productImage} />
            <div>
              <p className={styles.productName}>Papa John’s Pizza Restaurant {product.name}</p>
              <p className={styles.productDescription}>Prepared with a patty, a slice of cheese and special sauce {product.description}</p>
            </div>
          </div>
          <div className={styles.quantityControl}>
            {product.price && (
              <p className={styles.productPrice}>Price: {product.price.toFixed(2)}</p>
            )}
            <button onClick={() => { addToBasket(product); handleAddToBasket(); }}>+</button>
          </div>
        </div>
      </div>
      <BasketProducts items={basket} setItems={setBasket}/>
    </div>
  );
};

export default ProductDetails;
