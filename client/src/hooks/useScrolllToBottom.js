import { useEffect, useRef } from 'react';

/**
 * Hook para hacer scroll al final de un elemento
 *
 * @param {Array<any>} data Arreglo de datos
 */
const useScrolllToBottom = (data) => {
  const ref = useRef(null);

  const scrollToBottom = () => {
    // ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    const scroll = ref.current?.scrollHeight - ref.current.clientHeight;
    ref.current?.scrollTo({ top: scroll, left: 0, behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [data]);

  return ref;
};
export default useScrolllToBottom;
