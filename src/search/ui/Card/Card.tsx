import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.css";

export const Card = ({
  id,
  name,
  lastname,
  profileImage,
  country,
  description,
  tools,
  speciality,
}: {
  id: string;
  name: string;
  lastname: string;
  profileImage: string;
  country: string;
  description: string;
  tools: string;
  speciality: string;
}) => {
  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={profileImage} alt="Profile" height={120} width={120} />
      </div>
      <div className={styles.namedAndCountry}>
        <h1>
          {name} {` `} {lastname}
        </h1>
        <h2>{country}</h2>
      </div>
      <div className={styles.buttons}>
        <Link
          href={`https://legacy.thenetmakers.com/${id}/portfolio`}
          target="__blank"
        >
          <button>Portfolio</button>
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.speciality}>
          <p className={styles.spaceTop}></p>
          <p>{speciality}</p>
          <p className={styles.spaceBottom}></p>
        </div>

        <div className={styles.tools}>
          <p>{tools}</p>
        </div>
      </div>
    </article>
  );
};
