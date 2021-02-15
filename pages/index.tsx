import { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { counterState } from 'recoil/counter';

const IndexPage: NextPage = () => {
  const [counter, setCounter] = useRecoilState(counterState);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <main>
      <div className="h-screen w-screen bg-white dark:bg-gray-700">
        <div className="h-full px-5 py-8">
          <div className="h-full max-w-sm flex flex-col justify-center items-center m-auto border-2 border-dashed rounded-lg text-lg select-none border-gray-300 dark:border-gray-500 dark:text-gray-200">
            <div>Happy Coding!</div>
            <div className="my-2">{counter}</div>
            <div>
              <button className="px-2 mr-1 border rounded bg-green-400" onClick={handleIncrease}>
                Increase
              </button>
              <button className="px-2 border rounded bg-yellow-400" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
