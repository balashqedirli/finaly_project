import React, { useState, useRef, useCallback } from "react";
import styles from "../styles/productButton.module.css";
import Image from "next/image";
import upload from "../../../public/images/upload.svg";
import cancelButton from "../../../public/images/cancelbutton.svg";
import axios from "axios";
import { response } from '../../../server/utils/response';

export default function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [message, setMessage] = useState("");

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

  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const restRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);



  const addProduct = async () => {
    const productData = {
      name: nameRef.current?.value,
      description:descriptionRef.current?.value,
      rest: restRef.current?.value,
      price: priceRef.current?.value
    }
  
    
    
    setIsOpen(false);
    const name = nameRef.current?.value || "";
    const description = descriptionRef.current?.value || "";
    const rest = restRef.current?.value || "";
    const price = priceRef.current?.value || "";
    

   
    
     await axios
      .post("http://localhost:3000/api/products",{
        name: nameRef.current?.value,
        description:descriptionRef.current?.value,
        rest: restRef.current?.value,
        price: priceRef.current?.value
      },{headers: {Authorization: 'BEARER YOUR_ACCES_TOKEN'}})
      .then( result => {
        console.log(result.config.data);
      })
      .catch((error) => {
        setMessage("Unable to add product",error.response.data);
      });
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
              <form className={styles.inpCont} onSubmit={addProduct}>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className={styles.txt}
                  ref={nameRef}
                />
                <textarea
                  id="description"
                  className={styles.area}
                  placeholder="Description"
                  ref={descriptionRef}
                ></textarea>
                <input
                  type="number"
                  id="price"
                  min="0"
                  step="1"
                  placeholder="Price"
                  className={styles.number}
                  ref={priceRef}
                />

                <select className={styles.select} ref={restRef}>
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
            onClick={() => {
              setIsOpen(false);
              setMessage("");
            }}
          >
            Cancel
          </button>
          <button
            className={styles.createProductButton}
            type="submit"
            onClick={
              addProduct  }
          >
            Create Product
          </button>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
