import classNames from 'classnames';
import { myExperience } from '../../../constant/sectionsData';
import { SectionTitle } from '../../shared/SectionTitle';
import styles from './sectionFour.module.scss';
import { ReactElement } from 'react';

function SectionFour(): ReactElement {
  return (
    <div className={styles.container}>
      <SectionTitle>My experience</SectionTitle>
      <ul className={styles.list}>
        {myExperience.map((data) => {
          return (
            <li key={data.company} className={classNames(styles.list__item, styles.item)}>
              <h3 className={styles.item__title}>{data.company}</h3>
              <div className={styles.item__role}>{data.role}</div>
              <div className={styles.item__duration}>
                {data.startDuration} {data.finishDuration}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SectionFour;
