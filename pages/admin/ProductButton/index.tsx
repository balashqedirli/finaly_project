import React, { useState } from "react";
import styles from "../styles/productButton.module.css";
import Image from "next/image";
import upload from "../../../public/images/upload.svg";
import cancelButton from "../../../public/images/cancelbutton.svg";
import axios from "axios";

export default function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rest, setRest] = useState("");
  const [price, setPrice] = useState("");

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
    if (description === "" || price === "") {
      alert("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/api/products", {
        name,
        description,
        img_url: selectedImage,
        rest_id: rest,
        price,
      });
      if (response.status === 200) {
        alert("Product created successfully!");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("An error occurred while creating the product");
    }
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
          <p>Add your Product description</p>
          <p>and necessary information</p>
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
                <textarea
                  id="description"
                  className={styles.area}
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <input
                  type="text"
                  id="price"
                  placeholder="Price"
                  className={styles.number}
                  value={price || ""}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <select
                  className={styles.select}
                  value={rest}
                  onChange={(e) => setRest(e.target.value)}
                >
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
            className={styles.createProductButton}
            onClick={() => {
              handleCreateProduct();
              setIsOpen(false);
            }}
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
}
