// components/FadeWrapper.js
import { useState, useEffect } from 'react';

export default function FadeWrapper({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, [children]);

  return (
    <div
      className={`h-full transition-all duration-500 ease-in-out transform
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
      `}
    >
      {children}
    </div>
  );
}
