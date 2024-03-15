import { debugData } from './utils/debugData';

import Coords from './components/coords';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  },
]);

const App: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Coords />
    </div>
  );
};

export default App;
