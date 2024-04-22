import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutAdmin from "../../../layoutAdmin/index";
import TypeOffer from "../OfferType/index";
import Image from "next/image";
import styles from "../styles/offer.module.css";
import deleteIcon from "../../../public/images/delete.svg";

interface Offer {
  id: string;
  name: string;
  description: string;
  img_url: string;
}

export default function Offer() {
  const [offers, setOffers] = useState<Offer[]>([]);

  async function fetchOffers() {
    try {
      const response = await axios.get("http://localhost:3000/api/offer");
      console.log(response.data);

      if (
        response.status === 200 &&
        response.data &&
        Array.isArray(response.data.result.data)
      ) {
        setOffers(response.data.result.data);
      } else {
        console.error("API Response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching offers:", error);
      alert(`An error occurred while fetching offers: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchOffers();
    const interval = setInterval(fetchOffers, 2000);
    return () => clearInterval(interval);
  }, []);

  async function deleteOffer(id: string) {
    try {
      await axios.delete(`http://localhost:3000/api/offer/${id}`);
      console.log("Offer deleted successfully");
      fetchOffers();
    } catch (error) {
      console.error("Error deleting offer:", error);
      alert(`An error occurred while deleting offer: ${error.message}`);
    }
  }

  return (
    <LayoutAdmin>
      <div>
        <TypeOffer />
      </div>
      <main className={styles.main}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offerItem) => (
                <tr key={offerItem.id} className={styles.productRow}>
                  <td>{offerItem.id}</td>
                  <td className={styles.imageCell}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={offerItem.img_url}
                        alt={offerItem.name}
                        width={100}
                        height={100}
                        unoptimized={true}
                      />
                    </div>
                  </td>
                  <td>{offerItem.name}</td>
                  <td>{offerItem.description}</td>
                  <td>
                    <Image
                      src={deleteIcon}
                      alt="Delete icon"
                      width={30}
                      height={30}
                      onClick={() => deleteOffer(offerItem.id)}
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
