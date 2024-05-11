import React from 'react'
import LayoutClient from '../../layoutClient/index'
import styles from '../../styles/HowItWorks/HowItWorks.module.css'
import Footer from '../Components/Footer'
import delivery from '../../public/images/delivery.png';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

const index = () => {
  return (
    <LayoutClient>
        <main>
            <div className={styles.how}> <FormattedMessage id='work' /> </div>
            <div>
              <p className={styles.paragraph}> <FormattedMessage id='foody' /> </p>
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
