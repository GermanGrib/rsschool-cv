import { ReactElement, useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';
import { TabsContext } from '../Tabs/TabsContext';

function App(): ReactElement {
  const [activeTab, setActiveTab] = useState(() => {
    const storedValue = localStorage.getItem('activeTab');
    return storedValue ? parseInt(storedValue, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab.toString());
  }, [activeTab]);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </TabsContext.Provider>
  );
}

export default App;
