import { useState } from 'react';
import { fetchNui } from '../utils/fetchNui';

interface ReturnData {
  x: number;
  y: number;
  z: number;
}

const Coords: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null);

  const handleGetClientData = () => {
    fetchNui<ReturnData>('getClientData')
      .then((retData) => {
        console.log('Got return data from client scripts:');
        console.dir(retData);
        setClientData(retData);
      })
      .catch((e) => {
        console.error('Setting mock data due to error', e);
        setClientData({ x: 500, y: 300, z: 200 });
      });
  };
  return (
    <div className='bg-neutral-950 p-4 rounded-lg border border-white/10 text-zinc-200'>
      <h1 className='text-2xl font-semibold'>Client Coords</h1>
      <div className='flex flex-col space-y-2 mt-4'>
        <button
          className='bg-zinc-200 text-neutral-900 px-4 py-2 rounded-lg'
          onClick={handleGetClientData}
        >
          Get Client Data
        </button>
        {clientData && (
          <div>
            <p>X: {clientData.x}</p>
            <p>Y: {clientData.y}</p>
            <p>Z: {clientData.z}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coords;
