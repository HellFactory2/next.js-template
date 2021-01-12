import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <main>
      <div className="h-screen w-screen bg-white dark:bg-gray-700">
        <div className="h-full px-5 py-8">
          <div className="h-full max-w-sm flex justify-center items-center m-auto border-2 border-dashed rounded-lg text-lg select-none border-gray-300 dark:border-gray-500 dark:text-gray-200">
            Happy Coding!
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
