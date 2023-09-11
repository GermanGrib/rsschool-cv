import styles from './providerProfile.module.scss';
import { ReactElement } from 'react';

function ProviderProfile(): ReactElement {
  return (
    <div className={styles.providerInfo}>
      <img className={styles.providerInfo__img} src="#" alt="provider picture" />
      <h1 className={styles.providerInfo__title}>German Gribanov</h1>
      <div className={styles.providerInfo__role}>Frontend Developer</div>
    </div>
  );
}

export default ProviderProfile;
