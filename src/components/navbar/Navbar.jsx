import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <section className={styles.navbar}>
      <Link to='/'>
      <section className={styles.title}>
      <div className={styles.logoimg}> </div>
        <h1 className={styles.logo}>Mapa de los Comedores</h1>
        </section>
      </Link>
    </section>
  );
}

export default Navbar;