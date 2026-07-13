import { Accordion } from './components/Accordion';
import { data } from './components/data';

export const App = () => {
  return (
    <div>
      <h1>Accordion</h1>
      <Accordion data={data} />
    </div>
  );
};
