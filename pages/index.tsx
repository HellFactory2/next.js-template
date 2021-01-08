import { useUser } from 'hooks/useUser';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const IndexPage: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div
            className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center text-lg"
            onClick={() => router.push('/user')}
          >
            Good luck and have fun
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
