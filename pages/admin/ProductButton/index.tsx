import React, { useState, useRef, useCallback } from "react";
import styles from "../styles/productButton.module.css";
import Image from "next/image";
import upload from "../../../public/images/upload.svg";
import cancelButton from "../../../public/images/cancelbutton.svg";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img_url: string;
}

export default function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const selectedRestaurantRef = useRef<HTMLSelectElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
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

  const handleCreateProduct = useCallback(() => {
    const name = nameRef.current?.value;
    const description = descriptionRef.current?.value;
    const price = priceRef.current?.value;
    const restaurant = selectedRestaurantRef.current?.value;

    axios
      .post("http://localhost:3000/api/products", {
        name,
        description,
        price,
        restaurant,
        img_url: selectedImage,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Product created successfully!");
          setIsOpen(false);
        } else {
          alert("Product creation failed!");
        }
      })
      .catch((error) => {
        alert("Product creation failed!");
      });
  }, [selectedImage]);

  return (
    <div className={styles.div}>
      <p className={styles.product} onClick={toggleMenu}>
        + ADD PRODUCT
      </p>

      <div className={isOpen ? styles.menuOpen : styles.menu}>
        <div>
          <p className={styles.pro} onClick={toggleMenu}>
            Add Product
          </p>
          <p className={styles.upload}>Upload your product image</p>
        </div>

        <div className={styles.cont} onClick={handleClick}>
          <div className={styles.files}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected Image"
                className={styles.img}
              />
            )}

            {selectedImage && (
              <Image
                src={cancelButton}
                alt="cancel"
                onClick={handleCancelClick}
                className={styles.cancelButton}
              />
            )}

            <Image src={upload} alt="upload" />

            <p className={styles.color}>upload</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>Add your Product description </p>
          <p>and necessary information</p>
        </div>
        <div className={styles.boxing}>
          <div className={styles.element}>
            <div className={styles.divCont}>
              <form className={styles.inpCont}>
                <input
                  type="text"
                  id="text"
                  placeholder="Name"
                  className={styles.txt}
                  ref={nameRef}
                />
                <textarea
                  name="text"
                  id="text"
                  className={styles.area}
                  placeholder="Description"
                  ref={descriptionRef}
                ></textarea>
                <input
                  type="number"
                  id="rakamInput"
                  min="0"
                  step="1"
                  placeholder="Price"
                  className={styles.number}
                  ref={priceRef}
                />

                <select className={styles.select} ref={selectedRestaurantRef}>
                  <option value="BurgerKing">Burger king</option>
                  <option value="kfc">KFC</option>
                  <option value="mcdonald">Mc Donald's</option>
                </select>
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
            onClick={handleCreateProduct}
            className={styles.createProductButton}
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
}
