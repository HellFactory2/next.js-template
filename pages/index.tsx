import DefaultLayout from 'components/Layout/DefaultLayout';
import { useState } from 'react';
import { Page } from 'types/page';
import cn from 'utils/class-names';

const IndexPage: Page = () => {
  const [happy, setHappy] = useState(false);

  if (happy) return <div className="text-9xl">😊</div>;

  return (
    <div
      className={cn(
        'bg-glass backdrop-filter backdrop-blur-lg',
        {
          'p-4': true,
          'shadow-glass': 1,
        },
        ['border', 'border-white', 'border-opacity-10'],
        'text-center rounded-lg'
      )}
    >
      <div className="text-lg font-bold mb-4">Happy Coding</div>
      <div>If your happy and you know it clap your hands.</div>
      <div>If your happy and you know it clap your hands.</div>
      <div>If your happy and you know it, then your face will surely show it.</div>
      <div>If your happy and you know it clap your hands.</div>
      <div className="mt-4">
        <button
          className="bg-blue-500 p-2 rounded text-white"
          onClick={() => {
            setHappy(true);
          }}
        >
          Yes, I'm Happy
        </button>
      </div>
    </div>
  );
};

IndexPage.Layout = DefaultLayout;

export default IndexPage;
