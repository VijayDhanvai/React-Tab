import { FC } from 'react';
import Tab from './Components/Tab';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h2> Simple React Tab</h2>
      <Tab />
    </div>
  );
};
