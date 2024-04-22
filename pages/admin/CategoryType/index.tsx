import React, { useState } from "react";
import styles from "../styles/categoryType.module.css";

import Image from "next/image";
import upload from "../../../public/images/upload.svg";
import cancelButton from "../../../public/images/cancelbutton.svg";
import axios from "axios";

export default function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

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
      const input = e.target as HTMLInputElement;
      const file = input.files?.[0];
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

  const handleCreateCategory = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/category", {
        name,
        slug,
        img_url: selectedImage,
      });
      if (response.status === 200) {
        alert("Success");
      }
    } catch (error) {
      console.error("Error creating restaurant", error);
      alert("An error occurred");
    }
  };

  return (
    <div className={styles.div}>
      <p className={styles.product} onClick={toggleMenu}>
        Add Category
      </p>

      <div className={isOpen ? styles.menuOpen : styles.menu}>
        <div>
          <p className={styles.pro}>Add Category</p>
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
          <p>Add your Restaurants information</p>
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
                  id="slug"
                  placeholder="Slug"
                  className={styles.txt}
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
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
              handleCreateCategory();
              setIsOpen(false);
            }}
          >
            Create Category
          </button>
        </div>
      </div>
    </div>
  );
}
