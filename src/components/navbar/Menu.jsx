import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.menuBox}>
    
      <label htmlFor="menu-checkbox" className={styles.menuButton}>
        <input type="checkbox" id="menu-checkbox" className={styles.checkbox} onChange={handleMenuClick} />
        <div className={styles.hamburger}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </label>
      {isMenuOpen && (
        <div className={styles.menu}>
          {/* Your menu items here */}
          <a><Link to='/'><h3 className={styles.home}>Home</h3></Link></a>
          <a><Link to='/us'><h3 className={styles.nosotrxs}>Nosotrxs</h3></Link></a>
          <a><Link to='/listado'><h3 className={styles.lista}>Lista</h3></Link></a>
        </div>
      )}
    </section>
  );
}

export default Menu;