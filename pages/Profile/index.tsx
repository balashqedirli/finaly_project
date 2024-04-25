import { useState, ChangeEvent } from "react";
import LayoutClient from "../../layoutClient";
import ProfileSidebar from "../ProfileSidebar";
import styles from "../../styles/Profile/Profile.module.css";
import upload from "../../public/images/upload.svg";
import Image from "next/image";
import cancelButton from "../../public/images/UserCancelButton.svg";

export default function Profile() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState({
    contact: "",
    username: "",
    fullname: "",
    email: "",
    address: "",
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedPhoto(URL.createObjectURL(file));
    }
  };

  const handleCancel = () => {
    setSelectedPhoto(null);
    const fileInput = document.getElementById("file-upload") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved", contactInfo);
  };

  return (
    <LayoutClient>
      <main>
        <div className={styles.container}>
          <ProfileSidebar />
          <div className={styles.newContent}>
            <div className={styles.newBox}>
              <p className={styles.profile}>Profile</p>
              <div className={styles.uploadContainer}>
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className={styles.uploadButton}>
                  {selectedPhoto ? (
                    <img
                      src={selectedPhoto}
                      alt="Uploaded Photo"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <Image src={upload} alt="Upload" width={100} height={100} />
                  )}
                  Upload Photo
                </label>
                {selectedPhoto && (
                  <button
                    className={styles.cancelButton}
                    onClick={handleCancel}
                  >
                    <Image
                      src={cancelButton}
                      alt="cancel"
                      width={30}
                      height={30}
                    />
                  </button>
                )}
              </div>
            </div>
            <div className={styles.contactBox}>
              <div className={styles.contactItemLeft}>
                <label htmlFor="contact">Contact:</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="+994"
                  value={contactInfo.contact}
                  onChange={handleChange}
                />
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Gadirov"
                  value={contactInfo.username}
                  onChange={handleChange}
                />
                <label htmlFor="fullname">Full Name:</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Balash Gadirov"
                  value={contactInfo.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.contactItemRight}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="balash.Gadirli@gmail.com"
                  value={contactInfo.email}
                  onChange={handleChange}
                />
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Baku, 28 May"
                  value={contactInfo.address}
                  onChange={handleChange}
                />
                <button className={styles.saveButton} onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutClient>
  );
}
