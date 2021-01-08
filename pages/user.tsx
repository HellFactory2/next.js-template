import { useUser } from 'hooks/useUser';
import { NextPage } from 'next';

const UserPage: NextPage = () => {
  const { user } = useUser();
  return <div>{user.name}</div>;
};

export default UserPage;
