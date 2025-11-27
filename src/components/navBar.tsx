'use client';

import { useEffect, useRef, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        className="w-12 h-12 flex items-center justify-center rounded-md cursor-pointer bg-transparent duration-100 hover:bg-zinc-700 focus:outline-none"
      >
        {open ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      <div
        className={
          'origin-top-right absolute -left-20 mt-8 w-48 bg-black backdrop-blur-md border-2 drop-shadow-md shadow-purple-500 border-gray-300 shadow-lg rounded-lg overflow-hidden transition-all duration-100 transform ' +
          (open
            ? 'opacity-100 scale-100 max-h-60 pointer-events-auto'
            : 'opacity-0 scale-95 max-h-0 pointer-events-none')
        }
        style={{
          // smooth max-height transition fallback for non-Tailwind setups
          transitionProperty: 'opacity, transform, max-height',
        }}
        role="menu"
        aria-hidden={!open}
      >
        <ul className="flex flex-col p-2">
          <li>
            <button
              className="w-full text-left px-3 py-2 rounded duration-100 hover:bg-zinc-700"
              onClick={() => setOpen(false)}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="w-full text-left px-3 py-2 rounded duration-100 hover:bg-zinc-700"
              onClick={() => setOpen(false)}
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              className="w-full text-left px-3 py-2 rounded duration-100 hover:bg-zinc-700"
              onClick={() => setOpen(false)}
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
