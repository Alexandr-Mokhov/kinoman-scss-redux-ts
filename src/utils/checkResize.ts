import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);  

  function debounce(func: Function, timeout = 300){
    let timer: ReturnType<typeof setTimeout>;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(window), timeout);
    };
  }

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth); 
    };
    window.addEventListener('resize', debounce(handleResize, 100));
    return () => {
      window.removeEventListener('resize', debounce(handleResize, 100));
    };
  }, []);

  return width;
};
