import { useEffect } from 'react';
import { useAppSelector } from 'store';

const useModalOpen = () => {
  const isModalOpen = useAppSelector(({ modal: { value } }) => value);

  useEffect(() => {
    const BODY = document.querySelector('.body') as HTMLBodyElement;

    if (isModalOpen) {
      BODY.classList.add('body_overflow');
    } else {
      BODY.classList.remove('body_overflow');
    }
  }, [isModalOpen]);
};

export { useModalOpen };
