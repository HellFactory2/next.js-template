import { useEffect } from 'react';
import { useSessionStorage } from './useSessionStorage';

export interface User {
  username: string;
}

export const useUser = () => {
  const [user, setUser] = useSessionStorage<User | undefined>('user', undefined);

  useEffect(() => {
    if (user) return;
    // fetch user data
    setUser({
      username: 'username',
    });
  }, [setUser, user]);

  return {
    user,
    setUser,
  };
};
