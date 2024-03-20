import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../layoutAdmin/index";
import styles from "../styles/products.module.css";
import axios from "axios";
import editIcon from "../../../public/images/edit.svg";
import deleteIcon from "../../../public/images/delete.svg";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img_url: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      console.log("API response:", response.data);
      setProducts(response.data.result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products. Please try again later.");
      setLoading(false);
    }
  };

  const handleEdit = (productId: number) => {
    console.log("Edit clicked for product", productId);
  };

  const handleDelete = async (productId: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`);
      console.log("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <LayoutAdmin>
      <main className={styles.main}>
        {products &&
          products.length > 0 &&
          products.data.map((product) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.imageContainer}>
                <img
                  src={product.img_url}
                  alt={product.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.productDetails}>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>Price: ${product.price}</p>
              </div>
              <div className={styles.icons}>
                <img
                  src={editIcon}
                  alt="Edit"
                  className={styles.editIcon}
                  onClick={() => handleEdit(product.id)}
                />
                <img
                  src={deleteIcon}
                  alt="Delete"
                  className={styles.deleteIcon}
                  onClick={() => handleDelete(product.id)}
                />
              </div>
            </div>
          ))}
      </main>
    </LayoutAdmin>
  );
}
