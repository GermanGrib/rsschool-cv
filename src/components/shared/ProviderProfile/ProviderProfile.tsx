import calculateAge from '../../../utils/calculateAge';
import styles from './providerProfile.module.scss';
import { ReactElement } from 'react';

function ProviderProfile(): ReactElement {
  const currentAge = calculateAge('08.12.1993');

  return (
    <div className={styles.providerInfo}>
      <img className={styles.providerInfo__img} src="../../../../public/images/provider.jpg" alt="provider picture" />
      <h1 className={styles.providerInfo__title}>German Gribanov</h1>
      <div className={styles.providerInfo__role}>Frontend Developer</div>
      <div className={styles.providerInfo__age}>08.12.1993 {currentAge} years</div>
    </div>
  );
}

export default ProviderProfile;
