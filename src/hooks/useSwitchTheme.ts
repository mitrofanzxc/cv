import { useEffect } from 'react';
import { useAppSelector } from 'store';

const useSwitchTheme = () => {
  const isThemeDark = useAppSelector(({ theme: { value } }) => value);

  useEffect(() => {
    const BODY = document.querySelector('.body') as HTMLBodyElement;

    if (!isThemeDark) {
      BODY.classList.add('body_light');
    } else {
      BODY.classList.remove('body_light');
    }
  }, [isThemeDark]);
};

export { useSwitchTheme };
