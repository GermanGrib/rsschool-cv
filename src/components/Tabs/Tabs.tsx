import styles from './tabs.module.scss';

import { ReactElement } from 'react';
import { tabsSections } from '../../constant/tabsSections';
import classNames from 'classnames';
import { useTabsContext } from './TabsContext';

function Tabs(): ReactElement {
  const { activeTab, setActiveTab } = useTabsContext();

  return (
    <ul className={classNames(styles.nav__list, styles.list)}>
      {tabsSections.map((section, ind): ReactElement => {
        return (
          <li
            key={section.label}
            className={classNames(styles.list__item, { [styles.list__item_active]: ind === activeTab })}
            onClick={(): void => setActiveTab(ind)}
          >
            {activeTab === ind && <span className={styles.list__item_line}></span>}
            {section.label}
          </li>
        );
      })}
    </ul>
  );
}

export default Tabs;
