import Header from 'components/Header';
import Footer from 'components/Footer';
import BeerCatalog from 'components/BeerCatalog';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <BeerCatalog />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
