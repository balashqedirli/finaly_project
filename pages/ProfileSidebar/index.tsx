import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/ProfileSidebar/Profile.module.css';
import profile from '../../public/images/profile.svg';
import basket from '../../public/images/basket.svg';
import orders from '../../public/images/userorders.svg';
import checkout from '../../public/images/checkout.svg';
import logout from '../../public/images/userlogout.svg';


export default function ProfileSidebar () {
  return (
    
      <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={profile} alt="profile" />
          <Link href="/">
            <span>Profile</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Image src={basket} alt="Products" />
          <Link href="/Basket">
            <span>Basket</span>
          </Link>
        </div>

        <div className={styles.item}>
          <Image src={orders} alt="Orders" />
          <Link href="/Orders">
            <span>Orders</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Image src={checkout} alt="Checkout" />
          <Link href="/Checkout">
            <span>Checkout</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Image src={logout} alt="Logout" />
          <Link href="/Logout">
            <span>Logout</span>
          </Link>
        </div>
       
      </div>
    </div>
  );
}