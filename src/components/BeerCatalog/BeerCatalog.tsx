import React from 'react';
import { useFetchUniques } from 'hooks';
import Loading from 'components/Loading';
import Card from 'components/Card';
import defaultImage from 'assets/images/default.jpg';

import styles from './BeerCatalog.module.scss';

interface Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string | null;
}

const apiUrl = process.env.REACT_APP_API_URL ?? '';
const limit = 30;

const BeerCatalog: React.FC = () => {
  const {
    data: beers,
    loading,
    error,
  } = useFetchUniques<Beer>({
    apiUrl,
    limit,
  });

  return (
    <>
      <div className={styles.container}>
        {beers.map(({ id, image_url, name, tagline }) => (
          <Card key={id} className={styles.card}>
            <img src={image_url ?? defaultImage} loading={'lazy'} alt={`beer-${name}`} />
            <div className={styles.info}>
              <p>{name}</p>
              <p>{tagline}</p>
            </div>
          </Card>
        ))}
      </div>
      {error && <div>{JSON.stringify(error, null, 2)}</div>}
      <Loading status={loading} />
    </>
  );
};

export default BeerCatalog;
