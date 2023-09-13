import { ReactElement, useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';
import { TabsContext } from '../Tabs/TabsContext';
import { useInView } from 'react-intersection-observer';

function App(): ReactElement {
  const [activeTab, setActiveTab] = useState(() => {
    const storedValue = localStorage.getItem('activeTab');
    return storedValue ? parseInt(storedValue, 10) : 0;
  });
  const [isVisible, setIsVisible] = useState(false);
  const [ref] = useInView({
    threshold: 0,
    onChange: (inView) => {
      setIsVisible(inView);
      console.log('WORK');
      console.log(inView);
    },
  });

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab.toString());
  }, [activeTab]);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <>
        <Header />
        <div ref={ref} className={`your-element ${isVisible ? 'visible' : 'hidden'}`}>
          <Main />
        </div>
        <Footer fixed={isVisible ? 'fixed' : ''} />
      </>
    </TabsContext.Provider>
  );
}

export default App;
