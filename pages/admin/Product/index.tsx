import React, { useState } from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";
import upload from "../../../public/images/upload.svg";
import cancelButton from "../../../public/images/cancelbutton.svg";

export default function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 

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

  return (
    <div className={styles.div}>
      <p className={styles.product} onClick={toggleMenu}>
        + ADD PRODUCT
      </p>

      <div className={isOpen ? styles.menuOpen : styles.menu}>
        <div>
          <p className={styles.pro}>Add Product</p>
          <p className={styles.upload}>Upload your product image</p>
        </div>

        <div
          className={styles.cont}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
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
                />
                <textarea
                  name="text"
                  id="text"
                  className={styles.area}
                  placeholder="Description"
                ></textarea>
                <input
                  type="number"
                  id="rakamInput"
                  min="0"
                  step="1"
                  placeholder="Price"
                  className={styles.number}
                />

                <select className={styles.select}>
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
          <button className={styles.createProductButton}>Create Product</button>
        </div>
      </div>
    </div>
  );
}
