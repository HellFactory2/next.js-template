import { useEffect } from 'react';
import { useSessionStorage } from './useSessionStorage';

export interface User {
  name: string;
}

export const useUser = () => {
  const [user, setUser] = useSessionStorage<User | undefined>('user', undefined);

  useEffect(() => {
    if (user) return;

    setUser({ name: 'adam' });
    console.log('user data set!');
  }, []);

  return {
    user,
    setUser,
  };
};
