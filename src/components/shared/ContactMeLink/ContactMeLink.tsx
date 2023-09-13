import styles from './contactMeLink.module.scss';
import { ReactElement } from 'react';

function ContactMeLink(): ReactElement {
  return (
    <a
      className={styles.contactMeLink}
      target="_blank"
      rel="stylesheet"
      href="https://api.whatsapp.com/send?phone=79141517989"
    >
      CONTACT ME
    </a>
  );
}

export default ContactMeLink;
