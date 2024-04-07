import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../layoutAdmin/index";
import styles from "../styles/products.module.css";
import axios from "axios";
import editIcon from "../../../public/images/edit.svg";
import deleteIcon from "../../../public/images/delete.svg";
import Image from "next/image";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data.result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products. Please try again later.");
      setLoading(false);
    }
  };

  const handleEdit = (productId) => {
    console.log("Edit clicked for product", productId);

  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`);
      alert("Product deleted successfully");
      fetchProducts(); 
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product. Please try again.");
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
              <div className={styles.icons}>
                <Image
                  src={editIcon}
                  alt="Edit"
                  className={styles.editIcon}
                  onClick={() => handleEdit(product.id)}
                />
                <Image
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
