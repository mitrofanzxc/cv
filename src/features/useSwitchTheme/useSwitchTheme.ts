import { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';

const useSwitchTheme = () => {
  const isDark = useAppSelector(({ theme: { value } }) => value);

  useEffect(() => {
    const BODY = document.querySelector('.body') as HTMLBodyElement;
    const H3 = document.querySelectorAll('.h3') as NodeListOf<HTMLHeadingElement>;

    if (!isDark) {
      BODY.classList.add('body-light');
      H3.forEach((element) => {
        element.classList.add('h3-light');
      });
    } else {
      BODY.classList.remove('body-light');
      H3.forEach((element) => {
        element.classList.remove('h3-light');
      });
    }
  }, [isDark]);
};

export { useSwitchTheme };
