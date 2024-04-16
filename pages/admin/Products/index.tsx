import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../layoutAdmin/index";
import styles from "../styles/products.module.css";
import Image from "next/image";
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data:{result: {data}} } = await axios.get('http://localhost:3000/api/products');
       
        
        setProducts(await data);
        setLoading(false);
      } catch (error:any) {
        setError('Failed to fetch products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <LayoutAdmin>
      <main className={styles.main}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.img_url}
                  alt={product.name}
                  className={styles.image}
                  width={200}
                  height={200}
                  unoptimized={true}
                />
              </div>
              <div className={styles.productDetails}>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>Price: ${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </main>
    </LayoutAdmin>
  );
}
