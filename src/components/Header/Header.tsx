import { getFullYear } from '../../utils/getFullYear';
import ContactMeLink from '../shared/ContactMeLink/ContactMeLink';
import { ContactsLinks } from '../shared/ContactsLinks';
import { ProviderProfile } from '../shared/ProviderProfile';
import styles from './header.module.scss';
import { ReactElement } from 'react';

function Header(): ReactElement {
  const currentYear = getFullYear();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__aboveContainer}>
          <ProviderProfile />
          <ContactsLinks />
        </div>
        <div className={styles.header__belowContainer}>
          <ContactMeLink />
          <div className={styles.header__rights}>
            <div>© {currentYear}. All Rights Reserved</div>
            <div>
              Design by{' '}
              <a className={styles.header__designLink} href="https://www.behance.net/nastymaxx">
                Anastasiya Maksimenko
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
