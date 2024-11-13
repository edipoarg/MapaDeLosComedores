import { useEffect, useState } from "react";
import styles from './Us.module.css';
import comedoresFoto from "../data/comedores.jpg";

// Array of background images
const backgroundImages = [
  "https://static.wixstatic.com/media/bd63ad_0be43ed10b244b54837f9f3768f60c24~mv2.jpg/v1/fill/w_750,h_501,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Merendero%20comuna%2012-4_JPG.jpg",
  "https://static.wixstatic.com/media/bd63ad_3fa29484540c49c182114db18a72df73~mv2.jpg/v1/fill/w_750,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_DSC9704.jpg",
  "https://static.wixstatic.com/media/bd63ad_ab1c9f5e6cd24ae2b0ea098f62486a7b~mv2.jpg/v1/fill/w_750,h_509,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DSC09185.jpg",
  "https://static.wixstatic.com/media/bd63ad_af42eef0a40943e9aeb09e1662791f2f~mv2.jpg/v1/fill/w_750,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0273.jpg",
  "https://static.wixstatic.com/media/bd63ad_12c8411c467c4b66a113127a7cc55153~mv2.jpg/v1/fill/w_750,h_501,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_A746649.jpg",
  "https://static.wixstatic.com/media/bd63ad_a84dc14394444171a4e2b03c14745349~mv2.jpg/v1/fill/w_750,h_501,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_A746239.jpg",
  "https://static.wixstatic.com/media/bd63ad_54ab48dd03bb4bd9828c1e8c738dec30~mv2.jpg/v1/fill/w_750,h_501,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_A746640.jpg",
  "https://static.wixstatic.com/media/bd63ad_cb87eb5e2c72486d868cd097a2eaeea9~mv2.jpg/v1/fill/w_750,h_489,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DSC09190%20(1).jpg",
  "https://static.wixstatic.com/media/bd63ad_43a1867959144377918229bd3f613e14~mv2.jpg/v1/fill/w_750,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_DSC9676.jpg",
  "https://static.wixstatic.com/media/bd63ad_f1760a7786f847babf89dc5be4892f0e~mv2.jpg/v1/fill/w_750,h_473,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_DSC9672.jpg"
];

function Us() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`
      }}
    >
      <section className={styles.info}>
      <h1 className={styles.title}>MAPA DE LOS COMEDORES</h1>
      <h2 className={styles.subtitle}>La ciudad solidaria</h2>
      <p className={styles.description}>
        Somos un conjunto de organizaciones de la sociedad civil de la Ciudad de Buenos Aires que todos los días sostenemos comedores y merenderos comunitarios.
        Esperamos que este Mapa de los Comedores sea un aporte a la visibilización y valoración de cada persona que dedica su tiempo y su trabajo para tenderle una mano a miles de otras en estos momentos difíciles.
        Buenos Aires es una Ciudad solidaria.
      </p>
      </section>
    </div>
  );
}

export default Us;
