import { tabsSections } from '../../constant/tabsSections';
import { useTabsContext } from '../Tabs/TabsContext';
import styles from './main.module.scss';
import { ReactElement } from 'react';

function Main(): ReactElement {
  const { activeTab } = useTabsContext();
  return (
    <main className={styles.main}>
      <div>Main Section</div>
      {tabsSections.map((data, ind) => {
        return activeTab === ind ? <div key={data.label}>{data.content}</div> : '';
      })}
    </main>
  );
}

export default Main;
