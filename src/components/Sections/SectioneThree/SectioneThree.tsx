import { myEducation } from '../../../constant/sectionsData';
import { SectionTitle } from '../../shared/SectionTitle';
import styles from './sectionThree.module.scss';
import { ReactElement } from 'react';

function SectionThree(): ReactElement {
  return (
    <div className={styles.container}>
      <SectionTitle>My education</SectionTitle>
      <ul className={styles.list}>
        {myEducation.map((data): ReactElement => {
          return (
            <li key={data.course} className={styles.list__item}>
              <div className={styles.list__infoContainer}>
                <div className={styles.list__infoContainer_course}>{data.course}</div>
                <div className={styles.list__infoContainer_hover}>
                  <img src={data.certificateLink} alt="course certificate" />
                </div>
              </div>
              <svg className={styles.list__svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SectionThree;
