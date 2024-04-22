import React, { useState } from "react";
import styles from "../styles/restuarantsType.module.css";

import Image from "next/image";
import upload from "../../../public/images/upload.svg";
import cancelButton from "../../../public/images/cancelbutton.svg";
import axios from "axios";

export default function Restaurants() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryMin, setDeliveryMin] = useState<number | undefined>(undefined);
  const [deliveryPrice, setDeliveryPrice] = useState<number | undefined>(
    undefined
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    
    fileInput.onchange = (e) => {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (!result) {
          return;
        }

        setSelectedImage(result.toString());
      };
      reader.readAsDataURL(file);
    };

    fileInput.click();
  };

  const handleCancelClick = () => {
    setSelectedImage(null);
  };

  const handleCreateProduct = async () => {
    if (deliveryMin === undefined || deliveryPrice === undefined) {
      alert("butun xanalari doldurun");
      return;
    }
    try {
      const response = await axios
        .post("http://localhost:3000/api/restuarants", {
          name,
          category_id: category,
          img_url: selectedImage,
          cuisine,
          address,
          delivery_min: deliveryMin,
          delivery_price: deliveryPrice,
        });
      if (response.status === 200) {
        alert("xeta");
     
      }
    } catch (error) {
      console.error("Restoranda xeta", error);
      alert("xeta oldu");
    }
  };



  return (
    <div className={styles.div}>
      <p className={styles.product} onClick={toggleMenu}>
        Add Restuarant{" "}
      </p>

      <div className={isOpen ? styles.menuOpen : styles.menu}>
        <div>
          <p className={styles.pro}>Add Restuarant </p>
          <p className={styles.upload}>Upload Image</p>
        </div>

        <div
          className={styles.cont}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <div className={styles.files}>
            {selectedImage && (
              <img src={selectedImage} alt="Photos" className={styles.img} />
            )}

            {selectedImage && (
              <Image
                src={cancelButton}
                alt="Cancel"
                onClick={handleCancelClick}
                className={styles.cancelButton}
              />
            )}

            <Image src={upload} alt="Upload" />

            <p className={styles.color}>Upload</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>Add your Restuarants information</p>
        </div>
        <div className={styles.boxing}>
          <div className={styles.element}>
            <div className={styles.divCont}>
              <form className={styles.inpCont}>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className={styles.txt}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  id="category"
                  placeholder="Category"
                  className={styles.txt}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <input
                  type="text"
                  id="cuisine"
                  placeholder="Cuisine"
                  className={styles.txt}
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                />
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  className={styles.txt}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="number"
                  id="deliveryMin"
                  min="0"
                  step="1"
                  placeholder="Delivery_Min"
                  className={styles.number}
                  value={deliveryMin || ''}
                  onChange={(e) => setDeliveryMin(parseInt(e.target.value))}
                />
                <input
                  type="number"
                  id="deliveryPrice"
                  min="0"
                  step="1"
                  placeholder="Delivery_Price"
                  className={styles.number}
                  value={deliveryPrice || ''}
                  onChange={(e) => setDeliveryPrice(parseInt(e.target.value))}
                />
              </form>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.cancelButton}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
  className={styles.createProductButton}
  onClick={() => {
    handleCreateProduct();
      setIsOpen(false);
  }}
>
  Create Restaurant
</button>
        </div>
      </div>
    </div>
  );
}
