import styles from "./styles/login.module.css";
import Image from "next/image";
import images from "../../public/images/files.svg";
import { FormattedMessage, useIntl } from "react-intl";
import Language from "../../Components/language/Language";
import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";

export default function Login() {
  const { formatMessage } = useIntl();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (username === "adminB" && password === "BG12345") {
      setError("");
      router.push("admin/Dashboard");
    } else {
      setError(formatMessage({ id: "error" }));
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <div className={styles.back}>
      <h2 className={styles.food}>Foody</h2>
      <div className={styles.centerbox}>
        <div className={styles.admin}>
          <h1 className={styles.welcome}>
            <FormattedMessage id="welcome" />
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="Username"
              id="Username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              className={styles.input}
              type="password"
              name="Password"
              id="Password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {error && (
              <div className={`${styles.error} ${styles.shake}`}>{error}</div>
            )}

            <button type="submit" className={styles.btn}>
              Sign in
            </button>
          </form>
        </div>

        <div className={styles.imgContainer}>
          <Image src={images} alt="background" />
          <div className={styles.lang}>
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
}
