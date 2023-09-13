import styles from './footer.module.scss';

import { ReactElement } from 'react';
import { Tabs } from '../Tabs';
import classNames from 'classnames';

interface IFooter {
  fixed: string;
}

function Footer({ fixed }: IFooter): ReactElement {
  return (
    <footer className={classNames(styles.root, styles[fixed])}>
      <nav className={styles.root__nav}>
        <Tabs />
      </nav>
    </footer>
  );
}

export default Footer;
