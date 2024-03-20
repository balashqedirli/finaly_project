// import Image from "next/image";
// import React, { ReactNode } from "react";
// import LayoutAdmin from "../../../layoutAdmin/index";

// interface DashboardProps {
//     children: ReactNode;
//   }

// export default function Restaurants () {
//     return (
//       <LayoutAdmin>
//         <main>
//            <div>

//            </div>
//         </main>
//       </LayoutAdmin>
//     );
// }







import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import LayoutAdmin from "../../../layoutAdmin/index";
import styles from "../styles/products.module.css";
import axios from "axios";
import editIcon from "../../../public/images/edit.svg";
import deleteIcon from "../../../public/images/delete.svg";
import Product from "../PostApiProducts/index";
import add from '../add/index'



interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img_url: string;
}

interface DashboardProps {
  children: ReactNode;
}

export default function Restuarants() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/restuarants");
      setProducts(response.data.result.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // const handleEditProduct = async (productId: number) => {
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:3000/api/products/${productId}`
  //     );
  //     console.log("succesfully", response.data);
  //     fetchProducts();
  //   } catch (error) {
  //     console.error("Error", error);
  //   }
  // };

  const [isOpen, setIsOpen] = useState(false);

  const openEditMenu = () => {
    setIsOpen(true);
  };

  const closeEditMenu = () => {
    setIsOpen(false);
  };

  return (
    
    <LayoutAdmin>
      
      <main className={styles.main}>
        {products.map((product) => (
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
              <p className={styles.price}>price: ${product.price}</p>
            </div>
            <div className={styles.icons}>
              <Image
                src={editIcon}
                alt="Edit"
                className={styles.editIcon}
                
              />
              
              <Image
                src={deleteIcon}
                alt="Delete"
                className={styles.deleteIcon}
              />
            </div>
          </div>
        ))}
      </main>
    </LayoutAdmin>
  );
}

