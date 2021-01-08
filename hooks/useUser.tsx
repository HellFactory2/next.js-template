import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useUser = () => {
  const [user, setUser] = useLocalStorage<any>('user', undefined);

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
