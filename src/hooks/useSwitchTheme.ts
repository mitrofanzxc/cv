import { useEffect } from 'react';
import { useAppSelector } from 'store';

const useSwitchTheme = () => {
  const isThemeDark = useAppSelector(({ theme: { value } }) => value);

  useEffect(() => {
    const BODY = document.querySelector('.body') as HTMLBodyElement;
    const H3 = document.querySelectorAll('.h3');

    if (!isThemeDark) {
      BODY.classList.add('body_light');
      H3.forEach((element) => {
        element.classList.add('h3_light');
      });
    } else {
      BODY.classList.remove('body_light');
      H3.forEach((element) => {
        element.classList.remove('h3_light');
      });
    }
  }, [isThemeDark]);
};

export { useSwitchTheme };
