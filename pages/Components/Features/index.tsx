import Image from "next/image";
import styles from '../../../styles/Features/Features.module.css';
import images from '../../../public/images/Features.svg';
import photos from '../../../public/images/Features1.svg';
import img from '../../../public/images/Features2.svg';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.header}>
        <h2 className={styles.featuresTitle}>Features</h2>
        <p className={styles.featuresDescription}>
          Lorem ipsum is placeholder text commonly used in the graphic, print, 
          and <br />publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      <div className={styles.features}>
        <FeatureCard
          title="Discount Boucher"
          description="Lorem ipsum is placeholder commonly used in the graphic "
          icon={<Image src={images} alt="Discount Icon" />}
        />
        <FeatureCard
          title="Fresh healthy Food"
          description="Lorem ipsum is placeholder commonly used in the graphic "
          icon={<Image src={img} alt="Food Icon" />}
        />
        <FeatureCard
          title="Fast Home Delivery"
          description="Lorem ipsum is placeholder commonly used in the graphic"
          icon={<Image src={photos} alt="Delivery Icon" />}
        />
      </div>
    </section>
  );
};

export default Features;
