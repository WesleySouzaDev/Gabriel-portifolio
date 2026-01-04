'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { FaRegMoon, FaSun } from 'react-icons/fa';

const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    console.log('rederizou');
    setMounted(true);
  }, []);

  // evita mismatch SSR — não renderiza até o hook estar montado
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="w-full h-full flex justify-start ml-4">
      <button
        className="w-12 h-full grid place-items-center text-xl hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-none bg-transparent rounded-md duration-100"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label="Alternar tema"
        title="Alternar tema"
      >
        {isDark ? (
          <FaSun className="mobileIcon" />
        ) : (
          <FaRegMoon className="mobileIcon" />
        )}
      </button>
    </div>
  );
};

export default ToggleTheme;
