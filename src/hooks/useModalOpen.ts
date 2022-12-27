import { useEffect } from 'react';
import { useAppSelector } from 'store';

const useModalOpen = () => {
  const isModalOpen = useAppSelector(({ modal: { value } }) => value);

  useEffect(() => {
    const BODY = document.querySelector('.body') as HTMLBodyElement;

    if (isModalOpen) {
      BODY.classList.add('overflow_hidden');
    } else {
      BODY.classList.remove('overflow_hidden');
    }
  }, [isModalOpen]);
};

export { useModalOpen };
