import { useEffect } from 'react';
import { useAppSelector } from 'store';
import { RootState } from '../store/store';

const useSetLocalStorage = (key: keyof RootState) => {
  const { value } = useAppSelector((store) => store[key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
};

export { useSetLocalStorage };
