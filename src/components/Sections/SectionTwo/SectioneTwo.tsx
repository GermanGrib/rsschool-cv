import { mySkills } from '../../../constant/sectionsData';
import { SectionTitle } from '../../shared/SectionTitle';
import styles from './sectionTwo.module.scss';
import { ReactElement } from 'react';

function SectionTwo(): ReactElement {
  const renderSkillsList = (skills: string[]): ReactElement => (
    <ul className={styles.list}>
      {skills.map((skill) => (
        <li key={skill} className={styles.list__item}>
          {skill}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.root}>
      <SectionTitle>My skills</SectionTitle>
      <h3 className={styles.list__title}>Hard</h3>
      {renderSkillsList(mySkills.hard)}
      <h3 className={styles.list__title}>Other</h3>
      {renderSkillsList(mySkills.other)}
    </div>
  );
}

export default SectionTwo;
