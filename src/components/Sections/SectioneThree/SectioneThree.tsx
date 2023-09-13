// import classNames from 'classnames';
import { myEducation } from '../../../constant/sectionsData';
import { SectionTitle } from '../../shared/SectionTitle';
import { Item } from './Item';
import styles from './sectionThree.module.scss';
import { ReactElement } from 'react';

export interface ISectionThreeData {
  data: {
    course: string;
    certificateLink: string;
  };
}

function SectionThree(): ReactElement {
  return (
    <div className={styles.container}>
      <SectionTitle>My education</SectionTitle>
      <ul className={styles.list}>
        {myEducation.map((data): ReactElement => {
          return <Item data={data} />;
        })}
      </ul>
    </div>
  );
}

export default SectionThree;
