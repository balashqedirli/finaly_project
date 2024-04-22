import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../layoutAdmin/index";
import styles from "../styles/products.module.css";
import Image from "next/image";
import axios from "axios";
import deleteIcon from '../../../public/images/delete.svg';

interface Product {
  id: number;
  name: string;
  description: string;
  img_url: string;
  rest_id: string;
  price: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:3000/api/products");

      if (
        response.status === 200 &&
        response.data &&
        Array.isArray(response.data.result.data)
      ) {
        setProducts(response.data.result.data);
      } else {
        console.error("API Response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert(`An error occurred while fetching products: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 2000);
    return () => clearInterval(interval);
  }, []);

  async function deleteProduct(id: number) {
    try {
      const response = await axios.delete(`http://localhost:3000/api/products/${id}`);
      console.log("Product deleted successfully:", response.data);
      
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert(`An error occurred while deleting product: ${error.message}`);
    }
  }


  return (
    <LayoutAdmin>
      <main className={styles.main}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <div className={styles.imageContainer}>
              {product.img_url && (
                <Image
                  src={product.img_url}
                  alt={product.name}
                  className={styles.image}
                  width={200}
                  height={200}
                />
              )}
            </div>
            <div className={styles.productDetails}>
              <h2 className={styles.name}>{product.name}</h2>
              <p className={styles.description}>{product.description}</p>
              <p className={styles.price}>Price: ${product.price}</p>
              <Image
                src={deleteIcon}
                alt="Delete icon"
                width={30}
                height={30}
                onClick={() => deleteProduct(product.id)} 
                className={styles.deleteIcon}
              />

            </div>
          </div>
        ))}
      </main>
    </LayoutAdmin>
  );
}
