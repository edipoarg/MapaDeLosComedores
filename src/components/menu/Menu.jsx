import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importar íconos

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Cerrar el menú después de seleccionar un botón
  };

  return (
    <section className={styles.menuBox}>
      <section className={styles.socialNetworks}>
        {/* Botones para redes sociales */}
        <Link to="/facebook" className={styles.iconButton}>
          <FaFacebookF />
        </Link>
        <Link to="/twitter" className={styles.iconButton}>
          <FaTwitter />
        </Link>
        <Link to="/instagram" className={styles.iconButton}>
          <FaInstagram />
        </Link>
      </section>
      <label htmlFor="menu-checkbox" className={styles.menuButton}>
        <input
          type="checkbox"
          id="menu-checkbox"
          className={styles.checkbox}
          checked={isMenuOpen}
          onChange={handleMenuClick}
        />
        <div className={styles.hamburger}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </label>
      {isMenuOpen && (
        <div className={styles.menu}>
          <div className={styles.menuBackground}>
            <a onClick={handleLinkClick}>
              <Link to="/">
                <h3 className={styles.home}>* MAPA </h3>
              </Link>
            </a>
            <a onClick={handleLinkClick}>
              <Link to="/colaborar">
                <h3 className={styles.colaborar}>* Cómo Colaborar </h3>
              </Link>
            </a>
            <a onClick={handleLinkClick}>
              <Link to="/informes">
                <h3 className={styles.lista}>* Datos e Informes </h3>
              </Link>
            </a>
            <a onClick={handleLinkClick}>
              <Link to="/quienes-somos">
                <h3 className={styles.nosotrxs}>* Quiénes Somos </h3>
              </Link>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Menu;
