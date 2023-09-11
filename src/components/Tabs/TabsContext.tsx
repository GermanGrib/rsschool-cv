import { createContext, useContext, Dispatch, SetStateAction } from 'react';

interface ITabsContext {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export const TabsContext = createContext<ITabsContext | undefined>(undefined);

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }

  return context;
};
