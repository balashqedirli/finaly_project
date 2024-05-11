import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutAdmin from "../../../layoutAdmin/index";
import TypeCategory from "../CategoryType/index";
import Image from "next/image";
import styles from "../styles/category.module.css";
import deleteIcon from "../../../public/images/delete.svg";

interface Category {
  id: string;
  name: string;
  img_url: string;
  slug: string;
}

export default function Category() {
  const [category, setCategory] = useState<Category[]>([]);

  async function fetchCategory() {
    try {
      const response = await axios.get("http://localhost:3000/api/category");
      console.log(response.data);

      if (
        response.status === 200 &&
        response.data &&
        Array.isArray(response.data.result.data)
      ) {
        setCategory(response.data.result.data);
      } else {
        console.error("API Response:", response.data);
      }
    } catch (error: any) { 
      console.error("Error fetching categories:", error);
      alert(`An error occurred while fetching categories: ${(error as Error).message}`); 
    }
  }

  useEffect(() => {
    fetchCategory();
    const interval = setInterval(fetchCategory, 1000);
    return () => clearInterval(interval);
  }, []);

  async function deleteCategory(id: string) {
    try {
      await axios.delete(`http://localhost:3000/api/category/${id}`);
      console.log("Category deleted successfully");
      fetchCategory();
    } catch (error: any) { 
      console.error("Error deleting category:", error);
      alert(`An error occurred while deleting category: ${(error as Error).message}`); 
    }
  }

  return (
    <LayoutAdmin>
      <div>
        <TypeCategory />
      </div>
      <main className={styles.main}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {category.map((categoryItem) => (
                <tr key={categoryItem.id} className={styles.productRow}>
                  <td>{categoryItem.id}</td>
                  <td className={styles.imageCell}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={categoryItem.img_url}
                        alt={categoryItem.name}
                        width={100}
                        height={100}
                        unoptimized={true}
                      />
                    </div>
                  </td>
                  <td>{categoryItem.name}</td>
                  <td>{categoryItem.slug}</td>
                  <td>
                    <Image
                      src={deleteIcon}
                      alt="Delete icon"
                      width={30}
                      height={30}
                      onClick={() => deleteCategory(categoryItem.id)}
                      className={styles.deleteIcon}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </LayoutAdmin>
  );
}
