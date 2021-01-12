import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <main>
      <div className="bg-white dark:bg-gray-800 max-w-screen mx-auto py-6 sm:px-6 lg:px-8 h-screen">
        <div className="px-4 py-6 sm:px-0 h-full">
          <div className="border-4 border-dashed border-gray-200 dark:white rounded-lg h-full flex justify-center items-center text-lg">
            Happy Coding!
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
