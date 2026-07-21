import { useContext } from 'react';
import { KanbanContext, KanbanContextType } from './KanbanContext';

export const useKanban = (): KanbanContextType => {
  const context = useContext(KanbanContext);

  if (!context) {
    throw new Error('useKanban must be used within KanbanProvider');
  }

  return context;
};
