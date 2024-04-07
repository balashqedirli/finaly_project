import Image from "next/image";
import styles from '../../../styles/Fastfood/Fastfood.module.css';
import images from '../../../public/images/burger.svg';
import photos from '../../../public/images/margarita.svg';
import img from '../../../public/images/food.svg';

interface FastFoodCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const FastFoodCard: React.FC<FastFoodCardProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const FastFood: React.FC = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.header}>
        <h2 className={styles.featuresTitle}>Our Popular Update New Foods</h2>
        <p className={styles.featuresDescription}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and <br /> publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      <div className={styles.features}>
        <FastFoodCard
          title="Dubble Chees"
          description="Dubble Chees "
          icon={<Image src={images} alt="Discount Icon" />}
        />
        <FastFoodCard
          title="Dubble Chees"
          description="Lorem ipsum is placeholder  commonly used in the graphic  "
          icon={<Image src={img} alt="Food Icon" />}
        />
        <FastFoodCard
          title="Twister Menu"
          description="Lorem ipsum is placeholder commonly used in the graphic"
          icon={<Image src={photos} alt="Delivery Icon" />}
        />
      </div>
    </section>
  );
};

export default FastFood;

