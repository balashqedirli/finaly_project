import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/ProfileSidebar/Profile.module.css';
import profile from '../../public/images/profile.svg';
import basket from '../../public/images/basket.svg';
import orders from '../../public/images/userorders.svg';
import checkout from '../../public/images/checkout.svg';
import logout from '../../public/images/userlogout.svg';
import Router, { useRouter } from "next/router";


export default function ProfileSidebar () {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    
      <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={profile} alt="profile" />
          <Link href="/Profile">
            <span>Profile</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Image src={basket} alt="Basket" />
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
          <Link href="/">
          <button onClick={handleLogout}>Logout</button>
          </Link>
        </div>
       
      </div>
    </div>
  );
}