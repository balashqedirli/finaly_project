import React from "react";
import styles from '../styles/restuarantsType.module.css';

export default function RestuarantsType () {
    return (
        <div className={styles.types}>
            <div className={styles.restaurants}>
                Restuarants
            </div>
            <div className={styles.selectWrapper}>
                <select className={styles.select}>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Steak">Steak</option>
                    <option value="Coffee">Coffee</option>
                </select>
            </div>
            <div className={styles.addButton}>
           +ADD PRODUCT
            </div>
        </div>
    );
}
