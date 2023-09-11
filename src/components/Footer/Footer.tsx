import styles from './footer.module.scss';

import { ReactElement } from 'react';
import { Tabs } from '../Tabs';

function Footer(): ReactElement {
  return (
    <footer className={styles.root}>
      <nav className={styles.root__nav}>
        <Tabs />
      </nav>
    </footer>
  );
}

export default Footer;
