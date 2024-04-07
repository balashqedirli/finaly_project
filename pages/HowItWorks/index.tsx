import React from 'react'
import LayoutClient from '../../layoutClient/index'
import styles from '../../styles/HowItWorks/HowItWorks.module.css'
import Footer from '../Components/Footer'
import delivery from '../../public/images/delivery.png';
import Image from 'next/image';

const index = () => {
  return (
    <LayoutClient>
        <main>
            <div className={styles.how}>How it works</div>
            <div>
              <p className={styles.paragraph}>Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.</p>
            </div>
            <div className={styles.img}>
            <Image src={delivery} alt='delivery' />
            </div>
            <Footer />
        </main>
    </LayoutClient>
  )
}

export default index
