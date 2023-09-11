import styles from './contactMeLink.module.scss';
import { ReactElement } from 'react';

function ContactMeLink(): ReactElement {
  return <a className={styles.contactMeLink} rel="stylesheet" href="#">CONTACT ME</a>;
}

export default ContactMeLink;
