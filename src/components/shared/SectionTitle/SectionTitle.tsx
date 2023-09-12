import styles from './SectionTitle.module.scss';
import { ReactElement, ReactNode } from 'react';

interface ISectionTitle {
  children: ReactNode;
}

function SectionTitle({ children }: ISectionTitle): ReactElement {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}

export default SectionTitle;
