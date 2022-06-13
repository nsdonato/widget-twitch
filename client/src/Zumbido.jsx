import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { SERVER_URL } from './contants';

const ZumbidoWidget = () => {
  const [active, setActive] = useState(false);
  const [zumbidoSound] = useState(
    new Audio('/assets/audio/zumbido.mp3'),
  );

  const handleZumbido = () => {
    const interval$ = setInterval(() => {
      zumbidoSound.play();
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 500);
    }, 500);

    setTimeout(() => {
      zumbidoSound.volume = 0.2;
      zumbidoSound.play();
      clearInterval(interval$);
    }, 3001);
  };

  useEffect(() => {
    const socket = io(SERVER_URL);
    socket.on('zumbido', handleZumbido);

    return () => {
      socket.off('zumbido');
    };
  }, []);

  return (
    <></>
  );
};
export default ZumbidoWidget;
