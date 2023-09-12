import { SectionTitle } from '../../shared/SectionTitle';
import styles from './sectionOne.module.scss';
import { ReactElement } from 'react';

function SectionOne(): ReactElement {
  return (
    <div className={styles.container}>
      <SectionTitle>Hello everyone!</SectionTitle>
      <div className={styles.container__text}>
        I worked at a federal company globaldrive.ru for 7 years in sales and eventually managed 7 stores with 55
        employees. Then i became a Front - End developer because it allows me to see results of my work immediately and
        my location doesn't matter. In the future, i want to have a big team and explore new territories and
        possibilities in the industry.
      </div>
    </div>
  );
}

export default SectionOne;
