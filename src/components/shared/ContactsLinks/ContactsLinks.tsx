import styles from './contactsLinks.module.scss';
import { ReactElement } from 'react';
import { linksData } from '../../../constant/contactsLinks';

function ContactsLinks(): ReactElement {
  return (
    <div className={styles.svgContainer}>
      {linksData.map((data): ReactElement => {
        return (
          <a className={styles.svgContainer__links} key={data.label} href={data.href} target="_blank">
            {data.svg}
          </a>
        );
      })}
    </div>
  );
}

export default ContactsLinks;
