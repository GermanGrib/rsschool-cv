import styles from './item.module.scss';

import classNames from 'classnames';
import { ReactElement, useState } from 'react';
import { ISectionThreeData } from '../SectioneThree';

function Item({ data }: ISectionThreeData): ReactElement {
  const [isZoomed, setIsZoomed] = useState(false);

  function zoomHover(hide?: boolean): void {
    hide ? setIsZoomed(false) : setIsZoomed(!isZoomed);
  }

  return (
    <li
      key={data.course}
      className={styles.list__item}
      onClick={(): void => zoomHover()}
      onMouseLeave={(): void => zoomHover(true)}
    >
      <div className={styles.list__infoContainer}>
        <div className={styles.list__infoContainer_course}>{data.course}</div>
        <div className={classNames(styles.list__infoContainer_hover, [{ [styles.isZoomed]: isZoomed }])}>
          <img
            className={styles.list__infoContainer_hoverImg}
            src={data.certificateLink}
            alt={data.certificateLink && 'course certificate'}
          />
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
}

export default Item;
